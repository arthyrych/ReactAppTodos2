declare namespace Cypress {
    interface Chainable<Subject> {

       /**
       * returns all todo items via GET /todos request
       * @example
       * cy.getTodos()
       */
        getTodos(): Chainable<any>        

       /**
       * adds a new todo item via POST /todos request (uncompleted by default or completed with second argument as true)
       * @example
       * cy.addTodo('todo title', true)
       */
       addTodo(todo: string): Chainable<any>

       /**
       * adds several todo items via POST /todos/seed request (rewrites all todos)
       * @example
       * cy.seedTodos()
       */
        seedTodos(): Chainable<any>       

       /**
       * completes a todo item via PATCH /todos/${id} request (completes by default or can uncomplete with second as false)
       * @example
       * cy.completeTodo(id, false)
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