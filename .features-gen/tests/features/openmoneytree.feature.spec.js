// Generated from: tests\features\openmoneytree.feature
import { test } from "playwright-bdd";

test.describe('Basic Navigation Commands', () => {

  test('TC#1 : Login Test Trial', async ({ When, Then, And, page }) => { 
    await When('I open website "http://192.168.20.4/"', null, { page }); 
    await And('I wait for 5 seconds', null, { page }); 
    await Then('I see the text "Guided by stability, focused on your growth."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\openmoneytree.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When I open website \"http://192.168.20.4/\"","stepMatchArguments":[{"group":{"start":15,"value":"\"http://192.168.20.4/\"","children":[{"start":16,"value":"http://192.168.20.4/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And I wait for 5 seconds","stepMatchArguments":[{"group":{"start":11,"value":"5"},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see the text \"Guided by stability, focused on your growth.\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Guided by stability, focused on your growth.\"","children":[{"start":16,"value":"Guided by stability, focused on your growth.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end