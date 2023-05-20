import {
  default as createNewDOMTask,
  displayDescription,
  displayTaskForm,
  hideTaskForm,
  createArrayTask,
} from "./createDOM";
import { default as task, taskArray } from "./createTask";

const form = document.querySelector("form");
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
/* body.forEach((body) => { */
document.addEventListener("click", (e) => {
  const target = e.target.closest(".todo-item");
  if (e.target.closest(".todo-item")) {
    displayDescription(target);
  }
});
/* }); */

newTaskBtn.addEventListener("click", () => {
  displayTaskForm();
});
