// Ensure dummy admin exists (so you can try without signing up)
(function ensureDummyAdmin() {
    try {
        const existingRaw = localStorage.getItem("studoUser");
        if (existingRaw) return;

        const dummyAdmin = {
            username: "admin",
            email: "admin@studotask.app",
            password: "password",
        };

        localStorage.setItem("studoUser", JSON.stringify(dummyAdmin));
    } catch (err) {
        // ignore
    }
})();

// SIGN IN

const signupForm =
document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const username =
            document.getElementById(
                "signupUsername"
            ).value;

            const password =
            document.getElementById(
                "signupPassword"
            ).value;

            const user = {
                username,
                password
            };

            localStorage.setItem(
                "studoUser",
                JSON.stringify(user)
            );

            alert(
                "Account created successfully!"
            );

            location.href =
            "login.html";
        }
    );
}

// LOGIN

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const usernameOrEmail =
            document.getElementById(
                "loginUsername"
            ).value;

            const password =
            document.getElementById(
                "loginPassword"
            ).value;

            const user =
            JSON.parse(
                localStorage.getItem(
                    "studoUser"
                )
            );

            if(
                user &&
                (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
                user.password === password
        ){

            // Save user (dashboard reads "studoUser")
            localStorage.setItem(
                "studoUser",
                JSON.stringify(user)
            );

            location.href =
            "dashboard.html";

            }else{

                alert(
                    "Username or Password Wrong"
                );
            }
        }
    );
}
