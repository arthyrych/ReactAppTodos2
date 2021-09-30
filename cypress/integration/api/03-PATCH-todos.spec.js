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

    before(() => {
        cy.task('seedDatabase')
    })

    it('PATCH /todos/{id} several requests to complete and verify seeded todos', () => {
        for (let i = 0; i < id.length; i++) {
            cy.request('PATCH', `/todos/${id[i]}`, statuses.completed).then(res => {
                cy.log(res)
                expect(res.status).to.eq(200)
                expect(res.body.completed).to.eq(true)
                expect(res.body.id).to.eq(i + 1)
            })
        }
    })

    it('PATCH /todos/{id} several requests to uncomplete and verify seeded todos', () => {
        for (let i = 0; i < id.length; i++) {
            cy.request('PATCH', `/todos/${id[i]}`, statuses.uncompleted).then(res => {
                cy.log(res)
                expect(res.status).to.eq(200)
                expect(res.body.completed).to.eq(false)
                expect(res.body.id).to.eq(i + 1)
            })
        }
    })

    after(() => {
        cy.task('resetDatabase')
    })

})