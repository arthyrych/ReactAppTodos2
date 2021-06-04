describe('GET /todos api test suite', () => {

    it('test', () => {
        cy.request({method: 'GET', url: '/todos' }).then(res => {
            cy.log(res)
        })
    })

})