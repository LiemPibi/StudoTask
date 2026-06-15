const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const detailContent = document.getElementById("detailContent");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

let currentDate = new Date();
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function escapeHTML(value) {
    return String(value || "").replace(/[&<>'"]/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }[character]));
}

function formatDate(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function renderCalendar() {
    calendar.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.innerText = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.className = "calendar-empty";
        calendar.appendChild(empty);
    }

    for (let day = 1; day <= lastDate; day++) {
        const cell = document.createElement("button");
        const dateString = formatDate(year, month, day);
        const taskList = tasks.filter(task => task.deadline === dateString);

        cell.type = "button";
        cell.className = "calendar-day";
        cell.innerHTML = `<div class="day-number">${day}</div>`;

        taskList.forEach(task => {
            const taskTag = document.createElement("div");
            taskTag.className = `deadline-tag ${task.urgency.toLowerCase()}-color`;
            taskTag.innerText = task.title;
            cell.appendChild(taskTag);
        });

        cell.addEventListener("click", () => showDetails(dateString));
        calendar.appendChild(cell);
    }
}

function showDetails(date) {
    const dateTasks = tasks.filter(task => task.deadline === date);

    if (dateTasks.length === 0) {
        detailContent.innerHTML = `<p>No task on ${escapeHTML(date)}</p>`;
        return;
    }

    detailContent.innerHTML = dateTasks.map(task => {
        const linkMarkup = task.link
            ? `<a href="${escapeHTML(task.link)}" target="_blank" rel="noopener noreferrer">Open Link</a>`
            : "";

        return `
            <div class="task-detail-card">
                <h4>${escapeHTML(task.title)}</h4>
                <p>${escapeHTML(task.description)}</p>
                <p>Deadline: ${escapeHTML(task.deadline)}</p>
                <p>Urgency: ${escapeHTML(task.urgency)}</p>
                <p>Status: ${task.completed ? "Completed" : "Pending"}</p>
                ${linkMarkup}
            </div>
        `;
    }).join("");
}

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
