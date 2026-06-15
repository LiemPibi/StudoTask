function getUsers() {
    return JSON.parse(localStorage.getItem("studoUsers")) || [];
}

function saveUsers(users) {
    localStorage.setItem("studoUsers", JSON.stringify(users));
}

function migrateSingleUser() {
    const legacyUser = JSON.parse(localStorage.getItem("studoUser"));
    const users = getUsers();

    if (legacyUser && legacyUser.username && !users.some(user => user.username === legacyUser.username)) {
        users.push(legacyUser);
        saveUsers(users);
    }
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("studoUser", JSON.stringify(user));
}

migrateSingleUser();

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("signupUsername").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const users = getUsers();

        if (users.some(user => user.username === username)) {
            alert("Account already exists. Please log in.");
            return;
        }

        const user = {
            username,
            password
        };

        users.push(user);
        saveUsers(users);
        setCurrentUser(user);

        alert("Account created successfully!");
        location.href = "dashboard.html";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const users = getUsers();

        const user = users.find(
            item => item.username === username && item.password === password
        );

        if (user) {
            setCurrentUser(user);
            location.href = "dashboard.html";
            return;
        }

        alert("Username or password is wrong.");
    });
}
