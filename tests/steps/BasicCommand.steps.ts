import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test'; // ⬅️ ADD THIS MISSING LINE

const { When } = createBdd();

// 1. Open Website Command
// This connects directly to your English "When I open website..." sentence
When('I open website {string}', async ({ page }, url) => {
  await page.goto(url);
});

// 2. Click Command
When('I touch {string}', async ({ page }, visibleText) => {
  try {
    // 1. Try to click it as an explicit button element
    await page.getByRole('button', { name: visibleText, exact: true }).click({ timeout: 1500 });
  } catch {
    try {
      // 2. Fall back to checking if it is an anchor link styled as a button
      await page.getByRole('link', { name: visibleText, exact: true }).first().click({ timeout: 1500 });
    } catch {
      // 3. Final resort: click standard text safely with a fast fallback timeout
      await page.getByText(visibleText, { exact: false }).first().click({ timeout: 2000 });
    }
  }
});


// 3. Wait Command
When('I wait for {int} seconds', async ({ page }, seconds) => {
  // Multiply seconds by 1000 to convert to milliseconds
  await page.waitForTimeout(seconds * 1000);
});


// 4. SMART VERIFY: Checks visibility and gracefully handles duplicate elements
When('I see the text {string}', async ({ page }, expectedText) => {
  // Adding .first() protects the test from crashing if the word appears multiple times
  await expect(page.getByText(expectedText, { exact: false }).first()).toBeVisible();
});


// 5. FIXED FIELDNAME SELECTOR: Safely type text into exact input elements only
When('I type {string} into field name {string}', async ({ page }, textToType, fieldNameAttribute) => {
  // Adding 'input' in front of the brackets guarantees it ignores wrapper divs completely
  await page.locator(`input[data-fieldname="${fieldNameAttribute}"]`).fill(textToType);
});



// 6. Input Value in a ID
When('I type {string} into id {string}', async ({ page }, textToType, idAttribute) => {
  // The '#' symbol instructs Playwright to look strictly for the id="login_email" attribute
  await page.locator(`#${idAttribute}`).fill(textToType);
});


// 6. Find string (EXACT MATCH + DUPLICATE SAFE)
When('I find the text {string}', async ({ page }, visibleText) => {
  // 1. exact: true ensures "Email Address" will NEVER match "Business Email Address"
  // 2. .first() ensures it won't crash if the exact word appears 6 times
  const element = page.getByText(visibleText, { exact: true }).first();
  
  await element.scrollIntoViewIfNeeded({ timeout: 3000 });
});



// 7. Open New Tab with new Link
When('I open a new tab and go to link {string}', async ({ page, context }, url) => {
  // 1. Tell the browser context to open a clean new page (tab)
  const newTab = await context.newPage();
  // 2. Drive that new tab directly to your specified URL
  await newTab.goto(url);
  // 3. Move Playwright's focus so all your following test steps control this new tab
  Object.assign(page, newTab);
});


// 13. FIXED WITH 3s TIMEOUT + BROWSER CLICK EVENT
When('I click the link pointing to {string}', async ({ page }, targetHref) => {
  const targetLink = page.locator(`a[href="${targetHref}"]`).first();

  // 1. Explicitly wait for the element to exist in the DOM, failing after 3 seconds if not found
  await targetLink.waitFor({ state: 'attached', timeout: 3000 });

  // 2. Safely trigger the click directly in the browser architecture
  await targetLink.dispatchEvent('click');
});



// 19. SMART VERIFY BUTTON: Verifies visibility of either a button tag or a link matching the text
When('I see the button {string}', async ({ page }, buttonText) => {
  const buttonRole = page.getByRole('button', { name: buttonText, exact: true });
  const linkRole = page.getByRole('link', { name: buttonText, exact: true });

  // Checks if either the button role or the link version is visible on your page layout
  if (await buttonRole.count() > 0) {
    await expect(buttonRole.first()).toBeVisible();
  } else {
    await expect(linkRole.first()).toBeVisible();
  }
});


