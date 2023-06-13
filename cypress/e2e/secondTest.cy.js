describe('Registration Form Validation', () => {
    before(() => {
        cy.visit('https://nodanorm-test.andersenlab.dev/signup')
        cy.get('[class="sc-bczRLJ sc-jGprRt dquWHj hSJtrq"]').click()
    })

    it ('Should check validation', () => {
        cy.get('[id="input-phone"]').type('lasha')
        cy.contains('Invalid email address').should('be.visible')
        cy.get('[id="input-phone"]').clear().type('lasha@lasha.com')
        cy.get('[type="submit"]').click()
        cy.get('[name="code"]').type('121212')
        cy.get('[type="submit"]').click()
        cy.contains('Invalid code, you have 2 attempts left').should('be.visible')
    })
})