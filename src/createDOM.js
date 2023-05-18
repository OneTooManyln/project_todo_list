const createNewDOMTask = function () {
  const mainContent = document.querySelector(".main-content");

  const newTask = document.createElement("div");
  const checkItem = document.createElement("div");
  const textContainer = document.createElement("div");
  const titleText = document.createElement("p");
  const date = document.createElement("div");

  newTask.classList.add("todo-item");
  checkItem.classList.add("check-item");
  textContainer.classList.add("text-container");
  date.classList.add("time");

  mainContent.appendChild(newTask);
  newTask.appendChild(checkItem);
  newTask.appendChild(textContainer);
  textContainer.appendChild(titleText);
  textContainer.appendChild(date);
};

export default createNewDOMTask;
