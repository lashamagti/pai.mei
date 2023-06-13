class WelcomePage {
    
    usernameInputField() {
        return cy.get('[name="email"]') 
    }

    passwordInputField() {
        return cy.get('[name="enterPassword"]') 
    }

    logInBtn() {
        return cy.get('[class="sc-bczRLJ fFnGOc"]') 
    }
}

export default new WelcomePage()