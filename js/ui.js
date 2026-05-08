export function renderTasks(tasks) {

  const taskList = document.getElementById("task-list");

  taskList.innerHTML = "";

  tasks.forEach(task => {

    const li = document.createElement("li");

    li.innerHTML = `
    
      <span class="${task.completed ? "done" : ""}">
        ${task.text} - (${task.priority})
      </span>

      <div>

        <button class="toggle-btn" data-id="${task.id}">
          ${task.completed ? "↩" : "✔"}
        </button>

        <button class="delete-btn" data-id="${task.id}">
          🗑
        </button>

      </div>

    `;

    taskList.appendChild(li);

  });

}