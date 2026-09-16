// Generated from: tests\features\open_site.feature
import { test } from "playwright-bdd";

test.describe('Basic Navigation Commands', () => {

  test('TC#3 : Find the text', async ({ When, Then, And, context, page }) => { 
    await When('I open website "http://192.168.20.4"', null, { page }); 
    await And('I touch "Login / Register"', null, { page }); 
    await And('I wait for 5 seconds', null, { page }); 
    await Then('I see the text "Login to Moneytree"', null, { page }); 
    await And('I type "Administrator" into id "login_email"', null, { page }); 
    await And('I type "@ppl31C3bu" into id "login_password"', null, { page }); 
    await And('I touch "Login"', null, { page }); 
    await And('I wait for 2 seconds', null, { page }); 
    await Then('I see the text "Guided by stability, focused on your growth."', null, { page }); 
    await And('I wait for 2 seconds', null, { page }); 
    await And('I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"', null, { context, page }); 
    await And('I wait for 2 seconds', null, { page }); 
    await And('I find the text "Terms and Condition"', null, { page }); 
    await And('I wait for 2 seconds', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\open_site.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I open website \"http://192.168.20.4\"","stepMatchArguments":[{"group":{"start":15,"value":"\"http://192.168.20.4\"","children":[{"start":16,"value":"http://192.168.20.4","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And I touch \"Login / Register\"","stepMatchArguments":[{"group":{"start":8,"value":"\"Login / Register\"","children":[{"start":9,"value":"Login / Register","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And I wait for 5 seconds","stepMatchArguments":[{"group":{"start":11,"value":"5"},"parameterTypeName":"int"}]},{"pwStepLine":10,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Login to Moneytree\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login to Moneytree\"","children":[{"start":16,"value":"Login to Moneytree","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And I type \"Administrator\" into id \"login_email\"","stepMatchArguments":[{"group":{"start":7,"value":"\"Administrator\"","children":[{"start":8,"value":"Administrator","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"login_email\"","children":[{"start":32,"value":"login_email","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And I type \"@ppl31C3bu\" into id \"login_password\"","stepMatchArguments":[{"group":{"start":7,"value":"\"@ppl31C3bu\"","children":[{"start":8,"value":"@ppl31C3bu","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"login_password\"","children":[{"start":29,"value":"login_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And I touch \"Login\"","stepMatchArguments":[{"group":{"start":8,"value":"\"Login\"","children":[{"start":9,"value":"Login","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And I wait for 2 seconds","stepMatchArguments":[{"group":{"start":11,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":15,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Guided by stability, focused on your growth.\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Guided by stability, focused on your growth.\"","children":[{"start":16,"value":"Guided by stability, focused on your growth.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And I wait for 2 seconds","stepMatchArguments":[{"group":{"start":11,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":17,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And I open a new tab and go to link \"http://192.168.20.4/application-form-(moneytree)/new\"","stepMatchArguments":[{"group":{"start":32,"value":"\"http://192.168.20.4/application-form-(moneytree)/new\"","children":[{"start":33,"value":"http://192.168.20.4/application-form-(moneytree)/new","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"And I wait for 2 seconds","stepMatchArguments":[{"group":{"start":11,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":19,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And I find the text \"Terms and Condition\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Terms and Condition\"","children":[{"start":17,"value":"Terms and Condition","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"And I wait for 2 seconds","stepMatchArguments":[{"group":{"start":11,"value":"2"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end