describe('test suite with add-complete-delete custom commands', () => {

    before(() => {
        cy.task('resetDatabase')
        cy.visit('/')
    })

    it('add todo via command', () => {
        cy.addTodo('created todo via custom command')
    })

    it('complete todo via command', () => {
        cy.completeTodo('created todo via custom command')
    })

    it('delete todo via command', () => {
        cy.deleteTodo(0)
    })

})