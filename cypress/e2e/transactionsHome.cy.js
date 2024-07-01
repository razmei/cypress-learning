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
    let userId
    let uuid
    let bankAccountId

    before('Create test user and bank account', () => {
        cy.createUserAPI(firstName,lastName,userName,password).then((response) => {
            userId = response.body.user.userId
            uuid = response.body.user.uuid
            cy.log(response)
        })
        //create Bank account for above user
        //TODO: graphql request      
    })

    it.only('verify user and bank details tests', () => {



    })

})