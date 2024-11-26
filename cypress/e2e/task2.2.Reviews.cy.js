describe("Reviews on product page", ()=>{
     
    it("validate that the user can submit a review on the product page" , ()=>{
        cy.visit("https://magento.softwaretestingboard.com/radiant-tee.html")                                             // visit the website page 
        cy.get(".action.add").should("contain",'Add Your Review')                                                         // assertion in 'Add Your Review' in product details page 
        cy.get(".action.add").click()                                                                                     // click on 'Add Your Review' text 
        cy.get(".legend.review-legend").should("contain","You're reviewing:")                                             // assertion that Reviews page appear 
        cy.get('[for="nickname_field"]').should("contain",'Nickname')                                                     //  assertion the Nickname title 
        cy.get('[for="summary_field"]').should("contain",'Summary')                                                       // assertion  the summary title 
        cy.get('[for="review_field"]').should("contain",'Review')                                                         // assertion the Review title 
        cy.get(".action.submit.primary").should("be.visible")                                                             // assertion on the Submit Review button
        cy.get(".rating-1").should("be.visible")                                                                          // assertion in the first star in rating stars 
        cy.get(".rating-2").should("be.visible")                                                                          // assertion in the second star in rating stars 
        cy.get(".rating-3").should("be.visible")                                                                          // assertion in the third star in rating stars 
        cy.get(".rating-4").should("be.visible")                                                                          // assertion in the fourth star in rating stars 
        cy.get(".rating-5").should("be.visible")                                                                          // assertion in the fifth star in rating stars 
        cy.get(".rating-1").click({force: true})                                                                          // click on first star in rating stars 
        cy.get(".rating-2").click({force: true})                                                                          // click on the second star in rating stars 
        cy.get(".rating-3").click({force: true})                                                                          // click on the third star in rating stars 
        cy.get('[for="nickname_field"]').type("Yaqeen Ali")                                                               // enter text on nickname textfield 
        cy.get('[for="summary_field"]').type("Summary is")                                                                // enter text on summary textfield 
        cy.get('[for="review_field"]').type("High quality products")                                                      // enter text on review field 
        cy.get(".action.submit.primary").click()                                                                          // click on submit review button 
        cy.get(".message-success").should("have.attr","data-bind", "attr: {\n            class: 'message-' + message.type + ' ' + message.type + ' message',\n            'data-ui-id': 'message-' + message.type\n        }")  // assertion the success message after submit reviews 
        cy.get(".fotorama__img").first().should("be.visible")                                                             // assertion the image after submit images  
        cy.get(".price-label").should("contain",'As low as')                                                              // assertion after submit reviews 
        cy.get(".swatch-attribute-label").first().should("have.text","Size")                                              // assertion the size after submit reviews 
        cy.get(".swatch-attribute-label").last().should("have.text","Color")                                              // assertion the color after submit reviews 
        cy.get(".action.primary.tocart").should("be.visible")                                                             // assertion on add to cart button
    })
})


