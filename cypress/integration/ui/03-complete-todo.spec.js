describe('complete todo test suite', () => {

    before(() => {
        cy.addTodo(Cypress.env('todoForCompletion'))
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

    after(() => {
        cy.task('resetDatabase')
    })

})