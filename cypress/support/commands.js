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


// returns all todo items
Cypress.Commands.add('getTodos', () => {
    cy.request('GET', '/todos')
})

// adds a new todo item with given title
Cypress.Commands.add('addTodo', (title) => {
    let newTodo = {
        title: title,
        completed: false
    }
    cy.request('POST', '/todos', newTodo)
})

// completes a todo item with given id
Cypress.Commands.add('completeTodo', (id) => {
    let payload = {
        "completed": true
      }
    cy.request('/PATCH', `/todos/${id}`, payload)
})

// deletes a todo item with given id
Cypress.Commands.add('deleteTodo', (id) => {
    cy.request('DELETE', `/todos/${id}`)
})

// deletes ALL todo items
Cypress.Commands.add('deleteAllTodos', () => {
    cy.request('DELETE', '/todos')
})

