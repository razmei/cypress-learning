import { onHomePage } from "../support/pages/homePage"
import { onLoginPage } from "../support/pages/loginPage"
import { navigationMenu } from "../support/pages/navigationMenu"
import { onSignUpPage } from "../support/pages/signUpPage"

describe ('Log out tests', () => {
    let firstName = "Logout First Name2"
    let lastName = "Logout Last Name2"
    let userName = "testLogout2"
    let password = "logoutPass2"
    let confirmPassword = password
    let bankName = "Logout bank2"
    let routingNumber = "123456789"
    let accountNumber = "123456789"

    it('Validate log out lands on sign in page', () => {
        cy.createUser(firstName,lastName,userName,password,confirmPassword,bankName,routingNumber,accountNumber)
        navigationMenu.logOut()
        cy.get('.MuiTypography-root').should('contain','Sign in')
    })

})