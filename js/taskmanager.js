let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskBody = document.getElementById("taskBody");
const sortSelect = document.getElementById("sortSelect");

function escapeHTML(value) {
    return String(value || "").replace(/[&<>'"]/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }[character]));
}

function renderTasks() {
    taskBody.innerHTML = "";

    if (tasks.length === 0) {
        taskBody.innerHTML = `
            <tr>
                <td colspan="5">No task available. Click + to add task.</td>
            </tr>
        `;
        return;
    }

    tasks.forEach(task => {
        const row = document.createElement("tr");
        row.className = task.completed ? "completed" : "";
        row.innerHTML = `
            <td>${escapeHTML(task.title)}</td>
            <td>${escapeHTML(task.deadline)}</td>
            <td><span class="tag ${escapeHTML(task.urgency.toLowerCase())}">${escapeHTML(task.urgency)}</span></td>
            <td>${task.completed ? "Completed" : "Pending"}</td>
            <td>${escapeHTML(task.description)}</td>
        `;
        taskBody.appendChild(row);
    });
}

function sortTasks(value) {
    if (value === "deadline") {
        tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }

    if (value === "urgency") {
        const priority = {
            High: 1,
            Medium: 2,
            Low: 3
        };

        tasks.sort((a, b) => priority[a.urgency] - priority[b.urgency]);
    }

    renderTasks();
}

if (sortSelect) {
    sortSelect.addEventListener("change", function () {
        sortTasks(this.value);
    });
}

sortTasks(sortSelect ? sortSelect.value : "deadline");
