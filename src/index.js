import {
  default as createNewDOMTask,
  displayDescription,
  displayTaskForm,
  hideTaskForm,
  createArrayTask,
  displayProjectForm,
  createArrayProject,
  hideProjectForm,
  renderTitle,
} from "./createDOM";
import { default as task, taskArray, project } from "./classes";
import { isThisWeek, isToday, parse } from "date-fns";
import projectArray from "./storage";

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

const save = function () {
  localStorage.setItem("projects", JSON.stringify(projectArray));
};

const clearLists = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const render = function (element, title) {
  clearLists(mainContent);
  renderTitle(title);
  save();

  //render project tasks
  createArrayTask(element.tasks);
};

render(selectedProject, selectedProject.name);

const createProject = function () {
  const newProject = new project(projectNameInput.value, Date.now().toString());
  projectArray.push(newProject);
  console.table(projectArray);
  createArrayProject(projectArray);

  selectedProject = newProject;
  render(selectedProject, selectedProject.name);
  save();
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

  createArrayTask(selectedProject.tasks);
  console.table(projectArray);
  save();
};

const getClickedMenuBtn = function (e) {
  if (e.target.closest("#inbox-menu-btn")) {
    displayAllTasks();
  } else if (e.target.closest("#today-menu-btn")) {
    displayTodayTasks();
  } else if (e.target.closest("#week-menu-btn")) {
    displayThisWeeksTasks();
  }
};

const displayAllTasks = function () {
  const allTasks = [];
  projectArray.forEach((projectArray) => {
    projectArray.tasks.forEach((task) => {
      clearLists(mainContent);
      allTasks.push(task);
      renderTitle("INBOX");
      createArrayTask(allTasks);
    });
  });
};

const displayTodayTasks = function () {
  const todayTasks = [];
  projectArray.forEach((projectArray) => {
    projectArray.tasks.forEach((task) => {
      if (isToday(parse(task.date, "yyyy-MM-dd", new Date()))) {
        console.table(task);
        clearLists(mainContent);
        todayTasks.push(task);
        renderTitle("TODAY");
        createArrayTask(todayTasks);
      }
    });
  });
};

const displayThisWeeksTasks = function () {
  const thisWeeksTasks = [];
  projectArray.forEach((projectArray) => {
    projectArray.tasks.forEach((task) => {
      if (isThisWeek(parse(task.date, "yyyy-MM-dd", new Date()))) {
        clearLists(mainContent);
        thisWeeksTasks.push(task);
        renderTitle("WEEK");
        createArrayTask(thisWeeksTasks);
      }
    });
  });
};

const deleteTask = function (event) {
  const taskSelected =
    event.target.closest("#delete-task").parentNode.children[1].children[0]
      .innerText;
  console.log(taskSelected);

  const taskToDelete = selectedProject.tasks.find(
    (task) => task.title == taskSelected
  );
  selectedProject.tasks.splice(taskToDelete, 1)[0];
  render(selectedProject, selectedProject.name);
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
    render(selectedProject, selectedProject.name);
    console.log(selectedProject);
  }
});

// add listener to menu btns to display its tasks
document.addEventListener("click", (e) => {
  getClickedMenuBtn(e);
});

// add listener to delete task
document.addEventListener("click", (e) => {
  if (e.target.closest("#delete-task")) {
    deleteTask(e);
  }
});
