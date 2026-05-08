import { createTask } from "./tasks.js";

import { saveTasks, getTasks } from "./storage.js";

import { renderTasks } from "./ui.js";

import { filterTasks } from "./filters.js";


// ESTADO GLOBAL
let tasks = getTasks();

let currentFilter = "all";


// ELEMENTOS
const form = document.getElementById("task-form");

const input = document.getElementById("task-input");

const priority = document.getElementById("priority");

const filterButtons =
  document.querySelectorAll("[data-filter]");


// INICIO
renderTasks(tasks);


// AGREGAR TAREA
form.addEventListener("submit", e => {

  e.preventDefault();

  const newTask = createTask(
    input.value,
    priority.value
  );

  tasks.push(newTask);

  saveTasks(tasks);

  updateView();

  form.reset();

});


// ELIMINAR O COMPLETAR
document.addEventListener("click", e => {

  // ELIMINAR
  if (e.target.classList.contains("delete-btn")) {

    const id = Number(e.target.dataset.id);

    tasks = tasks.filter(task => task.id !== id);

    saveTasks(tasks);

    updateView();

  }

  // TOGGLE
  if (e.target.classList.contains("toggle-btn")) {

    const id = Number(e.target.dataset.id);

    tasks = tasks.map(task => {

      if (task.id === id) {

        return {
          ...task,
          completed: !task.completed
        };

      }

      return task;

    });

    saveTasks(tasks);

    updateView();

  }

});


// FILTROS
filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    currentFilter =
      button.dataset.filter;

    updateView();

  });

});


// ACTUALIZAR VISTA
function updateView() {

  const filtered =
    filterTasks(tasks, currentFilter);

  renderTasks(filtered);

}