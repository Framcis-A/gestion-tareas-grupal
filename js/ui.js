export function renderTasks(tasks) {
  const container = document.getElementById("task-list");
  container.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "done" : ""}">
        ${task.text} - ${task.priority}
      </span>

      <div>
        <button class="toggle" data-id="${task.id}">
          ${task.completed ? "↩" : "✔"}
        </button>

        <button class="delete" data-id="${task.id}">
          🗑
        </button>
      </div>
    `;

    container.appendChild(li);
  });
}