// 20. SMART VERIFY FIELD VALUE: Works for both standard input textboxes and dropdown menus
When('the field name {string} should contain value {string}', async ({ page }, fieldNameAttribute, expectedValue) => {
  const inputField = page.locator(`input[data-fieldname="${fieldNameAttribute}"]`);
  const selectField = page.locator(`select[data-fieldname="${fieldNameAttribute}"]`);

  // 1. If it's an ERPNext dropdown menu (<select>), verify its chosen label value
  if (await selectField.count() > 0) {
    await expect(selectField).toHaveValue(expectedValue);
  } else {
    // 2. Otherwise, treat it as a standard text input field box
    await expect(inputField).toHaveValue(expectedValue);
  }
});


// 21. Select an option from an ERPNext dropdown by its data-fieldname
When('I select option {string} from dropdown field {string}', async ({ page }, optionText, fieldNameAttribute) => {
  // Finds the select dropdown component and chooses the correct option label
  await page.locator(`select[data-fieldname="${fieldNameAttribute}"]`).selectOption({ label: optionText });
});

// 22. Verify a dropdown field has a specific option selected
When('the dropdown field {string} should show selected option {string}', async ({ page }, fieldNameAttribute, expectedValue) => {
  // Asserts that the dropdown element holds the correct selection value state
  await expect(page.locator(`select[data-fieldname="${fieldNameAttribute}"]`)).toHaveValue(expectedValue);
});

