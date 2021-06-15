describe('complete todo test suite', () => {

    const todo = 'todo for completion'

    before(() => {
        cy.task('resetDatabase')
        cy.addTodo(todo)
        cy.visit('/')
    })

    it('completes created todo with click', () => {
        cy.get('.todo').find('.toggle').click()
            .parents('li').should('have.class', 'completed')
    })

    it('uncompletes created todo with click', () => {
        cy.get('.todo').find('.toggle').click()
            .parents('li').should('not.have.class', 'completed')
    })

    it('completes created todo with check', () => {
        cy.get('input[type="checkbox"]').should('have.class', 'toggle')
            .check().should('be.checked')
    })

    it('uncompletes created todo with uncheck', () => {
        cy.get('input[type="checkbox"]').should('have.class', 'toggle')
            .uncheck().should('not.be.checked')
    })

})