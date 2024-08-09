Feature: Login

    Background:
        Given I access the application

    @login01 @login
    Scenario: Login with an exitent user
        Given I login with standard user
        When I click on Log in button
        Then I assert the page title

    @login02 @login
    Scenario: Logout user
        Given I login with standard user
        When I click on Log in button
        And I assert the page title
        Then I logout from application

    @login03 @login
    Scenario: Login with a nonexistent user
        Given I login with a nonexistent user
        When I click on Log in button
        Then I assert the error message "Epic sadface: Username and password do not match any user in this service"

    @login04 @login
    Scenario: Login without type username
        Given I dont fill username field
        When I click on Log in button
        Then I assert the error message "Epic sadface: Username is required"

    @login05 @login
    Scenario: Login without type password
        Given I dont fill password field
        When I click on Log in button
        Then I assert the error message "Epic sadface: Password is required"

    @login06 @login
    Scenario: Login without type username and password
        Given I dont fill username and password
        When I click on Log in button
        Then I assert the error message "Epic sadface: Username is required"

    @login07 @login
    Scenario: Login with a locked out user
        Given I login with a locked out user
        When I click on Log in button
        Then I assert the error message "Epic sadface: Sorry, this user has been locked out."