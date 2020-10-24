import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";


let url = 'ryan/todos/'


class TodoService {

  constructor() {
    this.getTodos()
  }

  async getTodos() {
    let res = await api.get("ryan/todos");
    let todoList = res.data.data.map(t => new Todo(t))
    ProxyState.todos = todoList
    // @ts-ignore
    document.getElementById('taskQty').innerText = ProxyState.todos.length
  }

  async addTodo(newTodo) {
    let res = await api.post("ryan/todos", newTodo);
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);

    if (todo.completed == false) {
      todo.completed = true
      if (todo.completed == true) {
        document.getElementById(todoId).classList.add('complete')
      }
    } else {
      todo.completed = false
      if (todo.completed == false) {
        document.getElementById(todoId).classList.remove('complete')
      }
    }
  
    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
    
  }

  async removeTodo(todoId) {
    let res = await api.delete("ryan/todos/" + todoId)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;