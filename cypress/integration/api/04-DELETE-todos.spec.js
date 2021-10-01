describe('DELETE /todos/{id} and DELETE /todos api test suite', () => {

    const id = [1, 2, 3]

    function tryToDeleteNonExisingTodos() {
        for (let i = 0; i < id.length; i++) {
            cy.request({method: 'DELETE', 
                        url: `/todos/${id[i]}`,
                        failOnStatusCode: false})
                .then(res => {
                expect(res.status).to.eq(404)
                expect(res.isOkStatusCode).to.eq(false)
                expect(res.statusText).to.eq("Not Found")
            })
        }
    }

    beforeEach(() => {
        cy.task('seedDatabase')
    })

    it('DELETE /todos/{id} several requests to delete and verify seeded todos', () => {
        for (let i = 0; i < id.length; i++) {
            cy.request('DELETE', `/todos/${id[i]}`).then(res => {
                expect(res.status).to.eq(200)
                expect(res.isOkStatusCode).to.eq(true)
                expect(res.statusText).to.eq("OK")
            })
        }
        tryToDeleteNonExisingTodos()
    })
    
    it('DELETE /todos request to delete ALL seeded todos and verify them', () => {
        cy.request('DELETE', '/todos').then(res => {
            expect(res.status).to.eq(204)
            expect(res.isOkStatusCode).to.eq(true)
            expect(res.statusText).to.eq("No Content")
        })
        tryToDeleteNonExisingTodos()
    })

})