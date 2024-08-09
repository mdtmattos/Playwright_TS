Feature: Shopping Cart

    Background:
        Given I access the application
        When I login with standard user
        Then I click on Log in button

    @shoppingCart01 @shoppingCart
    Scenario: Shopping for a product
       Given I pick a product
       When I assert the product details
       And I click on Add to cart button
       And I assert the product on Cart
       Then I checkout the product on Cart
       And I assert the product on Checkout
       And I click on finish button on Checkout page
       And I assert checkout complete

    @shoppingCart02 @shoppingCart
    Scenario: Removing a product from cart
       Given I pick a product
       When I assert the product details
       And I click on Add to cart button
       And I assert the product on Cart
       Then I remove the product from cart
       And I assert if the product was removed

