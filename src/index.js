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
const projectList = document.querySelector(".projects-list ul");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const dateInput = document.querySelector("#task-date");
const newProjectBtn = document.querySelector(".new-project");
const projectNameInput = document.querySelector("#project-name");

createArrayProject(projectArray);
createArrayTask(taskArray);

const clearLists = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const createProject = function () {
  const newProject = new project(projectNameInput.value, Date.now().toString());
  projectArray.push(newProject);
  console.table(projectArray);
  createArrayProject(projectArray);
};

const createTask = function (e) {
  let selectedTypeInput = document.querySelector(
    'input[name="choice"]:checked'
  );

  const newTask = new task(
    titleInput.value,
    descriptionInput.value,
    dateInput.value,
    selectedTypeInput.value
  );
  taskArray.push(newTask);
  console.table(taskArray);

  createArrayTask(taskArray);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hideTaskForm();
  clearLists(mainContent);
  createTask(e);
});

//handle project form submit
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearLists(projectList);
  createProject();
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
