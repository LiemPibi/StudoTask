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

            const username =
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
                user.username === username &&
                user.password === password
        ){

            // BUG FIX: was saving to "currentUser" but dashboard.js
            // reads "studoUser", so welcome name never appeared.
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
