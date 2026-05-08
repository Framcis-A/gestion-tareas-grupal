export function updateStats(tasks) {
  const total = tasks.length;

  const completed = tasks.filter(t => t.completed).length;

  const urgent = tasks.filter(t => t.priority === "Alta").length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("total").textContent = total;
  document.getElementById("progress").textContent = `${progress}%`;
  document.getElementById("urgent").textContent = urgent;
}