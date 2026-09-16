Feature: Signup Form 

@skip
  Scenario: TC#1 : Simple Checking of Signup Form
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    Then I see the text "Login to Moneytree"
    Then I see the text "Sign up"
    And I touch "Sign up"
    And I wait for 3 seconds
    Then I see the text "Customer Details"
    And I see the text "First Name"
    And I see the text "Middle Name"
    And I see the text "Last Name"
    And I see the text "Email"
    And I see the text "Birthdate"
    And I see the text "Status"
    And I see the text "Educational Attainment"

    #And I see the text "Email"
    And I see the text "Mobile No"
    And I see the text "Phone No"
    And I see the text "Present Address"
    And I see the text "Home Address"
    And I see the text "Provincial Address"

    And I see the text "Residency of Present Address"
    And I see the text "Employment Status"
    And I see the text "Employer / Business Address"
    And I see the text "Discard"
    And I see the button "Save"
    And I wait for 3 seconds

    When I type "Daniel" into field name "first_name"
    And I wait for 3 seconds
    Then the field name "first_name" should contain value "Daniel"

    And I select option "High School Graduate" from dropdown field "educational_attainment"
    Then the dropdown field "educational_attainment" should show selected option "High School Graduate"
    And I wait for 3 seconds


  Scenario: TC#2 : Fill up Signup Form
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    Then I see the text "Login to Moneytree"
    Then I see the text "Sign up"
    And I touch "Sign up"
    Then I see the text "Customer Details"
    And I fill out the form using this data configuration
      """
      {	
        first_name: Daniel,
        last_name: Arcenal, 
        educational_attainment: High School Graduate,
		birthdate: 01-01-2026,
		status: Married,
		customer_email: darcenal@gmail.com,
		mobile_no: 9169417390,
		phone_no: 9169417390,
		present_address: Tisa Cebu,
		home_address: Tisa Cebu,
		provincial_address: Cebu,
		residency_of_present_address: Living With Parents,
		employment_status: Internal Employee (Appleone),
		company_for_internal_employees: Appleone Properties Inc., 
		employer__business_address: Cebu Business Park
      }
      """
    And I wait for 3 seconds