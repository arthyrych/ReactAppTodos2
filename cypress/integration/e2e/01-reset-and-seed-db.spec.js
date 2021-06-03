describe('test suite with custom tasks', () => {

    it('reset db test', () => {
        cy.task('resetDatabase')
        cy.visit('/')
    })

    it('seed db test', () => {
        cy.task('seedDatabase')
        cy.visit('/')
    })

})