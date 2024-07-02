export class LoginPage {

    //selectors
    userField() {
        return cy.get('#username')
    }
    userHelperText() {
        return cy.get('#username-helper-text')
    }
    passwordField() {
        return cy.get('#password')
    }
    submitButton() { 
        return cy.get('[data-test="signin-submit"]')
    }
    alertMessage() {
        return cy.get('.MuiAlert-message')
    }

    //interactions:
    enterCredentials(username, password) {
        // cy.get('#username').type(username)
        // cy.get('#password').type(password)
        // cy.get('[data-test="signin-submit"]').click()
        this.userField().type(username)
        this.passwordField().type(password)
        this.submitButton().click()
    }

    validateUserPass() {
        // cy.get('[data-test="signin-submit"]').should('be.enabled').click()
        // cy.get('#username-helper-text').contains('Username is required')
        this.submitButton().should('be.enabled').click()
        this.userHelperText().contains('Username is required')
    }

    validateUsername(password) {
        // cy.get('#password').type(password)
        // cy.get('[data-test="signin-submit"]').should('not.be.enabled')
        this.passwordField().type(password)
        this.submitButton().should('not.be.enabled')
    }

    validatePassword(username) {
        // cy.get('#username').type(username)
        // cy.get('[data-test="signin-submit"]').should('not.be.enabled')
        this.userField().type(username)
        this.submitButton().should('not.be.enabled')
    }

    valiateInvalidLogin() {
        // cy.get('.MuiAlert-message').contains('Username or password is invalid')
        this.alertMessage().contains('Username or password is invalid')
    }

}

export const onLoginPage = new LoginPage()