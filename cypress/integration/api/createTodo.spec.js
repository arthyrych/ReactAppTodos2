describe('POST /todos api test suite', () => {

    it('valid todo creation and saving var to env', () => {
        cy.visit('/')

        cy.request('POST', '/todos', {
          title: "todoViaApi " + Date.now(),
          completed: false
        }).then(todo => {
          cy.log(todo)
          Cypress.env('id', todo.body.id)
        })
      
        cy.reload()
        cy.contains('todoViaApi').should('be.visible')
    })

})