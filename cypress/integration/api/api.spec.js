describe('api test suite', () => {

    it('first test', () => {

        cy.intercept({method: 'GET', url: '/todos'}, {fixture: 'todos'}).as('loadTodos')

        cy.request({method: 'GET', url: '/todos' }).its('body').then(body => {
            console.log(body)
        })

    })

})