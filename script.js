const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const forgotPassword = document.getElementById("forgotPassword");


// ================= PASSWORD SHOW / HIDE =================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});


// ================= LOGIN =================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;
    }

    alert("Login successful!");

});


// ================= FORGOT PASSWORD =================

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Password reset option will be available soon.");

});