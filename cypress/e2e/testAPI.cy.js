describe ('Reqres API - Update user', () => {

    it ('Update user', () => {

        const userId = 1
        const userData = {
            name: 'Luka',
            job: 'Engineer'
        }

        cy.request('PUT', `https://reqres.in/api/users/${userId}`, userData)
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('name', userData.name)
            expect(response.body).to.have.property('job', userData.job)
            expect(response.body).to.have.property('updatedAt').and.be.a('string')
        })
    })
})
