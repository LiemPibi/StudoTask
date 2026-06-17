const user =
JSON.parse(
    localStorage.getItem(
        "studoUser"
    )
);

if(user){

    document.getElementById(
        "welcomeUser"
    ).innerText =

    `Welcome, ${user.username}`;

}

const tasks =
JSON.parse(
    localStorage.getItem(
        "tasks"
    )
) || [];

const totalTasks =
tasks.length;

const completedTasks =
tasks.filter(
    task => task.completed
).length;

const pendingTasks =
totalTasks - completedTasks;

document.getElementById(
    "totalTasks"
).innerText =
totalTasks;

document.getElementById(
    "completedTasks"
).innerText =
completedTasks;

document.getElementById(
    "pendingTasks"
).innerText =
pendingTasks;

let progress = 0;

if(totalTasks > 0){

    progress =
    Math.round(
        (completedTasks /
        totalTasks) * 100
    );

}

document.getElementById(
    "progressFill"
).style.width =
progress + "%";

function logout(){

    localStorage.removeItem(
        "studoUser"
    );

    location.href =
    "login.html";

}

function loadDashboard(){

    const tasks =
    JSON.parse(
        localStorage.getItem(
            "tasks"
        )
    ) || [];

    const total =
    tasks.length;

    const completed =
    tasks.filter(
        t => t.completed
    ).length;

    const pending =
    total - completed;

    document.getElementById(
        "totalTasks"
    ).innerText = total;

    document.getElementById(
        "completedTasks"
    ).innerText = completed;

    document.getElementById(
        "pendingTasks"
    ).innerText = pending;

}
