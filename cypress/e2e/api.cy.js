describe('Login API', () => {
  it('should authenticate user with valid credentials', () => {
    cy.request('POST', 'https://nodanorm-api-gateway-test.andersenlab.dev/api/v1/login', {
      type: 'email',
      login: 'k12345@gmail.com',
      password: 'Test123!'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('accessToken');
      expect(response.body).to.have.property('refreshToken');
    });
  });
});

  