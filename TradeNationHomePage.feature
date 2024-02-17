Feature: Trade Nation Home Page
    As a user
    I want to verify Trade Nation home page functionality

    Scenario: Verify Trade Nation home page
        Given I open Trade Nation home page
        And I accept the cookies
        When I click on the 'Trade Nation' logo
        Then I confirm the current page title
        And I should see the login form
        And I attempt to login with invalid credentials
        Then I should see an error message
