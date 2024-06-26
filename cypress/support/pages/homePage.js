export class HomePage {

    createBankAccount(bankName,routingNumber,accountNumber) {
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Create Bank Account')
        cy.get('#bankaccount-bankName-input').type(bankName)
        cy.get('#bankaccount-routingNumber-input').type(routingNumber)
        cy.get('#bankaccount-accountNumber-input').type(accountNumber)
        cy.get('[data-test="bankaccount-submit"]').should('be.enabled').click()
    }

    verifyFinishMessage() {
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Finished')
        cy.get('[data-test="user-onboarding-next"]').click()
    }

    //TODO -> verify bank account creation dialog

}

export const onHomePage = new HomePage()