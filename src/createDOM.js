const formContainer = document.querySelector(".form-container");
const mainContent = document.querySelector(".main-content");

export const createArrayTask = function (array) {
  console.log("this works");
  array.forEach((item) => {
    console.log(item.title);
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

export const displayDescription = function (element) {
  /* const descriptionContainer = document.querySelector(".description-container"); */
  /* const currentElement = target.currentTarget.childNodes[3];*/
  if (element.children[1].style.display == "flex") {
    element.children[1].style.display = "none";
    console.log("this works 2");
  } else {
    element.children[1].style.display = "flex";
    console.log(element.children[1]);
  }
};

export const displayTaskForm = function () {
  formContainer.style.display = "flex";
};

export const hideTaskForm = function () {
  formContainer.style.display = "none";
};

export default createNewDOMTask;
