// Profile modal helpers + saveProfile
// Stored user is in localStorage key: "studoUser".

function openProfile() {
    const modal = document.getElementById("profileModal");
    if (!modal) return;

    const user = JSON.parse(localStorage.getItem("studoUser")) || {};

    const usernameInput = document.getElementById("profileUsername");
    const passwordInput = document.getElementById("profilePassword");

    if (usernameInput) usernameInput.value = user.username || "";
    if (passwordInput) passwordInput.value = "";

    modal.style.display = "flex";
}

function closeProfile() {
    const modal = document.getElementById("profileModal");
    if (!modal) return;
    modal.style.display = "none";
}

function saveProfile(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    const username = document.getElementById("profileUsername").value.trim();
    const newPassword = document.getElementById("profilePassword").value;

    if (!username || !newPassword) {
        alert("Username and password are required");
        return false;
    }

    const currentUser = JSON.parse(localStorage.getItem("studoUser")) || {};

    // Keep user shape compatible with auth.js
    const updatedUser = {
        username,
        password: newPassword,
    };

    localStorage.setItem("studoUser", JSON.stringify(updatedUser));

    alert("Profile updated successfully!");

    closeProfile();

    // Update welcome name if dashboard is open
    const welcome = document.getElementById("welcomeUser");
    if (welcome) welcome.innerText = `Welcome, ${updatedUser.username}`;

    return false;
}

