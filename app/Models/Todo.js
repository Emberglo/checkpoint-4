export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get TodoTemplate() {
    return /*html*/`
      <div class="d-flex p-3 mt-3 justify-content-between">
          <h4 class="mr-5" onclick="app.todoController.toggleTodoStatus('${this.id}')" id="${this.id}">${this.description}</h4>
          <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')"><i class="fas fa-minus"></i></button>
      </div> 
    `
  }

  get CompletedTodoTemplate() {
    return /*html*/`
      <div class="d-flex p-3 mt-3 justify-content-between">
          <h4 class="mr-5 complete" onclick="app.todoController.toggleTodoStatus('${this.id}')" id="${this.id}">${this.description}</h4>
          <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')"><i class="fas fa-minus"></i></button>
      </div> 
    `
  }

}
