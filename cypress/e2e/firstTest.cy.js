describe('first', () => {

    it('passes', () => {
      cy.visit('/')
      cy.get('.MuiGrid-container').contains('Don\'t have an account? Sign Up').click()
      cy.get('#firstName').type('First Name')
      cy.get('#lastName').type('Last Name')
      cy.get('#username').type('test')
      cy.get('#password').type('password')
      cy.get('#confirmPassword').type('password')
      cy.get('form').submit()

    })
  
  })