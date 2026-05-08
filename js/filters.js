export function filterTasks(tasks, filter) {
  switch (filter) {

    case "pending":
      return tasks.filter(t => !t.completed);

    case "completed":
      return tasks.filter(t => t.completed);

    default:
      return tasks;
  }
}