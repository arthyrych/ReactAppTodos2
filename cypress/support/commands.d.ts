declare namespace Cypress {
    interface Chainable<Subject> {

       /**
       * returns all todo items via GET /todos request
       * @example
       * cy.getTodos()
       */
        getTodos(): Chainable<any>        

       /**
       * adds a new todo item via POST /todos request
       * @example
       * cy.addTodo('todo title')
       */
       addTodo(todo: string): Chainable<any>

       /**
       * completes a todo item via PATCH /todos/${id} request
       * @example
       * cy.completeTodo(id)
       */
        completeTodo(id: int): Chainable<any>       

       /**
       * deletes a todo item via DELETE /todos/${id} request
       * @example
       * cy.deleteTodo(id)
       */
        deleteTodo(id: int): Chainable<any>       

       /**
       * deletes ALL todo items via DELETE /todos request
       * @example
       * cy.deleteAllTodos()
       */
        deleteAllTodos(): Chainable<any>
  
    }
}