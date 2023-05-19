import { default as createNewDOMTask, displayDescription } from "./createDOM";
import { default as task, taskArray } from "./createTask";

const form = document.querySelector("form");
const todoItem = document.querySelectorAll(".todo-item");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#task-title");
  const descriptionInput = document.querySelector("#task-description");

  const newTask = new task(titleInput.value, descriptionInput.value);
  taskArray.push(newTask);
  console.table(taskArray);

  createNewDOMTask(titleInput.value, descriptionInput.value);
});
todoItem.forEach((todoItem) => {
  todoItem.addEventListener("click", (e) => {
    displayDescription(e);
  });
});
