export class SignUpPage {

    fillAllMandatoryFields(firstName,lastName,userName,password,confirmPassword) {
      if(typeof firstName !== "undefined") {
        cy.get('#firstName').type(firstName)
      }
      if(typeof lastName !== "undefined") {
        cy.get('#lastName').type(lastName)
      }
      if(typeof userName !== "undefined") {
        cy.get('#username').type(userName)
      }
      if(typeof password !== "undefined") {
        cy.get('#password').type(password)
      }
      if(typeof confirmPassword !== "undefined") {
        cy.get('#confirmPassword').type(confirmPassword)
      } else if (typeof password !== "undefined") {
        cy.get('#confirmPassword').type(password)
      }
    }

    fillFirstName(firstName) {
      cy.get('#firstName').type(firstName)
    }

    fillLastName(lastName) {
      cy.get('#lastName').type(lastName)
    }

    fillUserName(userName) {
      cy.get('#username').type(userName)
    }

    fillPassword(password) {
      cy.get('#password').type(password)
    }

    fillConfirmPassword(confirmPassword) {
      cy.get('#confirmPassword').type(confirmPassword)
    }

    validateAllFields() {
      cy.get('#firstName-helper-text').contains('First Name is required')
      cy.get('#lastName-helper-text').contains('Last Name is required')
      cy.get('#username-helper-text').contains('Username is required')
      cy.get('#password-helper-text').contains('Enter your password')
      cy.get('#confirmPassword-helper-text').contains('Confirm your password')
      cy.get('[data-test="signup-submit"]').should('not.be.enabled')
    }

    validateFirstName() {
      cy.get('#firstName-helper-text').contains('First Name is required')
    }

    validateLastName() {
      cy.get('#lastName-helper-text').contains('Last Name is required')
    }

    validateUserName() {
      cy.get('#username-helper-text').contains('Username is required')
    }

    validatePassword() {
      cy.get('#password-helper-text').contains('Enter your password')
    }

    validateConfirmPassword() {
      cy.get('#confirmPassword-helper-text').contains('Confirm your password')
    }

    validateSubmitDisabled() {
      cy.get('[data-test="signup-submit"]').should('not.be.enabled')
    }

  }

export const onSignUpPage = new SignUpPage()