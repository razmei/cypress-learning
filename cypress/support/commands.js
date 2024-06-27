// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { onHomePage } from "./pages/homePage"
import { onLoginPage } from "./pages/loginPage"
import { onSignUpPage } from "./pages/signUpPage"

Cypress.Commands.add('openHomePage', () => {
    cy.visit('/')
})

Cypress.Commands.add('openSignupPage', () => {
    cy.visit('/signup')
})

Cypress.Commands.add('openLoginPage', () => {
    cy.visit('/signin')
})

Cypress.Commands.add('createUser', (firstName,lastName,username,password,confirmpassword,bankName,routingNumber,accountNumber) => {
    cy.openSignupPage()
    onSignUpPage.signUpSuccessfully(firstName,lastName,username,password,confirmpassword)
    cy.openLoginPage()
    onLoginPage.enterCredentials(username, password)
    onHomePage.initialLoginSetup(bankName,routingNumber,accountNumber)
})