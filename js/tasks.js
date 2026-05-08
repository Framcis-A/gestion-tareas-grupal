export function createTask(text, priority) {
  return {
    id: Date.now(),
    text,
    priority,
    completed: false,
    createdAt: new Date()
  };
}

export function deleteTask(tasks, id) {
  return tasks.filter(t => t.id !== id);
}

export function toggleTask(tasks, id) {
  return tasks.map(t =>
    t.id === id
      ? { ...t, completed: !t.completed }
      : t
  );
}

export function sortByPriority(tasks) {
  const order = { Alta: 1, Media: 2, Baja: 3 };

  return [...tasks].sort(
    (a, b) => order[a.priority] - order[b.priority]
  );
}