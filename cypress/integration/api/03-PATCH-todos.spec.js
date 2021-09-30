describe('PATCH /todos/{id} api test suite', () => {

    const id = [1, 2, 3]

    const statuses = {
        completed: {
            "completed": true
        },
        uncompleted: {
            "completed": false
        }
    }

    function patchTodo (payload, status) {
        for (let i = 0; i < id.length; i++) {
            cy.request('PATCH', `/todos/${id[i]}`, payload).then(res => {
                cy.log(res)
                expect(res.status).to.eq(200)
                expect(res.body.completed).to.eq(status)
                expect(res.body.id).to.eq(i + 1)
            })
        }
    }

    before(() => {
        cy.task('seedDatabase')
    })

    it('PATCH /todos/{id} several requests to complete and verify seeded todos', () => {
        patchTodo(statuses.completed, true)
    })

    it('PATCH /todos/{id} several requests to uncomplete and verify seeded todos', () => {
        patchTodo(statuses.uncompleted, false)
    })

    after(() => {
        cy.task('resetDatabase')
    })

})