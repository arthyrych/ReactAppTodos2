describe('open todos test suite', () => {

    it('open mixed todos from fixtures', () => {
        cy.intercept('GET', '/todos', {fixture: 'mixed-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#todo-list').should('be.visible')
            .find('.todo').should('have.length', 4).and('not.be.empty')
    })

    it('open none todos from fixtures', () => {
        cy.intercept('GET', '/todos', {fixture: 'empty-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#todo-list').should('not.be.visible')
            .find('.todo').should('not.exist')
    })

    it('open completed todos from fixtures', () => {
        cy.intercept('GET', '/todos', {fixture: 'completed-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#todo-list').should('be.visible')
            .find('.todo').should('have.length', 4).and('have.class', 'completed')
    })

    it('open uncompleted todos from fixtures', () => {
        cy.intercept('GET', '/todos', {fixture: 'uncompleted-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#todo-list').should('be.visible')
            .find('.todo').should('have.length', 4).and('not.have.class', 'completed')
    })

})