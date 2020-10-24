import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import todoService from "../Services/TodoService.js";

function _drawTodos() { 
  let template = ''
  ProxyState.todos.forEach(t =>  {
    if (t.completed == true) {
      template += t.CompletedTodoTemplate
    } else {
      template += t.TodoTemplate
    }
  })
  document.getElementById('todos').innerHTML = template
}

// template += t.TodoTemplate

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)
    _drawTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  addTodo(e) {
    e.preventDefault();
    let form = e.target;

    let newTodo = {      
      description: form.todo.value
    };

    try {
      todoService.addTodo(newTodo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}