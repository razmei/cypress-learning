This project is used for learning Cypress

Pre-requisites:

1. Node
2. Yarn
3. cypress-realworld-app
https://github.com/cypress-io/cypress-realworld-app

Test all ok:
1. start website ('yarn dev' from its project)
2. create tests


TEST STRATEGY: 

User journeys:

    1. Transactions Home
        a. Everyone
            a1. Date Range
            a2. Amount Range
        b. Friends
            b1. Date Range
            b2. Amount Range
        c. Mine
            c1. Date Range
            c2. Amount Range

    2. Transactions View
        a. Like a Transaction -> notification?
        b. Comment on a Transaction -> notification?
        c. Request Transaction
            c1. Accept a request
            c2. Deny a request

    3. New Transaction
        a. Select User
            a1. Request payment
                a1.1. Redirect to Transactions Feed
                a1.2. Send notification to request receiver                
            a2. Send payment
                a2.1. Redirect to Transactions Feed
                a2.2. Send notification to payment receiver -> update balance

    4. Bank Accounts View
        a. Add Bank Account
            a.1 Redirect to Bank Accounts View
        b. Delete Bank Account
            b.1. Soft delete Bank Account

    5. Notifications View
        a. Mark notifications read
            a.1. Update counter

    6. User Settings
        a. Update settings

    7. Login => DONE

    8. Logout => DONE
        a. Redirect to Login => DONE

    9. Signup => DONE
        a. Direct to Login => DONE

    