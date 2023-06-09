const formContainer = document.querySelector(".task-form-container");
const projectFormContainer = document.querySelector(".project-form-container");
const mainContent = document.querySelector(".main-content");

export const createArrayTask = function (array) {
  array.forEach((item) => {
    /* console.log(item.title); */
    createNewDOMTask(
      item.title,
      item.description,
      item.date,
      item.type,
      item.completed
    );
  });
};

const createNewDOMTask = function (title, description, date, type, completed) {
  const newTask = document.createElement("div");
  const topContainer = document.createElement("div");
  const descriptionContainer = document.createElement("div");
  const checkItem = document.createElement("div");
  const textContainer = document.createElement("div");
  const titleText = document.createElement("p");
  const time = document.createElement("div");
  const showDescriptionBtn = document.createElement("button");
  const deleteTask = document.createElement("span");

  newTask.classList.add("todo-item");
  topContainer.classList.add("top-item-container");
  descriptionContainer.classList.add("description-container");
  checkItem.classList.add("check-item");
  textContainer.classList.add("text-container");
  time.classList.add("time");
  showDescriptionBtn.classList.add("show-description-btn");
  deleteTask.classList.add("material-symbols-outlined");
  deleteTask.setAttribute("id", "delete-task");

  titleText.innerText = title;
  descriptionContainer.innerText = description;
  time.innerText = date;
  showDescriptionBtn.innerText = "Description";
  deleteTask.innerText = "delete";

  mainContent.appendChild(newTask);
  newTask.appendChild(topContainer);
  newTask.appendChild(descriptionContainer);
  topContainer.appendChild(checkItem);
  topContainer.appendChild(textContainer);
  topContainer.appendChild(showDescriptionBtn);
  topContainer.appendChild(deleteTask);
  textContainer.appendChild(titleText);
  textContainer.appendChild(time);
};

export const displayDescription = function (element, event) {
  /* const descriptionContainer = document.querySelector(".description-container"); */
  /* const currentElement = target.currentTarget.childNodes[3];*/
  if (element.parentNode.parentNode.childNodes[1].style.display == "flex") {
    element.parentNode.parentNode.childNodes[1].style.display = "none";
    /* console.log("this works 2"); */
  } else {
    element.parentNode.parentNode.childNodes[1].style.display = "flex";
    console.log(element.parentNode.parentNode.childNodes[1]);
  }
  console.log(element.parentNode.parentNode.childNodes[1]);
};

export const createArrayProject = function (array) {
  const projectUL = document.querySelector(".projects-list ul");
  array.forEach((item) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");
    projectItem.dataset.projectId = item.id;
    projectItem.innerText = item.name;
    projectUL.appendChild(projectItem);

    /* console.log(item.name); */
  });
};

export const renderTitle = function (title) {
  const mainContentTitle = document.querySelector(".main-content-title");
  mainContentTitle.textContent = title;
};

export const displayTaskForm = function () {
  formContainer.style.display = "flex";
};

export const hideTaskForm = function () {
  formContainer.style.display = "none";
};

export const displayProjectForm = function () {
  projectFormContainer.style.display = "flex";
};

export default createNewDOMTask;

export const hideProjectForm = function () {
  projectFormContainer.style.display = "none";
};
