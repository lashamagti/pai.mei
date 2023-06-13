describe ('YouTube search', () => {
    before (() => {
        cy.visit('https://youtube.com') 
    })

    it ('Should search youtube', () => {
        const searchQuery = 'Underworld - Rez';

        cy.get('[name="search_query"]').type(searchQuery)
        cy.get('[name="search_query"]').type('{enter}')
        cy.get('[src="https://i.ytimg.com/vi/F6Y7lcvubhU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAY4qZjqxaOAZbfxyfKOBrSpCA6nA"]').click()
        
    })
})