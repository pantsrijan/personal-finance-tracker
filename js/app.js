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

// Transactions page: add rows and filter the table (client side only for now)
const addForm = document.getElementById("add-form");
const tableBody = document.querySelector("#transactions-table tbody");
const filterCategory = document.getElementById("filter-category");
const filterFrom = document.getElementById("filter-from");
const filterTo = document.getElementById("filter-to");

function applyFilters() {
    const category = filterCategory.value;
    const from = filterFrom.value;
    const to = filterTo.value;

    for (const row of tableBody.rows) {
        const rowDate = row.cells[0].textContent;
        const rowCategory = row.cells[2].textContent;
        let show = true;

        if (category !== "all" && rowCategory !== category) show = false;
        if (from && rowDate < from) show = false;
        if (to && rowDate > to) show = false;

        row.style.display = show ? "" : "none";
    }
}

if (addForm && tableBody) {
    filterCategory.addEventListener("change", applyFilters);
    filterFrom.addEventListener("change", applyFilters);
    filterTo.addEventListener("change", applyFilters);

    addForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const type = document.getElementById("type").value;
        const category = document.getElementById("category").value;
        const amount = Number(document.getElementById("amount").value);
        const date = document.getElementById("date").value;
        const description = document.getElementById("description").value;

        const row = tableBody.insertRow(0);
        row.insertCell().textContent = date;
        row.insertCell().textContent = type === "income" ? "Income" : "Expense";
        row.insertCell().textContent = category;
        row.insertCell().textContent = description;

        const amountCell = row.insertCell();
        amountCell.textContent = "$" + amount.toFixed(2);
        amountCell.className = type;

        addForm.reset();
        applyFilters();
    });
}