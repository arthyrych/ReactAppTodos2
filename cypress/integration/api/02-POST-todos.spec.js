describe('POST /todos api test suite', () => {

    let newTodo = {
        title: "todoViaApi " + Date.now(),
        completed: false
    }

    it('valid todo creation and saving var to env', () => {
        cy.request('POST', '/todos', newTodo).then(todo => {
            cy.log(todo)
            Cypress.env('id', todo.body.id)

            expect(todo.status).to.equal(201)
            expect(todo.body.title).to.equal(newTodo.title)
            expect(todo.body.completed).to.equal(newTodo.completed)
        })
    })

})