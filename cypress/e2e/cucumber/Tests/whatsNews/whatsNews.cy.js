import { Given ,  When , Then  } from "cypress-cucumber-preprocessor/steps";

Given ("The user visit the magento website",()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
})

When("The user click on What's New in What's New page",()=>{
     cy.get(".level-top a").contains("What's New").click()
})

When("The user validate that the New In Women's section is visible",()=>{
    cy.get(".categories-menu > .title").first().should("have.text","New in women's").and("be.visible")

})
Then("print all categories in the New In Women's section In What's New page",()=>{

    cy.get(".categories-menu >.items > .item").then((items)=>{
        for(let i=0 ; i < 6; i++ ){
     
           cy.wrap(items[i]).invoke('text').then((itemsname)=>{
           cy.log(itemsname)
         
            })
               } 
      }) 
        })

