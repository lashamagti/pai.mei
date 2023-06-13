describe('Reqres API - Create User', () => {

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

    it('should retrieve a single user by ID', () => {
        // Specify the user ID to retrieve
        const userId = 1;

        // Make a GET request to retrieve the user
        cy.request('GET', `https://reqres.in/api/users/${userId}`)
        .then((response) => {
            // Assert the response status code and body
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('data').and.be.an('object');
            expect(response.body.data).to.have.property('id', userId);
        });

    });

    it('should update a user', () => {
        // Specify the user ID and updated information
        const userId = 1;
        const updatedInfo = {
          name: 'Updated Name',
          job: 'Updated Job'
        };
    
        // Make a PUT request to update the user
        cy.request('PUT', `https://reqres.in/api/users/${userId}`, updatedInfo)
        .then((response) => {
        // Assert the response status code and body
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('name', updatedInfo.name);
            expect(response.body).to.have.property('job', updatedInfo.job);
            expect(response.body).to.have.property('updatedAt').and.be.a('string');
        });
    });

    it('should delete a user', () => {
        // Specify the user ID to delete
        const userId = 1;
    
        // Make a DELETE request to delete the user
        cy.request('DELETE', `https://reqres.in/api/users/${userId}`)
          .then((response) => {
            // Assert the response status code
            expect(response.status).to.equal(204);
          });
    });


    it('should fetch a list of resources', () => {
        // Make a GET request to fetch resources
        cy.request('GET', 'https://reqres.in/api/unknown')
          .then((response) => {
            // Assert the response status code and body
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('data').and.be.an('array');
            expect(response.body.data).to.not.be.empty;
          });
      });

});
  
  