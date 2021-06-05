describe('test suite with ui add-complete-delete custom commands', () => {

    before(() => {
        cy.task('resetDatabase')
        cy.visit('/')
    })

    it('add todo via ui command', () => {
        cy.addTodo('created todo via custom command')
    })

    it('complete todo via ui command', () => {
        cy.completeTodo('created todo via custom command')
    })

    it('delete todo via ui command', () => {
        cy.deleteTodo(0)
    })

})