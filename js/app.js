import { state } from "./state.js";

import { createTask, deleteTask, toggleTask, sortByPriority } from "./tasks.js";

import { saveTasks } from "./storage.js";

import { filterTasks } from "./filters.js";

import { renderTasks } from "./ui.js";


// ELEMENTOS
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const priority = document.getElementById("priority");
const filters = document.querySelectorAll("[data-filter]");


// INIT
updateUI();


// CREATE
form.addEventListener("submit", e => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  state.tasks.push(createTask(text, priority.value));

  sync();

  form.reset();
});


// ACTIONS
document.addEventListener("click", e => {

  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("delete")) {
    state.tasks = deleteTask(state.tasks, id);
    sync();
  }

  if (e.target.classList.contains("toggle")) {
    state.tasks = toggleTask(state.tasks, id);
    sync();
  }
});


// FILTERS
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    state.filter = btn.dataset.filter;
    updateUI();
  });
});


// CORE FUNCTIONS
function updateUI() {

  const sorted = sortByPriority(state.tasks);

  const filtered = filterTasks(sorted, state.filter);

  renderTasks(filtered);
}

function sync() {
  saveTasks(state.tasks);
  updateUI();
}