const KEY = "tasks";

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}