// 24. STRICT OBJECT FILL: Fails the test if a field name cannot be found on the page
When('I fill out the form using this data configuration', async ({ page }, customObjectText: string) => {
  const cleanText = customObjectText
    .replace(/[{}]/g, '')                            
    .replace(/#[^\n]*/g, '')                         
    .trim();
  
  const lines = cleanText.split('\n');

  for (const line of lines) {
    if (!line.includes(':')) continue; 

    // Splitting by the first colon only prevents breaking values containing colons (e.g. times)
    const firstColonIndex = line.indexOf(':');
    let field = line.slice(0, firstColonIndex).trim();
    let val = line.slice(firstColonIndex + 1).trim();

    if (val.endsWith(',')) {
      val = val.slice(0, -1).trim();
    }

    const inputField = page.locator(`input[data-fieldname="${field}"]`);
    const selectField = page.locator(`select[data-fieldname="${field}"]`);
    const generalField = page.locator(`[data-fieldname="${field}"]`);

    // 1. CRUCIAL CHECK: Ensure at least one matching selector exists on the screen
    const totalMatches = await inputField.count() + await selectField.count() + await generalField.count();
    
    if (totalMatches === 0) {
      // Intentionally crash the test run with a clear, helpful error message
      throw new Error(`QA Error: The field name "${field}" does not exist on this webpage. Please double-check your feature file spelling!`);
    }

    // 2. Proceed with filling out the element if found
    if (await selectField.count() > 0) {
      await selectField.selectOption({ label: val });
    } else if (await inputField.count() > 0) {
      const typeAttr = await inputField.getAttribute('type');
      
      if (typeAttr === 'text' && (await generalField.locator('select, .combobox').count() > 0 || field.includes('attainment') || field.includes('status') || field.includes('residency'))) {
        await inputField.click();
        await inputField.fill(val);
        await page.keyboard.press('Enter');
      } else {
        await inputField.fill(val);
      }
    } else if (await generalField.count() > 0) {
      await generalField.first().fill(val);
    }
  }
});


// 25. Click a collapsible section container by its header text layout profile
When('I open the form section {string}', async ({ page }, sectionHeadingText) => {
  // Finds the specific section-head div matching your title text string description
  const sectionHeader = page.locator('div.section-head', { hasText: sectionHeadingText });
});

// 26. EXPLICIT BUTTON PRESS: Targets actual HTML buttons or interactive clickable nodes by role
When('I press the button {string}', async ({ page }, buttonText) => {
  // getByRole('button') ignores background text duplicates, links, and headings completely
  // exact: true ensures searching for "Edit" will not click "Edit Profile" by accident
  const targetButton = page.getByRole('button', { name: buttonText, exact: true });

  // If a developer styled a link (<a> tag) as a button, fallback to checking link roles
  const targetLinkButton = page.getByRole('link', { name: buttonText, exact: true });

  if (await targetButton.count() > 0) {
    await targetButton.first().click();
  } else if (await targetLinkButton.count() > 0) {
    await targetLinkButton.first().click();
  } else {
    // If neither matches the technical role, throw a helpful message
    throw new Error(`QA Error: Could not find an interactive button or link element matching the text "${buttonText}".`);
  }
});


// FIXED FIELDNAME CLICK SELECTOR: Safely click exact input/button elements by field name
When('I click the field name {string}', async ({ page }, fieldNameAttribute) => {
  // Target the element using the data attribute
  const element = page.locator(`[data-fieldname="${fieldNameAttribute}"]`).first();
  
  // Deliver a real mouse interaction while forcing it to bypass viewport boundary checks
  await element.click({ force: true, timeout: 3000 });
});

// FIXED CHECKBOX CLICK SELECTOR: Safely click checkbox inputs by field name
When('I click the checkbox field name {string}', async ({ page }, fieldNameAttribute) => {
  await page.click(`input[data-fieldname="${fieldNameAttribute}"]`);
});



// CLICK FIELD FILTER MATCHING GHERKIN STRING
When('I click the field filter {string} that shows {string}', async ({ page }, filterKey, filterValue) => {
  // Directly targets the exact attribute format: data-filter="first_name,=,Mari"
  const filterElement = page.locator(`a[data-filter="${filterKey},=,${filterValue}"]`).first();
  
  // Uses force: true to safely click the link even if it has collapsed layout boundaries
  await filterElement.click({ force: true, timeout: 3000 });
});

// VERIFY FIELD VALUE IN TABLE/GRID
When('the field filter {string} shows {string}', async ({ page }, filterKey, filterValue) => {
  // Directly targets the exact attribute format: data-filter="first_name,=,Mari"
  const filterElement = page.locator(`a[data-filter="${filterKey},=,${filterValue}"]`);
  
  // Fails within 3 seconds if the filter element is missing or hidden
  await expect(filterElement).toBeVisible({ timeout: 3000 });
});


// CLICK FIRST LIST RECORD SELECTOR
When('I click the first record in the list', async ({ page }) => {
  // Targets the actual record layout wrapper and selects the first specific item link inside it
  const firstRecordLink = page.locator('.list-row .list-subject a.ellipsis').first();

  // Fail fast within 3 seconds if the list data grid fails to load
  await firstRecordLink.waitFor({ state: 'attached', timeout: 3000 });

  // Use force: true to safely pass text-overflow or compressed bounding structures
  await firstRecordLink.click({ force: true });
});

// 34. RESILIENT TAB SELECTION WITH ACTIVE STATE VERIFICATION
When('I press the tab {string}', async ({ page }, tabText) => {
  // Convert "Documents" -> "documents_tab" to accurately target the data attribute
  const derivedFieldName = `${tabText.toLowerCase().replace(/\s+/g, '_')}_tab`;
  const targetTab = page.locator(`button[data-fieldname="${derivedFieldName}"]`).first();

  // 1. Fire a native browser level event to guarantee the action is received by the application framework
  await targetTab.dispatchEvent('click');

  // 2. Playwright Best Practice Assertion: Wait up to 3 seconds for the tab class state to update
  await expect(targetTab).toHaveClass(/active/, { timeout: 3000 });
});


// VERIFY DISABLED FIELD VALUE SELECTOR
When('the disabled field name {string} should contain value {string}', async ({ page }, fieldNameAttribute, expectedValue) => {
  const disabledField = page.locator(`.for-${fieldNameAttribute}`).first();

  // 1. Wait up to 3 seconds for the field element to exist in the application DOM tree structure
  await disabledField.waitFor({ state: 'attached', timeout: 3000 });

  // 2. Playwright Best Practice: Read text contents safely regardless of visibility layouts
  await expect(disabledField).toContainText(expectedValue);
});