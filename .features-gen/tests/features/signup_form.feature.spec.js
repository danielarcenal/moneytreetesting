// Generated from: tests\features\signup_form.feature
import { test } from "playwright-bdd";

test.describe('Signup Form', () => {

  test.skip('TC#1 : Simple Checking of Signup Form', { tag: ['@skip'] }, async ({ When, Then, And }) => { 
    await When('I open website "http://192.168.20.4"'); 
    await And('I touch "Login / Register"'); 
    await Then('I see the text "Login to Moneytree"'); 
    await Then('I see the text "Sign up"'); 
    await And('I touch "Sign up"'); 
    await And('I wait for 3 seconds'); 
    await Then('I see the text "Customer Details"'); 
    await And('I see the text "First Name"'); 
    await And('I see the text "Middle Name"'); 
    await And('I see the text "Last Name"'); 
    await And('I see the text "Email"'); 
    await And('I see the text "Birthdate"'); 
    await And('I see the text "Status"'); 
    await And('I see the text "Educational Attainment"'); 
    await And('I see the text "Mobile No"'); 
    await And('I see the text "Phone No"'); 
    await And('I see the text "Present Address"'); 
    await And('I see the text "Home Address"'); 
    await And('I see the text "Provincial Address"'); 
    await And('I see the text "Residency of Present Address"'); 
    await And('I see the text "Employment Status"'); 
    await And('I see the text "Employer / Business Address"'); 
    await And('I see the text "Discard"'); 
    await And('I see the button "Save"'); 
    await And('I wait for 3 seconds'); 
    await When('I type "Daniel" into field name "first_name"'); 
    await And('I wait for 3 seconds'); 
    await Then('the field name "first_name" should contain value "Daniel"'); 
    await And('I select option "High School Graduate" from dropdown field "educational_attainment"'); 
    await Then('the dropdown field "educational_attainment" should show selected option "High School Graduate"'); 
    await And('I wait for 3 seconds'); 
  });

  test('TC#2 : Fill up Signup Form', async ({ When, Then, And, page }) => { 
    await When('I open website "http://192.168.20.4"', null, { page }); 
    await And('I touch "Login / Register"', null, { page }); 
    await Then('I see the text "Login to Moneytree"', null, { page }); 
    await Then('I see the text "Sign up"', null, { page }); 
    await And('I touch "Sign up"', null, { page }); 
    await Then('I see the text "Customer Details"', null, { page }); 
    await And('I fill out the form using this data configuration', {"docString":{"content":"{\t\n  first_name: Daniel,\n  last_name: Arcenal, \n  educational_attainment: High School Graduate,\nbirthdate: 01-01-2026,\nstatus: Married,\ncustomer_email: darcenal@gmail.com,\nmobile_no: 9169417390,\nphone_no: 9169417390,\npresent_address: Tisa Cebu,\nhome_address: Tisa Cebu,\nprovincial_address: Cebu,\nresidency_of_present_address: Living With Parents,\nemployment_status: Internal Employee (Appleone),\ncompany_for_internal_employees: Appleone Properties Inc., \nemployer__business_address: Cebu Business Park\n}"}}, { page }); 
    await And('I wait for 3 seconds', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\signup_form.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I open website \"http://192.168.20.4\""},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I touch \"Login / Register\""},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Login to Moneytree\""},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Sign up\""},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I touch \"Sign up\""},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I wait for 3 seconds"},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Customer Details\""},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And I see the text \"First Name\""},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Middle Name\""},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Last Name\""},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Email\""},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Birthdate\""},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Status\""},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Educational Attainment\""},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Mobile No\""},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Phone No\""},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Present Address\""},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Home Address\""},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Provincial Address\""},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Residency of Present Address\""},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Employment Status\""},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Employer / Business Address\""},{"pwStepLine":29,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Discard\""},{"pwStepLine":30,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And I see the button \"Save\""},{"pwStepLine":31,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And I wait for 3 seconds"},{"pwStepLine":32,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When I type \"Daniel\" into field name \"first_name\""},{"pwStepLine":33,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And I wait for 3 seconds"},{"pwStepLine":34,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then the field name \"first_name\" should contain value \"Daniel\""},{"pwStepLine":35,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And I select option \"High School Graduate\" from dropdown field \"educational_attainment\""},{"pwStepLine":36,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the dropdown field \"educational_attainment\" should show selected option \"High School Graduate\""},{"pwStepLine":37,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And I wait for 3 seconds"}]},
  {"pwTestLine":40,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When I open website \"http://192.168.20.4\"","stepMatchArguments":[{"group":{"start":15,"value":"\"http://192.168.20.4\"","children":[{"start":16,"value":"http://192.168.20.4","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"And I touch \"Login / Register\"","stepMatchArguments":[{"group":{"start":8,"value":"\"Login / Register\"","children":[{"start":9,"value":"Login / Register","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Login to Moneytree\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login to Moneytree\"","children":[{"start":16,"value":"Login to Moneytree","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Sign up\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign up\"","children":[{"start":16,"value":"Sign up","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And I touch \"Sign up\"","stepMatchArguments":[{"group":{"start":8,"value":"\"Sign up\"","children":[{"start":9,"value":"Sign up","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Customer Details\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Customer Details\"","children":[{"start":16,"value":"Customer Details","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"And I fill out the form using this data configuration","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"And I wait for 3 seconds","stepMatchArguments":[{"group":{"start":11,"value":"3"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end