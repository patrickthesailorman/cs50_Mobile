const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  newTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
    alert('New TODO button clicked!')
  },
}
