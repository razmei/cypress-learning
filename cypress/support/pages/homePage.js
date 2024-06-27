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

    openDatePicker() {
        cy.get('[data-test="transaction-list-filter-date-range-button"]').click({force: true})
        cy.get('[class="Cal__Header__wrapper Cal__Header__blank"').contains('Select a date...').should('be.visible')
    }

    validateIsOnHome() {
        cy.get('[data-test="transaction-list"]').should('be.visible')
    }


    initialLoginSetup(bankName,routingNumber,accountNumber) {
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
        cy.get('[data-test="user-onboarding-next"]').contains('Next').click()
        this.createBankAccount(bankName,routingNumber,accountNumber)
        cy.get('[data-test="user-onboarding-next"]').contains('Done').click()
    }

}

export const onHomePage = new HomePage()