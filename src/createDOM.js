const createNewTask = function () {
  const mainContent = document.querySelector(".main-content");

  const newTask = document.createElement("div");
  newTask.classList.add("todo-item");
  mainContent.appendChild(newTask);

  const checkItem = document.createElement("div");
  checkItem.classList.add("check-item");
  newTask.appendChild(checkItem);

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  newTask.appendChild(textContainer);

  const titleText = document.createElement("p");
  textContainer.appendChild(titleText);

  const date = document.createElement("div");
  date.classList.add("time");
  textContainer.appendChild(date);
};

export default createNewTask;
