import { onLoginPage } from "../support/pages/loginPage"
import { onSignUpPage } from "../support/pages/signUpPage"

describe('Functional tests for the Log In page', () => {

    beforeEach('Open Homepage', () => {
        cy.openHomePage()
    })

    let username = 'test'
    let password = 'test'
    let firstName = 'First Name'
    let lastName = 'Last Name'

    it('Validate username is required', () => {
        onLoginPage.validateUserPass()
    })

    it('Validate password is required', () => {
        onLoginPage.validatePassword(username)
    })

    it('Validate username is required', () => {
        onLoginPage.validateUsername(password)
    })

    it('Validate user can log in', () => {
        cy.openSignupPage()
        onSignUpPage.signUpSuccessfully(firstName,lastName, username, password, password)
        cy.openLoginPage()
        onLoginPage.enterCredentials(username,password)
        onLoginPage.validateLandedOnLogin()
    })
    

})