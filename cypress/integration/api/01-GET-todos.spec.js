describe('GET /todos api test suite', () => {

    it('GET /todos returns an empty array', () => {
        cy.request({method: 'GET', url: '/todos' }).then(res => {
            expect(res.status).to.equal(200)
            expect(res.body.length).to.equal(0)
        })
    })

    it('GET /todos returns an array after seedDatabase task', () => {
        cy.task('seedDatabase')
        cy.request({method: 'GET', url: '/todos' }).then(res => {
            expect(res.status).to.equal(200)
            expect(res.body.length).to.equal(3)
            for (let i = 0; i < res.body.length; i++) {
                expect(res.body[i].title).to.equal(`todo from task ${i + 1}`)
                expect(res.body[i].completed).to.equal(false)
                expect(res.body[i].id).to.equal(i + 1)
            }
        })
    })

    after(() => {
        cy.task('resetDatabase')
    })

})