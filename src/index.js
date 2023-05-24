import {
  default as createNewDOMTask,
  displayDescription,
  displayTaskForm,
  hideTaskForm,
  createArrayTask,
  displayProjectForm,
} from "./createDOM";
import { default as task, taskArray } from "./classes";

const form = document.querySelector("#task-form");
const newTaskBtn = document.querySelector(".new-task");
const mainContent = document.querySelector(".main-content");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const dateInput = document.querySelector("#task-date");
const newProjectBtn = document.querySelector(".new-project");

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
  const target = e.target.closest(".show-description-btn");
  if (e.target.closest(".show-description-btn")) {
    displayDescription(target);
  }
});

newTaskBtn.addEventListener("click", () => {
  displayTaskForm();
});

// display new project form
newProjectBtn.addEventListener("click", () => {
  displayProjectForm();
});
