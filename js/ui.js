export function renderTasks(tasks) {

  const list = document.getElementById("task-list");

  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = "<p>No hay tareas</p>";
    return;
  }

  tasks.forEach(task => {

    const li = document.createElement("li");

    li.classList.add(`priority-${task.priority}`);

    li.innerHTML = `
      <span class="${task.completed ? "done" : ""}">
        ${task.text}
      </span>

      <div>
        <button class="toggle" data-id="${task.id}">✔</button>
        <button class="delete" data-id="${task.id}">🗑</button>
      </div>
    `;

    list.appendChild(li);
  });
}