import {
  default as createNewDOMTask,
  displayDescription,
  displayTaskForm,
  hideTaskForm,
  createArrayTask,
} from "./createDOM";
import { default as task, taskArray } from "./createTask";

const form = document.querySelector("form");
const todoItem = document.querySelectorAll(".todo-item");
const newTaskBtn = document.querySelector(".new-task");
const mainContent = document.querySelector(".main-content");

createArrayTask(taskArray);

const clearLists = function () {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hideTaskForm();
  clearLists();

  const titleInput = document.querySelector("#task-title");
  const descriptionInput = document.querySelector("#task-description");

  const newTask = new task(titleInput.value, descriptionInput.value);
  taskArray.push(newTask);
  console.table(taskArray);

  createArrayTask(taskArray);
});
todoItem.forEach((todoItem) => {
  todoItem.addEventListener("click", (e) => {
    displayDescription(e);
  });
});

newTaskBtn.addEventListener("click", () => {
  displayTaskForm();
});
