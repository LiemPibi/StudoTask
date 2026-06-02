// Ambil user yang login

const user =
JSON.parse(
    localStorage.getItem(
        "studoUser"
    )
);

// Welcome Text

if(user){

    document.getElementById(
        "welcomeUser"
    ).innerText =

    `Welcome, ${user.username}`;

}

// Ambil semua task

const tasks =
JSON.parse(
    localStorage.getItem(
        "tasks"
    )
) || [];

// Statistik

const totalTasks =
tasks.length;

const completedTasks =
tasks.filter(
    task => task.completed
).length;

const pendingTasks =
totalTasks - completedTasks;

// Update UI

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

// Progress

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

//tombol logout
function logout(){

    localStorage.removeItem(
        "studoUser"
    );

    location.href =
    "login.html";

}

// Load Dashboard Data
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