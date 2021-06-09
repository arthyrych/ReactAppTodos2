describe('delete todo test suite', () => {

    const todo = 'todo for deletion'

    beforeEach(() => {
        cy.task('resetDatabase')
        cy.addTodo(todo)
        cy.visit('/')
    })

    it('deletes created test todo with trigger', () => {
        cy.get('.todo').should('contain.text', todo)
            .trigger('mouseover').find('.destroy').should('be.visible')
            .parents('.todo').trigger('mouseout').find('.destroy').should('not.be.visible')
            .parents('.todo').trigger('mouseover').find('.destroy').click().should('not.exist')
    })

    it('deletes created test todo with invoke', () => {
        cy.get('.todo').should('contain.text', todo)
            .find('.destroy').invoke('show').should('be.visible')
            .invoke('hide').should('not.be.visible')
            .invoke('show').click().should('not.exist')
    })

})