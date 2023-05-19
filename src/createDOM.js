const formContainer = document.querySelector(".form-container");
const mainContent = document.querySelector(".main-content");

export const createArrayTask = function (array) {
  console.log("this works");
  array.forEach((item) => {
    console.log(item.title);
    createNewDOMTask(item.title, item.description);
  });
};

const createNewDOMTask = function (title, description, date) {
  const newTask = document.createElement("div");
  const topContainer = document.createElement("div");
  const descriptionContainer = document.createElement("div");
  const checkItem = document.createElement("div");
  const textContainer = document.createElement("div");
  const titleText = document.createElement("p");
  const time = document.createElement("div");

  newTask.classList.add("todo-item");
  topContainer.classList.add("top-item-container");
  descriptionContainer.classList.add("description-container");
  checkItem.classList.add("check-item");
  textContainer.classList.add("text-container");
  time.classList.add("time");

  titleText.innerText = title;
  descriptionContainer.innerText = description;
  time.innerText = date;

  mainContent.appendChild(newTask);
  newTask.appendChild(topContainer);
  newTask.appendChild(descriptionContainer);
  topContainer.appendChild(checkItem);
  topContainer.appendChild(textContainer);
  textContainer.appendChild(titleText);
  textContainer.appendChild(time);
};

export const displayDescription = function (target) {
  /* const descriptionContainer = document.querySelector(".description-container"); */
  const currentElement = target.currentTarget.childNodes[3];
  if (currentElement.style.display != "none") {
    currentElement.style.display = "none";
    console.log("this works");
  } else currentElement.style.display = "flex";
  console.log(target.currentTarget.childNodes[3]);
};

export const displayTaskForm = function () {
  formContainer.style.display = "flex";
};

export const hideTaskForm = function () {
  formContainer.style.display = "none";
};

export default createNewDOMTask;
