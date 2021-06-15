describe('create todo test suite', () => {

    before(() => {
        cy.task('resetDatabase')
        cy.visit('/')
    })

    it('valid todo creation', () => {
        cy.get('.todo').should('not.exist')
    })


})