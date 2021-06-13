describe('complete todo test suite', () => {

    const todo = 'todo for completion'

    beforeEach(() => {
        cy.task('resetDatabase')
        cy.addTodo(todo)
        cy.visit('/')
    })

    it('completes created todo with click', () => {
        cy.get('.todo').find('.toggle').click()
            .parents('li').should('have.class', 'completed')
    })

    it('completes created todo with invoke', () => {
        // cy.get('.todo').invoke('attr', 'addClass', 'completed')
        cy.get('.todo').invoke('attr', 'class', 'completed')
    })

})