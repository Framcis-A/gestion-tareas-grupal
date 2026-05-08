import { state } from "./state.js";
import { createTask, deleteTask, toggleTask, sortTasks } from "./tasks.js";
import { saveTasks } from "./storage.js";
import { filterTasks } from "./filters.js";
import { renderTasks } from "./ui.js";
import { updateStats } from "./stats.js";
import { toggleTheme } from "./theme.js";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const priority = document.getElementById("priority");
const search = document.getElementById("search");

document.getElementById("theme-toggle")
  .addEventListener("click", toggleTheme);

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!input.value.trim()) return;

  state.tasks.push(createTask(input.value, priority.value));

  sync();
  form.reset();
});

document.addEventListener("click", e => {

  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("delete")) {
    state.tasks = deleteTask(state.tasks, id);
  }

  if (e.target.classList.contains("toggle")) {
    state.tasks = toggleTask(state.tasks, id);
  }

  sync();
});

search.addEventListener("input", e => {
  state.search = e.target.value.toLowerCase();
  updateUI();
});

function sync() {
  saveTasks(state.tasks);
  updateUI();
}

function updateUI() {

  let tasks = sortTasks(state.tasks);

  tasks = filterTasks(tasks, state.filter);

  if (state.search) {
    tasks = tasks.filter(t =>
      t.text.toLowerCase().includes(state.search)
    );
  }

  renderTasks(tasks);
  updateStats(state.tasks);
}

updateUI();