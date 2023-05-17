import createNewTask from "./createDOM";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewTask();
});
