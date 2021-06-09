declare namespace Cypress {
    interface Chainable<Subject> {
  
       /**
       * adds a new todo item via POST /todos request
       * @example
       * cy.addTodo('todo title')
       */
       addTodo(todo: string): Chainable<any>
  
       /**
       * deletes a ceratian todo item via index
       * @example
       * cy.deleteTodo(0)
       */
       deleteTodo(index: int): Chainable<any>
  
       /**
       * completes a ceratian todo item via text
       * @example
       * cy.completeTodo('text')
       */
       completeTodo(text: string): Chainable<any>
  
    }
}