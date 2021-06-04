// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// adds a new todo item
Cypress.Commands.add('addTodo', (title) => {
    cy.get('.new-todo').type(title + '{enter}')
})

// deletes a ceratian todo item via index
Cypress.Commands.add('deleteTodo', (index) => {
    cy.get('#todo-list').find('.destroy').eq(index).invoke('show').click()
})

// complete a ceratian todo item via text
Cypress.Commands.add('completeTodo', (text) => {
    cy.get('#todo-list').contains(text).parent().find('.toggle').check()
})