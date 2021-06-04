describe('create todo test suite', () => {

    it('valid todo creation', () => {
        cy.intercept('GET', '/todos', {fixture: 'empty-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('#add-todo').type('new todo via ua{enter}')
        cy.get('.todo').should('have.length', 1).and('contain', 'new todo via ua')
    })

})