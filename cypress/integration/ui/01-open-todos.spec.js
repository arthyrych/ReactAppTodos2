describe('open todos test suite', () => {

    it('open several todos from fixtures', () => {
        cy.intercept('GET', '/todos', {fixture: 'several-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#todo-list').should('be.visible')
            .find('.todo').should('have.length', 4)
    })

    it('open none todos from fixtures', () => {
        cy.intercept('GET', '/todos', {fixture: 'empty-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#todo-list').should('not.be.visible')
            .find('.todo').should('not.exist')
    })

})