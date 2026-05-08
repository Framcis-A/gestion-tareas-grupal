export function filterTasks(tasks, filter) {
  switch (filter) {
    case "pending":
      return tasks.filter(task => !task.completed);

    case "completed":
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
}