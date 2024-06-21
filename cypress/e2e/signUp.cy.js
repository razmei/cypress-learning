const { onLoginPage } = require("../support/pages/loginPage")
const { onSignUpPage } = require("../support/pages/signUpPage")

const firstName = 'Test First'
const lastName = 'TestLast'
const userName = 'testUser'
const password = 'testpassword'
const confirmPassword = password

describe('Functional tests for the Sign Up page', () => {

    it('Successful SignUp', () => {
      cy.visit('/signup')
      onSignUpPage.fillAllMandatoryFields(firstName,lastName,userName,password,password)
      cy.get('form').submit()
      onLoginPage.enterCredentials(userName,password)
      onLoginPage.validateLandedOnLogin()
    })

    it('Verify all fields are mandatory', () => {
      cy.visit('/signup')
      cy.get('form').submit()
      onSignUpPage.validateAllFields()
      onSignUpPage.validateSubmitDisabled()
    })

    it('Verify first name is mandatory', () => {
      cy.visit('/signup')
      onSignUpPage.fillAllMandatoryFields(firstName,undefined,undefined,undefined,undefined)
      onSignUpPage.validateSubmitDisabled()
    })

    it('Verify last name is mandatory', () => {
      cy.visit('/signup')
      onSignUpPage.fillAllMandatoryFields(undefined,lastName,undefined,undefined,undefined)
      onSignUpPage.validateSubmitDisabled()
    })

    it('Verify username is mandatory', () => {
      cy.visit('/signup')
      onSignUpPage.fillAllMandatoryFields(undefined,undefined,userName,undefined,undefined)
      onSignUpPage.validateSubmitDisabled()
    })

    it('Verify password is mandatory', () => {
      cy.visit('/signup')
      onSignUpPage.fillAllMandatoryFields(undefined,undefined,undefined,password,undefined)
      onSignUpPage.validateSubmitDisabled()
    })

    it('Verify confirm password is mandatory', () => {
      cy.visit('/signup')
      onSignUpPage.fillAllMandatoryFields(undefined,undefined,undefined,undefined,confirmPassword)
      onSignUpPage.validateSubmitDisabled()
    })

  })