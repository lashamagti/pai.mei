describe('Test Suite', () => {
    it('Intercept by matching GET method', () => {
        cy.visit('https://reqres.in/');
        cy.intercept('GET','api/users?page=2').as('posts')
        cy.get("[data-id=users]").click()
        cy.wait('@posts').its('response.body.data').should('have.length', 6)
      })
  });
  
  
  