let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const todoBody = document.getElementById("todoBody");
const sortTodo = document.getElementById("sortTodo");
const taskForm = document.getElementById("taskForm");

function escapeHTML(value) {
    return String(value || "").replace(/[&<>'"]/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }[character]));
}

function saveStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

function saveTask() {
    const id = getInputValue("taskId");
    const title = getInputValue("title");
    const deadline = getInputValue("deadline");

    if (!title || !deadline) {
        alert("Title and deadline are required.");
        return;
    }

    const existingTask = tasks.find(task => String(task.id) === id);
    const task = {
        id: id || String(Date.now()),
        title,
        description: getInputValue("description"),
        link: getInputValue("link"),
        startDate: getInputValue("startDate"),
        deadline,
        finishDate: getInputValue("finishDate"),
        urgency: getInputValue("urgency"),
        completed: existingTask ? existingTask.completed : false
    };

    if (existingTask) {
        tasks = tasks.map(item => String(item.id) === id ? task : item);
    } else {
        tasks.push(task);
    }

    saveStorage();
    renderTasks();
    clearForm();
}

function renderTasks() {
    todoBody.innerHTML = "";

    if (tasks.length === 0) {
        todoBody.innerHTML = `
            <tr>
                <td colspan="6">No task found.</td>
            </tr>
        `;
        return;
    }

    tasks.forEach(task => {
        const row = document.createElement("tr");
        row.className = task.completed ? "completed" : "";
        const safeLink = escapeHTML(task.link);
        const linkMarkup = task.link
            ? `<a href="${safeLink}" target="_blank" rel="noopener noreferrer">Open</a>`
            : "-";

        row.innerHTML = `
            <td>
                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask('${task.id}')"
                    aria-label="Mark ${escapeHTML(task.title)} as completed">
            </td>
            <td>${escapeHTML(task.title)}</td>
            <td>${escapeHTML(task.description)}<br>${linkMarkup}</td>
            <td>${escapeHTML(task.deadline)}</td>
            <td><span class="tag ${escapeHTML(task.urgency.toLowerCase())}">${escapeHTML(task.urgency)}</span></td>
            <td>
                <button class="action-btn edit-btn" onclick="editTask('${task.id}')">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
            </td>
        `;

        todoBody.appendChild(row);
    });
}

function editTask(id) {
    const task = tasks.find(item => String(item.id) === String(id));

    if (!task) {
        alert("Task not found.");
        return;
    }

    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("link").value = task.link;
    document.getElementById("startDate").value = task.startDate;
    document.getElementById("deadline").value = task.deadline;
    document.getElementById("finishDate").value = task.finishDate;
    document.getElementById("urgency").value = task.urgency;
}

function deleteTask(id) {
    if (confirm("Delete Task?")) {
        tasks = tasks.filter(task => String(task.id) !== String(id));
        saveStorage();
        renderTasks();
    }
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (String(task.id) === String(id)) {
            return {
                ...task,
                completed: !task.completed,
                finishDate: !task.completed ? new Date().toISOString().slice(0, 10) : ""
            };
        }

        return task;
    });

    saveStorage();
    renderTasks();
}

function clearForm() {
    if (taskForm) {
        taskForm.reset();
    }

    document.getElementById("taskId").value = "";
}

function sortTasks(value) {
    if (value === "title") {
        tasks.sort((a, b) => a.title.localeCompare(b.title));
    }

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

if (sortTodo) {
    sortTodo.addEventListener("change", function () {
        sortTasks(this.value);
    });
}

renderTasks();
