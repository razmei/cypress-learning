export class LoginPage {

    enterCredentials(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[data-test="signin-submit"]').click()
    }
}

export const onLoginPage = new LoginPage()