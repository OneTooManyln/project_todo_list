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
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const dateInput = document.querySelector("#task-date");

createArrayTask(taskArray);

const clearLists = function () {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
};

form.addEventListener("submit", (e) => {
  let selectedTypeInput = document.querySelector(
    'input[name="choice"]:checked'
  );

  e.preventDefault();
  hideTaskForm();
  clearLists();

  const newTask = new task(
    titleInput.value,
    descriptionInput.value,
    dateInput.value,
    selectedTypeInput.value
  );
  taskArray.push(newTask);
  console.table(taskArray);

  createArrayTask(taskArray);
});

document.addEventListener("click", (e) => {
  const target = e.target.closest(".todo-item");
  if (e.target.closest(".todo-item")) {
    displayDescription(target);
  }
});

newTaskBtn.addEventListener("click", () => {
  displayTaskForm();
});
