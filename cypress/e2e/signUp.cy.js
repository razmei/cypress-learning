const { onLoginPage } = require("../support/pages/loginPage")
const { onSignUpPage } = require("../support/pages/signUpPage")

const firstName = 'Test First'
const lastName = 'TestLast'
const userName = 'testUser'
const password = 'testpassword'

describe('Functional tests for the Sign Up page', () => {

    it('passes', () => {
      cy.visit('/signup')
      onSignUpPage.fillMandatoryFields(firstName,lastName,userName,password)
      onLoginPage.enterCredentials(userName,password)
      cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
    })
  
  })