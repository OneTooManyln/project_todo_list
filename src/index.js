import {
  default as createNewDOMTask,
  displayDescription,
  displayTaskForm,
  hideTaskForm,
  createArrayTask,
  displayProjectForm,
  createArrayProject,
  hideProjectForm,
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
let selectedProject = projectArray.find(
  (projectArray) => projectArray.name === "My Project"
);

console.log(selectedProject);

createArrayProject(projectArray);
/* createArrayTask(taskArray); */

const clearLists = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const render = function (element) {
  clearLists(mainContent);
  const mainContentTitle = document.querySelector(".main-content-title");
  mainContentTitle.textContent = element.name;

  //render project tasks
  createArrayTask(element.tasks);
};

render(selectedProject);

const createProject = function () {
  const newProject = new project(projectNameInput.value, Date.now().toString());
  projectArray.push(newProject);
  console.table(projectArray);
  createArrayProject(projectArray);

  selectedProject = newProject;
  render(selectedProject);
  console.log(selectedProject);
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
  console.log(selectedProject);
  selectedProject.tasks.push(newTask);
  console.log(selectedProject.tasks);

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
  hideProjectForm();
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

// add listener to projects to display its tasks
document.addEventListener("click", (e) => {
  if (e.target.closest(".project-item")) {
    selectedProject = projectArray.find(
      (projectArray) =>
        projectArray.id == e.target.getAttribute("data-project-id")
    );
    render(selectedProject);
    console.log(selectedProject);
  }
});
