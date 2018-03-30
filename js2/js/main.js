let form = document.getElementById("todo-form");
let todoList = document.getElementById("todo-list");
let todoCompleted = document.getElementById("todo-completed");
let taskInput = document.getElementById("input");
let button = document.getElementById("btn");
//let todoListArr = [];

button.onclick = () => {
  let newTodo = "";
  newTodo = taskInput.value;
  addTodoListItem(newtodo);
  //todolistArr.push(newTodo);
  //taskList.value = "";
  //console.log(taskInput.value);
};

addTodoListItem = todoText => {
  let todoItem = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "inputCheckbox");
  let edit = document.createElement("button");
  edit.setAttribute("id", "editBtn");
  edit.innerText = "Edit";
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn");
  deleteBtn.innerText = "Delete";

  todoItem.innerText = todoText;
  todoList.appendChild(todoItem);
  todo.appendChild(checkbox);
  todo.appendChild(edit);
  todo.appendChild(deleteBtn);
};
