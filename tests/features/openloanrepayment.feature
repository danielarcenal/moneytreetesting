Feature: Open Loan with Repayment

  Scenario: TC#1 : Open Loan with Repayment
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    And I wait for 2 seconds
    Then I see the text "Login to Moneytree"
    And I type "administrator" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
	
    And I open a new tab and go to link "http://192.168.20.4/app/loan/2000000734"
    And I wait for 2 seconds
	Then I press the button "Create"
	Then I press the button "Loan Repayment"

####Loan Repayment####
    And I wait for 3 seconds
    And I touch fieldname "posting_date"
    And I type "01-16-2028 00:00:00" into date fieldname "posting_date"
    And I wait for 2 seconds
    And I type "01-16-2028 00:00:00" into date fieldname "value_date"
    And I wait for 2 seconds
    And I type "01-16-2028 00:00:00" into fieldname "custom_description"
    And I wait for 2 seconds
    And I type "01-16-2028 00:00:00" into fieldname "custom_receipt_no"
    And I press the button "Get Outstanding Due Dates"
    And I wait for 3 seconds
    And I press the button "Get Outstanding Due Dates" inside the modal
    And I press the button "Save"
    And I wait for 3 seconds
    And I press the button "Submit"
    And I wait for 3 seconds
    And I press the button "Yes"
    And I wait for 3 seconds