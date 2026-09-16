// Generated from: tests\features\open_site.feature
import { test } from "playwright-bdd";

test.describe('Basic Navigation Commands', () => {

  test('TC#1 : Login Test Trial', async ({ When, Then, And, page }) => { 
    await When('I open website "https://spdccms.supreaphils.com/"', null, { page }); 
    await And('I wait for 5 seconds', null, { page }); 
    await Then('I see the text "SUPREA PHILS DEVELOPMENT CORPORATION"', null, { page }); 
    await And('I see the text "Welcome back"', null, { page }); 
    await And('I see the text "Sign in to continue to your workspace."', null, { page }); 
    await And('I see the text "Email address"', null, { page }); 
    await And('I see the text "Password"', null, { page }); 
    await And('I see the text "Forgot password?"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\open_site.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When I open website \"https://spdccms.supreaphils.com/\"","stepMatchArguments":[{"group":{"start":15,"value":"\"https://spdccms.supreaphils.com/\"","children":[{"start":16,"value":"https://spdccms.supreaphils.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And I wait for 5 seconds","stepMatchArguments":[{"group":{"start":11,"value":"5"},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"SUPREA PHILS DEVELOPMENT CORPORATION\"","stepMatchArguments":[{"group":{"start":15,"value":"\"SUPREA PHILS DEVELOPMENT CORPORATION\"","children":[{"start":16,"value":"SUPREA PHILS DEVELOPMENT CORPORATION","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Welcome back\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Welcome back\"","children":[{"start":16,"value":"Welcome back","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Sign in to continue to your workspace.\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in to continue to your workspace.\"","children":[{"start":16,"value":"Sign in to continue to your workspace.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Email address\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Email address\"","children":[{"start":16,"value":"Email address","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Password\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Password\"","children":[{"start":16,"value":"Password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I see the text \"Forgot password?\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Forgot password?\"","children":[{"start":16,"value":"Forgot password?","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end