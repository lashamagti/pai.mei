describe('Reqres API', () => {
    it('should retrieve a list of users', () => {
      // Make a GET request to retrieve a list of users
      cy.request('GET', 'https://reqres.in/api/users?page=1')
        .then((response) => {
          // Assert the response status code and body
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('data').and.be.an('array');
          expect(response.body.data).to.have.length.greaterThan(0);
        });
    });
  
    it('should create a new user', () => {
      // Define the request payload
      const payload = {
        name: 'John Doe',
        job: 'Software Engineer'
      };
  
      // Make a POST request to create a new user
      cy.request('POST', 'https://reqres.in/api/users', payload)
        .then((response) => {
          // Assert the response status code and body
          expect(response.status).to.equal(201);
          expect(response.body).to.have.property('name', payload.name);
          expect(response.body).to.have.property('job', payload.job);
          expect(response.body).to.have.property('id').and.be.a('string');
          expect(response.body).to.have.property('createdAt').and.be.a('string');
        });
    });
  });
  
  