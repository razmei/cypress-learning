export class NavigationMenu {

    checkSideBarVisible() {
        cy.get('[data-test="sidenav"]').should('be.visible')
    }

    checkSideBarHidden() {
        cy.get('.MuiPaper-root').should('have.class', 'MuiDrawer-paperAnchorDockedLeft')
    }
       
    openHome() {
        cy.get('[class="MuiListItemText-root"]').contains('Home').click()
    }

    openMyAccount() {
        cy.get('[class="MuiListItemText-root"]').contains('My Account').click()
    }

    openBankAccounts() {
        cy.get('[class="MuiListItemText-root"]').contains('Bank Accounts').click()
    }
        
    openNotifications() {
        cy.get('[class="MuiListItemText-root"]').contains('Notifications').click()
    }

}

export const navigationMenu = new NavigationMenu()