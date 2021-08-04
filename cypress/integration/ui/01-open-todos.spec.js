describe('open todos test suite', () => {

    function interceptTodos (fixture) {
        cy.intercept('GET', '/todos', fixture).as('getTodos')
        cy.visit('/')
        cy.wait('@getTodos')
    }

    it('open completed/uncompleted todos from fixtures', () => {
        interceptTodos({fixture: 'mixed-todos-list'})
        cy.get('#todo-list').should('be.visible').find('.todo').then(todos => {
            cy.wrap(todos).should('have.length', 4).and('not.be.empty')
            cy.wrap(todos).first().should('not.have.class', 'completed')
            cy.wrap(todos).last().should('have.class', 'completed')
        })   
        
    })

    it('open empty todos list from fixtures', () => {
        interceptTodos({fixture: 'empty-todos-list'})
        cy.get('#todo-list').should('not.be.visible')
            .find('.todo').should('not.exist')
    })

    it('open completed todos from fixtures', () => {
        interceptTodos({fixture: 'completed-todos-list'})
        cy.get('#todo-list').should('be.visible')
            .find('.todo').should('have.length', 4).and('have.class', 'completed')
    })

    it('open uncompleted todos from fixtures', () => {
        interceptTodos({fixture: 'uncompleted-todos-list'})
        cy.get('#todo-list').should('be.visible')
            .find('.todo').should('have.length', 4).and('not.have.class', 'completed')
    })

})