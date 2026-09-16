Feature: Loan Application Request From Processs


  Scenario: TC#1 : Process Going to Loan Application Form
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    #And I wait for 5 seconds
    Then I see the text "Login to Moneytree"
    And I type "1c99729bbbeb@westcast-systems.com" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    #And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
    And I touch "Apply A Loan"
    Then I see the text "What type Of Customer Are You?"
    When I click the link pointing to "application-form-(moneytree)"
    Then I see the text "Loan Application Register"
    And I see the button "New"
    Then I press the button "New"
    Then I see the text "New Loan Application Form"


  Scenario: TC#2 : Checking of Customer Details in Loan Application
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    Then I see the text "Login to Moneytree"
    And I type "1c99729bbbeb@westcast-systems.com" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    #And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
    And I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"
    Then I see the text "New Loan Application Form"
    Then the field name "last_name" should contain value "Mari"
    Then the field name "first_name" should contain value "Mari"
    Then the field name "middle_name" should contain value "Mari"

    Then the field name "status" should contain value "Single"
    Then the field name "birthday" should contain value "09-01-2026"
    Then the field name "education" should contain value "High School Graduate"

    Then the field name "email_address" should contain value "1c99729bbbeb@westcast-systems.com"
    #Then the field name "mobile_no" should contain value "+63-9166666666"
    #Then the field name "phone_no" should contain value "+63-9166666666"

    Then the field name "present_address" should contain value "Tisa"
    Then the field name "home_address" should contain value "Tisa"
    Then the field name "provincial_address" should contain value "Tisa"
    Then the field name "residency" should contain value "Owned"

    Then the field name "primary_employement_status" should contain value "Internal Employee (Appleone)"
    Then the field name "company_for_internal_company" should contain value "24Aid Medical Corp."
    Then the field name "business_address" should contain value "Tisa"


  Scenario: TC#3 : Filling out in Loan Application
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    Then I see the text "Login to Moneytree"
    And I type "1c99729bbbeb@westcast-systems.com" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    Then I see the text "Guided by stability, focused on your growth."
    And I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"
    And I wait for 3 seconds
	And I fill out the form using this data configuration
      """
      {	
        monthly_income: 10,000.00,
        total_monthly_income: 10,000.00,
        fixed_obligations:  10,000.00,
        other_living_expenses: 10,000.00,
	    business_phone: 9169417390,
		first_relative: John,
		second_relative: John,
		address_first_relative: John,
		address_second_relative: John,
		telephone_first_relative: 9169417390,
		telephone_second_relative: 9169417390,


		first_personal_reference: John,
		second_personal_reference: John,
	    third_personal_reference: John,

		address_personal_reference: Tisa,
		address_second_reference: Tisa,
		address_third_reference: Tisa,

		telephone_first_reference: 9169417390,
		telephone_second_reference: 9169417390,
		telephone_reference: 9169417390,

		tin: 12345,
		sss_no: 12345,

		purpose_of_loan: test,
		desired_loan_amount: 10,000.00,
		term_of_loan: 12 Months,
      }
      """
    And I click the field name "continue_later"
    And I click the field name "i_agree"

    When I press the button "Save"
    And I wait for 10 seconds
    Then I see the text "Submitted"
    And I see the text "Thank you for your time. We have received your application and will send an update on your loan status via your registered contact details shortly."


  Scenario: TC#5 : Check Submitted Record
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    Then I see the text "Login to Moneytree"
    And I type "1c99729bbbeb@westcast-systems.com" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    Then I see the text "Guided by stability, focused on your growth."
    When I touch "Loan Applications"
    Then I see the text "Loan Application Register"
    And I see the text "Mari"
    And I see the text "10000"
    And I see the text "Open"
    And I see the text "Not Available"
    And I wait for 5 seconds


  Scenario: TC#5 : Check Submitted Record as Admin
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    Then I see the text "Login to Moneytree"
    And I type "Administrator" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    Then I see the text "Guided by stability, focused on your growth."
    And I open a new tab and go to link "http://192.168.20.4/app/loan-application-request-form"
	And I fill out the form using this data configuration
      """
      {	
        name: mari
      }
      """
    And the field filter "first_name" shows "Mari"
    And I click the field filter "first_name" that shows "Mari"
    And I click the first record in the list
    And I wait for 5 seconds
    Then I see the text "Loan Application Request Form"
    And I see the text "Applicant Information"
    And the field name "last_name" should contain value "Mari"
    And the field name "first_name" should contain value "Mari"
    And the field name "middle_name" should contain value "Mari"

    And the field name "status" should contain value "Single"
    And the field name "birthday" should contain value "09-01-2026"
    And the field name "education" should contain value "High School Graduate"

    And the field name "email_address" should contain value "1c99729bbbeb@westcast-systems.com"
    #And the field name "mobile_no" should contain value "9166666666"
    #And the field name "phone_no" should contain value "9166666666"

    And the field name "present_address" should contain value "Tisa"
    And the field name "home_address" should contain value "Tisa"
    And the field name "provincial_address" should contain value "Tisa"
    And the field name "residency" should contain value "Owned"

    When I press the button "Create Loan Application"
    Then I see the text "New Loan Application"
    And I wait for 5 seconds
    #Then I see the text "Mari"
    #And the field name "first_name" should contain value "Mari"
    #And the field name "last_name" should contain value "Mari"
    #And the field name "applicant_email_address" should contain value "1c99729bbbeb@westcast-systems.com"
    #And the field name "applicant_name" should contain value "Mari Mari"
    #And the field name "repayment_periods" should contain value "12 Months"
    #And the field name "loan_amount" should contain value "10,000"

    #And the field name "description" should contain value "test"
    #And the field name "applicant_name" should contain value "Mari Mari"
    #And the field name "repayment_periods" should contain value "12 Months"
    #And the field name "loan_amount" should contain value "10,000"
	And I fill out the form using this data configuration
      """
      {	
        loan_product: Salary Loan,
        custom_interest_rate: 15%
      }
      """
    And I wait for 5 seconds
    When I press the tab "Documents"
    And I wait for 3 seconds
    Then I press the button "Add Row"
    And I wait for 5 seconds
    Then I press the button "Save"
    And I wait for 5 seconds

    And the disabled field name "description" should contain value "test"
    And the disabled field name "applicant_name" should contain value "Mari Mari"
    And the disabled field name "repayment_periods" should contain value "12 Months"
    And the disabled field name "loan_amount" should contain value "10,000"

    Then I press the button "Actions"
    And I wait for 5 seconds
    Then I press the button "For Review"
    And I wait for 5 seconds
    Then I press the button "Actions"
    And I wait for 5 seconds
    Then I press the button "Approve"
    And I wait for 5 seconds