describe('GET /todos api test suite', () => {

    it('test', () => {

        cy.intercept({method: 'GET', url: '/todos'}, {fixture: 'todos'}).as('getTodos')

        
        cy.request({method: 'GET', url: '/todos' }).then(res => {
            cy.log(res)
        })
        


       // cy.visit('/')

    })

})