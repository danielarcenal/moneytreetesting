Feature: Basic Navigation Commands

  #Scenario: TC#1 : Login Test Trial
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    And I wait for 5 seconds
    Then I see the text "Login to Moneytree"
    And I type "Administrator" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    And I wait for 5 seconds
    Then I see the text "Guided by stability, focused on your growth."


  #Scenario: TC#2 : Go To the Form
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    And I wait for 5 seconds
    Then I see the text "Login to Moneytree"
    And I type "Administrator" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
    And I wait for 2 seconds
    And I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"
    And I wait for 2 seconds

    Scenario: TC#3 : Find the text
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    And I wait for 5 seconds
    Then I see the text "Login to Moneytree"
    And I type "Administrator" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
    And I wait for 2 seconds
    And I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"
    And I wait for 2 seconds
    And I find the text "Terms and Condition"
    And I wait for 2 seconds