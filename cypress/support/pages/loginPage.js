export class LoginPage {

    enterCredentials(username, password) {
        if (cy.get('[class="MuiTypography-root MuiTypography-h5"]')) {
            cy.get('#username').type(username)
            cy.get('#password').type(password)
            cy.get('[data-test="signin-submit"]').click()
        } 
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

    validateLandedOnLogin() {
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
      }
}

export const onLoginPage = new LoginPage()