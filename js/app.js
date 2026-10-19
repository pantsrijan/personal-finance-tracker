// Signup form: make sure both passwords match before submitting
const signupForm = document.getElementById("signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;
        const errorBox = document.getElementById("form-error");

        if (password !== confirm) {
            event.preventDefault();
            errorBox.textContent = "Passwords do not match.";
        } else {
            errorBox.textContent = "";
        }
    });
}