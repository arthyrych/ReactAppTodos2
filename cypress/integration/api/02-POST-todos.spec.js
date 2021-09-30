describe('POST /todos api test suite', () => {

    const todos = {
        todoWithAutoId: {
            title: "todoWithAutoId " + Date.now(),
            completed: false
        },
        todoWithExistingId: {
            title: "todoWithExistingId " + Date.now(),
            completed: false,
            id: 1
        },
        todoWithCompletedStatus: {
            title: "todoWithCompletedStatus " + Date.now(),
            completed: true
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    it('POST /todos several todos creation and saving id to env', () => {
        for (let i = 0; i < getRandomInt(2, 11); i++) {
            cy.request('POST', '/todos', todos.todoWithAutoId).then(todo => {
                Cypress.env('id', todo.body.id)
                expect(todo.status).to.equal(201)
                expect(todo.body.title).to.equal(todos.todoWithAutoId.title)
                expect(todo.body.completed).to.equal(todos.todoWithAutoId.completed)
                expect(todo.body.id).to.equal(Cypress.env('id', todo.body.id))
            })
        }
    })

    it('POST /todos todo creation with completed status', () => {
        cy.request('POST', '/todos', todos.todoWithCompletedStatus).then(todo => {
            Cypress.env('id', todo.body.id)
            expect(todo.status).to.equal(201)
            expect(todo.body.title).to.equal(todos.todoWithCompletedStatus.title)
            expect(todo.body.completed).to.equal(todos.todoWithCompletedStatus.completed)
            expect(todo.body.id).to.equal(Cypress.env('id', todo.body.id))
        })
    })

    it('POST /todos todo creation with existing id', () => {
        cy.request({method: 'POST', 
                    url: '/todos', 
                    body: todos.todoWithExistingId, 
                    failOnStatusCode: false})
            .then(todo => {
            expect(todo.status).to.equal(500)
            expect(todo.statusText).to.equal("Internal Server Error")
            expect(todo.isOkStatusCode).to.equal(false)
        })
    })

    after(() => {
        cy.task('resetDatabase')
    })

})