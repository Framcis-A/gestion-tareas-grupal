export function updateStats(tasks) {

  const total = tasks.length;

  const completed = tasks.filter(t => t.completed).length;

  const urgent = tasks.filter(t => t.priority === "Alta").length;

  document.getElementById("total").textContent = total;

  document.getElementById("progress").textContent =
    total ? Math.round((completed / total) * 100) + "%" : "0%";

  document.getElementById("urgent").textContent = urgent;
}