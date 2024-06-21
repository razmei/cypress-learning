export class LoginPage {

    enterCredentials(username, password) {
        if (cy.get('[class="MuiTypography-root MuiTypography-h5"]')) {
            cy.get('#username').type(username)
            cy.get('#password').type(password)
            cy.get('[data-test="signin-submit"]').click()
        } 
    }

    validateLandedOnLogin() {
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
      }
}

export const onLoginPage = new LoginPage()