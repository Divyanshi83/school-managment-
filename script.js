const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", function () {

    const isHidden = passwordInput.type === "password";

    if (isHidden) {

        // Show password
        passwordInput.type = "text";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

        // Open eye
        eyeIcon.innerHTML = `
            <path
                d="M2.5 12C4.4 8.1 7.7 6 12 6C16.3 6 19.6 8.1 21.5 12C19.6 15.9 16.3 18 12 18C7.7 18 4.4 15.9 2.5 12Z"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>

            <circle
                cx="12"
                cy="12"
                r="2.5"
                stroke="currentColor"
                stroke-width="1.8"/>
        `;

    } else {

        // Hide password
        passwordInput.type = "password";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

        // Closed eye
        eyeIcon.innerHTML = `
            <path
                d="M3 3L21 21"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"/>

            <path
                d="M10.6 10.6C10.2 11 10 11.5 10 12C10 13.1 10.9 14 12 14C12.5 14 13 13.8 13.4 13.4"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"/>

            <path
                d="M9.9 5.3C10.6 5.1 11.3 5 12 5C16.3 5 19.6 7.2 21.5 12C20.8 13.7 19.8 15 18.5 16"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>

            <path
                d="M6.2 6.2C4.7 7.5 3.6 9.4 2.5 12C4.4 16 7.7 18 12 18C13.4 18 14.7 17.8 15.8 17.3"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        `;
    }
});