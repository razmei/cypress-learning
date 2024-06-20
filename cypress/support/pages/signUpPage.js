export class SignUpPage {

    fillMandatoryFields(firstName, lastName, userName, password) {
      cy.get('#firstName').type(firstName)
      cy.get('#lastName').type(lastName)
      cy.get('#username').type(userName)
      cy.get('#password').type(password)
      cy.get('#confirmPassword').type(password)
      cy.get('form').submit()
    }

}

export const onSignUpPage = new SignUpPage()