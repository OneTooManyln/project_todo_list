import {
  default as createNewDOMTask,
  displayDescription,
  displayTaskForm,
  hideTaskForm,
  createArrayTask,
  displayProjectForm,
  createArrayProject,
} from "./createDOM";
import { default as task, taskArray, project, projectArray } from "./classes";

const form = document.querySelector("#task-form");
const projectForm = document.querySelector("#project-form");
const newTaskBtn = document.querySelector(".new-task");
const mainContent = document.querySelector(".main-content");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const dateInput = document.querySelector("#task-date");
const newProjectBtn = document.querySelector(".new-project");
const projectNameInput = document.querySelector("#project-name");

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

//handle project form submit
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProject = new project(projectNameInput.value);
  projectArray.push(newProject);
  console.table(projectArray);
  createArrayProject(projectArray);
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
