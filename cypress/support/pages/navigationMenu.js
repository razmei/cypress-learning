export class NavigationMenu {

    checkSideBarVisible() {
        cy.get('[data-test="sidenav"]').should('be.visible')
    }

    checkSideBarHidden() {
        cy.get('.MuiPaper-root').should('have.class', 'MuiDrawer-paperAnchorDockedLeft')
    }

    openHome() {
        cy.get('[class="MuiListItemText-root"]').contains('Home').click()
        cy.get('[data-test="transaction-list"]').should('be.visible')
    }

    openMyAccount() {
        cy.get('[class="MuiListItemText-root"]').contains('My Account').click()
        cy.get('.MuiTypography-root').contains('User Settings')
    }

    openBankAccounts() {
        cy.get('[class="MuiListItemText-root"]').contains('Bank Accounts').click()
        cy.get('.MuiTypography-root').contains('Bank Accounts')
    }
        
    openNotifications() {
        cy.get('[class="MuiListItemText-root"]').contains('Notifications').click()
        cy.get('.MuiTypography-root').contains('Notifications')
    }

}

export const navigationMenu = new NavigationMenu()