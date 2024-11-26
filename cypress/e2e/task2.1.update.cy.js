describe('Cart Functionalities', () => {

    it.only('Validate that the user can update products from the shopping cart', () => {
        cy.visit("https://magento.softwaretestingboard.com/")                                                       // visit the website 
        cy.get("#search").type("shirt{enter}")                                                                      // search shirt item then click enter 
        cy.get(".page-title").contains("Search results for: 'shirt'").should("be.visible")                          // assertion in search page 
        cy.get(".block-title").contains("Compare Products").should("be.visible")                                    // assertion in search page 
        cy.get(".title").contains("Related search terms").should("be.visible")                                      // assertion in search page 
        cy.get(".toolbar-amount").should("be.visible")                                                              // assertion in search page 
        cy.get(".product-item-info").eq(1).click()                                                                  // choose the first item in search page 
        cy.get(".price-label").contains("As low as").should("be.visible")                                           // assertion
        cy.get("#product-addtocart-button").should("be.visible")                                                    // assertion 
        cy.get(".swatch-option").eq(1).click()                                                                      //  choose the size of the shirt 
        cy.get(".swatch-option").eq(5).click()                                                                      // choose the color of the shirt 
        cy.get("#qty").clear().type("2")                                                                            // clear the quantity field value and put the value equal 2 
        cy.get("#product-addtocart-button").click()                                                                 // click on Add to cart button 
        cy.get(".counter-number").should("contain", "2")                                                            // to assertion that the showcart have items which is equal 2 
        cy.get(".minicart-wrapper").click()                                                                         // click on the showcart 
        cy.get('.showcart > .counter').contains("2").should("be.visible")                                           // assertion the showcart contains 2 items 
        cy.get("#top-cart-btn-checkout").should("be.visible")                                                       // assertion  
        cy.get(".action.viewcart").should("have.attr", "data-bind", "attr: {href: shoppingCartUrl}")                //   assertion that view and edit the cart button are visible 
        cy.get(".action.viewcart").click()                                                                          //   click on the view and edit the cart button 
        cy.get(".page-title").should("have.text", '\n        Shopping Cart    ')                                    //   assertion after click on view and edit the cart button
        cy.get(".col.item").first().should("contain", "Item")                                                       //   assertion in shopping cart page   
        cy.get(".action.update").should("be.visible")                                                               //   assertion on update shopping cart button 
        cy.get(".input-text.qty").should("be.visible")                                                              //   assertion on qty text field 
        cy.get(".input-text.qty").clear().type("4")                                                                 //   clear the qty text field and enter the value 4 
        cy.get(".action.update").click()                                                                            //   click on update shopping cart button 
        cy.get(".summary.title").should("contain", 'Summary')                                                       //   assertion on cart summary title 
        cy.get("#block-shipping-heading").should("contain", 'Estimate Shipping and Tax')                            //   assertion the Estimate Shipping and Tax title 
        cy.get('.sub > .mark').should("contain", 'Subtotal')                                                        //   assertion the subtotal on cart summary 
        cy.get(".cart-price > .price").last().should("contain", '272.00')                                           //   assertion the price field updated 
        cy.get(".amount > .price").should("contain", '272')                                                         //   assertion  the price filed in summary cart updated        
    });
});