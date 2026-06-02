let tasks =
JSON.parse(
    localStorage.getItem("tasks")
) || [];

const todoBody =
document.getElementById("todoBody");

function saveStorage() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

// CREATE & UPDATE
function saveTask() {

    const id =
    document.getElementById(
        "taskId"
    ).value;

    const task = {

        id: id || Date.now(),

        title:
        document.getElementById(
            "title"
        ).value,

        description:
        document.getElementById(
            "description"
        ).value,

        link:
        document.getElementById(
            "link"
        ).value,

        startDate:
        document.getElementById(
            "startDate"
        ).value,

        deadline:
        document.getElementById(
            "deadline"
        ).value,

        finishDate:
        document.getElementById(
            "finishDate"
        ).value,

        urgency:
        document.getElementById(
            "urgency"
        ).value,

        completed: false

    };

    if (id) {

        const index =
        tasks.findIndex(
            t => t.id == id
        );

        task.completed =
        tasks[index].completed;

        tasks[index] = task;

    } else {

        tasks.push(task);

    }

    saveStorage();

    renderTasks();

    clearForm();

}

// READ
function renderTasks() {

    todoBody.innerHTML = "";

    if (tasks.length === 0) {

        todoBody.innerHTML = `
            <tr>
                <td colspan="6">
                    No task found.
                </td>
            </tr>
        `;

        return;
    }

    tasks.forEach(task => {

        const row =
        document.createElement("tr");

        row.className =
        task.completed
            ? "completed"
            : "";

        row.innerHTML = `

            <td>
                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})">
            </td>

            <td>${task.title}</td>

            <td>
                ${task.description}
                <br>
                <a href="${task.link}" target="_blank">
                    Open
                </a>
            </td>

            <td>${task.deadline}</td>

            <td>
                <span class="tag ${task.urgency.toLowerCase()}">
                    ${task.urgency}
                </span>
            </td>

            <td>

                <button
                    class="action-btn edit-btn"
                    onclick="editTask(${task.id})">

                    Edit

                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteTask(${task.id})">

                    Delete

                </button>

            </td>

        `;

        todoBody.appendChild(row);

    });

}

// EDIT
function editTask(id) {

    const task =
    tasks.find(
        t => t.id == id
    );

    document.getElementById("taskId").value =
    task.id;

    document.getElementById("title").value =
    task.title;

    document.getElementById("description").value =
    task.description;

    document.getElementById("link").value =
    task.link;

    document.getElementById("startDate").value =
    task.startDate;

    document.getElementById("deadline").value =
    task.deadline;

    document.getElementById("finishDate").value =
    task.finishDate;

    document.getElementById("urgency").value =
    task.urgency;

}

// DELETE
function deleteTask(id) {

    if (confirm("Delete Task?")) {

        tasks =
        tasks.filter(
            t => t.id != id
        );

        saveStorage();

        renderTasks();

    }

}

// CHECKLIST
function toggleTask(id) {

    const task =
    task.completed =
    tasks[index].completed;

    tasks[index] = task;

    saveStorage();

    renderTasks();

}

// CLEAR FORM
function clearForm() {

    document.getElementById(
        "taskId"
    ).value = "";

    document
    .querySelectorAll(
        "input, textarea"
    )
    .forEach(el => {

        if (el.type !== "hidden") {

            el.value = "";

        }

    });

}

// SORTING
document
.getElementById("sortTodo")
.addEventListener(
    "change",
    function () {

        const value = this.value;

        if (value === "title") {

            tasks.sort(
                (a, b) =>
                a.title.localeCompare(
                    b.title
                )
            );

        }

        if (value === "deadline") {

            tasks.sort(
                (a, b) =>
                new Date(a.deadline)
                -
                new Date(b.deadline)
            );

        }

        if (value === "urgency") {

            const priority = {
                High: 1,
                Medium: 2,
                Low: 3
            };

            tasks.sort(
                (a, b) =>
                priority[a.urgency]
                -
                priority[b.urgency]
            );

        }

        renderTasks();

    }
);

renderTasks();