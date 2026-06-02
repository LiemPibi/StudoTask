let tasks =
JSON.parse(
    localStorage.getItem(
        "tasks"
    )
) || [];

const total =
tasks.length;

const completed =
tasks.filter(
    task =>
    task.completed
).length;

const pending =
total - completed;

document.getElementById(
    "totalTask"
).innerText = total;

document.getElementById(
    "completedTask"
).innerText = completed;

document.getElementById(
    "pendingTask"
).innerText = pending;

let progress = 0;

if(total > 0){

    progress =
    Math.round(
        completed / total * 100
    );

}

document.getElementById(
    "progressFill"
).style.width =
progress + "%";

document.getElementById(
    "progressText"
).innerText =
progress + "% Completed";