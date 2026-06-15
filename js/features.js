const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const total = tasks.length;
const completed = tasks.filter(task => task.completed).length;
const pending = total - completed;
const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

document.getElementById("totalTask").innerText = total;
document.getElementById("completedTask").innerText = completed;
document.getElementById("pendingTask").innerText = pending;
document.getElementById("progressFill").style.width = `${progress}%`;
document.getElementById("progressText").innerText = `${progress}% Completed`;
