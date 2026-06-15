function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function loadDashboard() {
    const user = getCurrentUser();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    if (user) {
        document.getElementById("welcomeUser").innerText = `Welcome, ${user.username}`;
    }

    document.getElementById("totalTasks").innerText = totalTasks;
    document.getElementById("completedTasks").innerText = completedTasks;
    document.getElementById("pendingTasks").innerText = pendingTasks;
    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById("progressText").innerText = `${progress}% Completed`;
}

function logout() {
    localStorage.removeItem("currentUser");
    location.href = "login.html";
}

loadDashboard();
