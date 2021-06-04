describe('complete todo test suite', () => {

    it('complete todo test', () => {
        cy.intercept('GET', '/todos', {fixture: 'several-todos-list'}).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
        cy.get('.todo').first().find('.toggle').click()
            .parents('li').should('have.class', 'completed')
    })

})