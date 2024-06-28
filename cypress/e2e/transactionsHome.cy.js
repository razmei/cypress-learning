import { onLoginPage } from "../support/pages/loginPage"
import { onHomePage } from "../support/pages/homePage"
import { navigationMenu } from "../support/pages/navigationMenu"

describe('Tests the Transactions Home page', () => {

    //test user details:
    let firstName = "Home First"
    let lastName = "Home Last"
    let userName = "homeuser"
    let password = "homepass"
    let confirmPassword = password
    let bankName = "Home Bank"
    let routingNumber = "100000001"
    let accountNumber = "120000012"

    it.only('request tests', () => {       
           
        cy.loginUserAPI(userName,password).then((response) => {
            if (response.status === 200) {
                cy.log('User exists, no need to create.')
            } else {
                cy.createUserAPI(firstName,lastName,userName,password)
            }

        })

    })

})