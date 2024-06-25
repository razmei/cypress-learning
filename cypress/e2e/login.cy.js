import { onLoginPage } from "../support/pages/loginPage"
import { onSignUpPage } from "../support/pages/signUpPage"

describe('Functional tests for the Log In page', () => {

    let username = 'test'
    let password = 'test'
    let firstName = 'First Name'
    let lastName = 'Last Name'

    it('Validate username is required', () => {
        cy.visit('/')
        onLoginPage.validateUserPass()
    })

    it('Validate password is required', () => {
        cy.visit('/')
        onLoginPage.validatePassword(username)
    })

    it('Validate username is required', () => {
        cy.visit('/')
        onLoginPage.validateUsername(password)
    })

    it('Validate user can log in', () => {
        cy.visit('/signup')
        onSignUpPage.signUpSuccessfully(firstName,lastName, username, password, password)
        cy.visit('/signin')
        onLoginPage.enterCredentials(username,password)
        onLoginPage.validateLandedOnLogin()
    })
    

})