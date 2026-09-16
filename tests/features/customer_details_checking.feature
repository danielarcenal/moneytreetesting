Feature: Customer Details Checking

@skip
  Scenario: TC#1 : Simple Checking of Customer Details
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    #And I wait for 5 seconds
    Then I see the text "Login to Moneytree"
    And I type "1c99729bbbeb@westcast-systems.com" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    #And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
    #And I wait for 2 seconds
    And I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"
    And I wait for 5 seconds
    Then the field name "last_name" should contain value "Mari"
    And the field name "first_name" should contain value "Mari"
    And the field name "middle_name" should contain value "Mari"
    And the field name "status" should contain value "Single"
    And the field name "education" should contain value "High School Graduate"

    And the field name "email_address" should contain value "1c99729bbbeb@westcast-systems.com"
    #And the field name "mobile_no" should contain value "9166666666"
    #And the field name "phone_no" should contain value "9166666666"

    And the field name "present_address" should contain value "Tisa"
    And the field name "home_address" should contain value "Tisa"
    And the field name "provincial_address" should contain value "Tisa"
    And the field name "residency" should contain value "Owned"

    And I find the text "Primary Employment Status"
    And I find the text "Company (for internal employees)"
    And I find the text "Employer / Business Address"
    And the field name "primary_employement_status" should contain value "Internal Employee (Appleone)"
    And the field name "company_for_internal_company" should contain value "24Aid Medical Corp."
    And the field name "business_address" should contain value "Tisa"
    And I wait for 3 seconds

  Scenario: TC#2 : Simple Checking of Customer Details
    When I open website "http://192.168.20.4"
    And I touch "Login / Register"
    #And I wait for 5 seconds
    Then I see the text "Login to Moneytree"
    And I type "1c99729bbbeb@westcast-systems.com" into id "login_email"
    And I type "@ppl31C3bu" into id "login_password"
    And I touch "Login"
    #And I wait for 2 seconds
    Then I see the text "Guided by stability, focused on your growth."
    #And I wait for 2 seconds
    And I open a new tab and go to link "http://192.168.20.4/application-form-(moneytree)/new"
    And I wait for 2 seconds
    Then the field name "last_name" should contain value "Mari"
    And the field name "first_name" should contain value "Mari"
    And the field name "middle_name" should contain value "Mari"
    And the field name "status" should contain value "Single"
    And the field name "education" should contain value "High School Graduate"

    And the field name "email_address" should contain value "1c99729bbbeb@westcast-systems.com"
    #And the field name "mobile_no" should contain value "9166666666"
    #And the field name "phone_no" should contain value "9166666666"

    And the field name "present_address" should contain value "Tisa"
    And the field name "home_address" should contain value "Tisa"
    And the field name "provincial_address" should contain value "Tisa"
    And the field name "residency" should contain value "Owned"

    And I find the text "Primary Employment Status"
    And I find the text "Company (for internal employees)"
    And I find the text "Employer / Business Address"
    And the field name "primary_employement_status" should contain value "Internal Employee (Appleone)"
    And the field name "company_for_internal_company" should contain value "24Aid Medical Corp."
    And the field name "business_address" should contain value "Tisa"
    And I wait for 2 seconds

    When I touch "MM"
    And I wait for 2 seconds
    And I find the text "My Account"
    Then I touch "My Account"
    And I wait for 2 seconds
    #And I find the text "My Account"
    And I find the text "Mari Mari"
    And I find the text "Edit Profile"
    And I find the text "Reset Password"
    And I find the text "Reset the password for your account"
    And I find the text "Manage third party apps"
    And I find the text "To manage your authorized third party apps"


    When I touch "Edit Profile"
    Then I see the button "Edit"
    Then I press the button "Edit"
    Then the field name "last_name" should contain value "Mari"
    And the field name "first_name" should contain value "Mari"
    And the field name "middle_name" should contain value "Mari"
    And the field name "status" should contain value "Single"
    And the field name "educational_attainment" should contain value "High School Graduate"

    And the field name "email" should contain value "1c99729bbbeb@westcast-systems.com"
    #And the field name "mobile_no" should contain value "9166666666"
    #And the field name "phone" should contain value "9166666666"

    And the field name "present_address" should contain value "Tisa"
    And the field name "home_address" should contain value "Tisa"
    And the field name "provincial_address" should contain value "Tisa"
    And the field name "residency_of_present_address" should contain value "Owned"

    And I find the text "Employment Status"
    And I find the text "Company (for internal employees)"
    And I find the text "Employer / Business Address"
    And the field name "employment_status" should contain value "Internal Employee (Appleone)"
    And the field name "company_for_internal_employees" should contain value "24Aid Medical Corp."
    And the field name "employer__business_address" should contain value "Tisa"
    And I wait for 3 seconds