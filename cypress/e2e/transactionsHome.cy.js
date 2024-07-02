import { onLoginPage } from "../support/pages/loginPage"
import { onHomePage } from "../support/pages/homePage"
import { navigationMenu } from "../support/pages/navigationMenu"
import { aliasQuery, aliasMutation } from '../support/utils/graphql-test-utils'

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
        //TODO: graphql request?    
    })

    beforeEach('intercept graphql', () => {
        cy.intercept('POST', 'http://localhost:3001/graphql', (req) => {
        // Queries
        aliasQuery(req, 'ListBankAccount')
        aliasQuery(req, 'CreateBankAccount')

        // Mutations
        aliasMutation(req, 'CreateBankAccount')
        })
    })

    it.only('verify user and bank details tests', () => {
        aliasQuery(
            cy.request({
                method: 'POST',
                url: 'http://localhost:3001/graphql',
                body: {
                        "operationName": "CreateBankAccount",
                        "query": "\n  mutation CreateBankAccount($bankName: String!, $accountNumber: String!, $routingNumber: String!) {\n    createBankAccount(\n      bankName: $bankName\n      accountNumber: $accountNumber\n      routingNumber: $routingNumber\n    ) {\n      id\n      uuid\n      userId\n      bankName\n      accountNumber\n      routingNumber\n      isDeleted\n      createdAt\n    }\n  }\n",
                        "variables": {
                            "userId": "-4fBnDXI6",
                            "bankName": "tttttttttt",
                            "accountNumber": "123132231",
                            "routingNumber": "123123132"
                    }              
                },
                failOnStatusCode: false
            }, (req) => {
                cy.log(req)
            })
        )

    })

    it('Create bank account via post on /bankAccounts', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/login',
            body: {
                    "type": "LOGIN",
                    "username": "test",
                    "password": "test",
                    "remember": true
            }
        }).then((response) => {
            cy.log(response)
        })

    })

})
