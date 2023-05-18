import createNewDOMTask from "./createDOM";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewDOMTask();
});
