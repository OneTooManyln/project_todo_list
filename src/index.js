import createNewDOMTask from "./createDOM";
import task from "./createTask";
import { taskArray } from "./createTask";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#task-title");
  const descriptionInput = document.querySelector("#task-description");

  const newTask = new task(titleInput.value, descriptionInput.value);
  taskArray.push(newTask);
  console.table(taskArray);

  createNewDOMTask(titleInput.value, descriptionInput.value);
});
