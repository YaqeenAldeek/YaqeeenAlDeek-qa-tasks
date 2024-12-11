import { Given ,  When , Then  } from "cypress-cucumber-preprocessor/steps";

Given ("The user visit the magento website",()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
})


When("The user types (shirt) on search box",()=>{
    cy.get("#search").type("shirt"+"{enter}");
})

When("The user choose specific item from items appeare ",()=>{
    cy.contains("a","Circe Hooded Ice Fleece").click();
})
When("The user click on add to compare link ",()=>{
    cy.get(".product-addto-links").find("a").last().click()
})
Then("The message success will appear",()=>{
    cy.get("[role=alert]").should("be.visible").and("contain","You added product Circe Hooded Ice Fleece to the comparison list.")

})
