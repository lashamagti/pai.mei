import WelcomePage from "../pages/welcomPage";
import { TEST_USER_NAME, TEST_USER_PASSWORD } from "../fixtures/testData";

describe('Log in functianality', () => {
  before(() => {
    cy.visit('https://nodanorm-test.andersenlab.dev/') 
    cy.get('[class="sc-bczRLJ sc-jGprRt dquWHj hSJtrq"]').click()
  }) 

  it ('Should test log in functionality with valid credentials', () => {
    WelcomePage.usernameInputField().type(TEST_USER_NAME)
    WelcomePage.passwordInputField().type(TEST_USER_PASSWORD)
    WelcomePage.logInBtn().click()
    cy.url().should('contain', '/main-menu')
  })

})
