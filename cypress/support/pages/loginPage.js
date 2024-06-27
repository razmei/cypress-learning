export class LoginPage {

    enterCredentials(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[data-test="signin-submit"]').click()
    }

    validateUserPass() {
        cy.get('[data-test="signin-submit"]').should('be.enabled').click()
        cy.get('#username-helper-text').contains('Username is required')
    }

    validateUsername(password) {
        cy.get('#password').type(password)
        cy.get('[data-test="signin-submit"]').should('not.be.enabled')
    }

    validatePassword(username) {
        cy.get('#username').type(username)
        cy.get('[data-test="signin-submit"]').should('not.be.enabled')
    }

    valiateInvalidLogin() {
        cy.get('.MuiAlert-message').contains('Username or password is invalid')
    }

}

export const onLoginPage = new LoginPage()