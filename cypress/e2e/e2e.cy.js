import { onHomePage } from "../support/pages/homePage"
import { onLoginPage } from "../support/pages/loginPage"
import { onSignUpPage } from "../support/pages/signUpPage"

describe('E2E tests', () => {

  it('User signup and initial Bank details set-up', () => {
    //set up details
    let firstName = "First Name Test X"
    let lastName = "Last Name Test X"
    let userName = "testX"
    let password = "testX"
    let bankName = "Bank X"
    let routingNumber = "123456789"
    let accountNumber = "123456789"
    //1. Visit signup page
    cy.visit('/signup')
    //2. Create user
    onSignUpPage.fillAllMandatoryFields(firstName,lastName,userName,password,password)
    onSignUpPage.signUpSuccessfully()
    //3. Login with user from 2.
    cy.visit('/signin')
    onLoginPage.enterCredentials(userName,password)
    onLoginPage.validateLandedOnLogin()
    cy.get('[data-test="user-onboarding-next"]').click()
    //4. On homepage create bank account
    onHomePage.createBankAccount(bankName,routingNumber,accountNumber)
    //5. Land on homepage
    onHomePage.verifyFinishMessage()
  })
})