describe('create todo test suite', () => {

    const unique = Date.now()

    const newTodos = [
        "first unique todo via ui " + unique,
        "second unique todo via ui " + unique,
        "third unique todo via ui " + unique,
        "fourth unique todo via ui " + unique,
    ]

    function todoCreateAndValidate (todoNumber) {
        cy.get('#add-todo').should('be.visible').and('have.class', 'new-todo')
            .type(newTodos[todoNumber] + "{enter}")
        cy.contains(newTodos[todoNumber]).should('be.visible') 
    }

    before(() => {
        cy.visit('/')
    })

    it('precreation check', () => {
        cy.get('.todo').should('not.exist')
    })

    it('first todo creation', () => {
        todoCreateAndValidate(0)
    })

    it('second todo creation', () => {
        todoCreateAndValidate(1)
    })

    it('third todo creation', () => {
        todoCreateAndValidate(2)
    })

    it('fourth todo creation', () => {
        todoCreateAndValidate(3)
    })

    it('length check', () => {
        cy.get('.todo').should('have.length', 4)
    })

    after(() => {
        cy.task('resetDatabase')
    })

})