describe('selectors',()=>{
   

      it('selector-example',()=>{
        cy.visit('https://demo.productionready.io/#/register')
        cy.get('.navbar-brand')             // to get brand name 
        cy.get('.nav-link').first()         // to get Home element in the nav bar selector
        cy.get('.nav-link').eq(2)           // to get Sign up element in the nav bar selector
        cy.get('h1').contains('Sign up')    // to get Sign up header selector
        cy.get('[href="#/login"]').last()   // to get have an account link selector
        cy.get('.form-group').first()       // to get user name field selector
        cy.get('.form-group').eq(1)         // to get email field selector
        cy.get('.form-group').last()        // to get Password field selector
        cy.contains('button','Sign up')     // to get sign up button selector
        cy.get('.logo-font')                // to get footer logo selector
        cy.get('.attribution')              // to get footer attribution selector
        });
   });