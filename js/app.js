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

// Dashboard chart (sample data for now; real data will come from PHP/MySQL)
const chartCanvas = document.getElementById("spending-chart");

if (chartCanvas) {
    new Chart(chartCanvas, {
        type: "doughnut",
        data: {
            labels: ["Food", "Rent", "Transportation", "Entertainment", "Other"],
            datasets: [{
                data: [350, 700, 120, 95, 110.5],
                backgroundColor: ["#336699", "#e67e22", "#2e7d32", "#8e44ad", "#95a5a6"]
            }]
        }
    });
}