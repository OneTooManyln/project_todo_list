const createNewTask = function () {
  const mainContent = document.querySelector(".main-content");

  const newTask = document.createElement("div");
  newTask.classList.add("todo-item");
  mainContent.appendChild(newTask);
};

export default createNewTask;
