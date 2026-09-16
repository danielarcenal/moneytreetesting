Feature: Basic Navigation Commands

  Scenario: TC#1 : Login Test Trial
    When I open website "hspdccms.supreaphils.com"
    And I wait for 5 seconds
    Then I see the text "SUPREA PHILS DEVELOPMENT CORPORATION"
    And I see the text "Welcome back" 
    And I see the text "Sign in to continue to your workspace."
    And I see the text "Email address"
    And I see the text "Password"
    And I see the text "Forgot password?"