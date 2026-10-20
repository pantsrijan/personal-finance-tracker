<?php
// Sample data for now; later this will come from MySQL
$transactions = [
    ['type' => 'income',  'category' => 'Salary',         'amount' => 2000.00],
    ['type' => 'income',  'category' => 'Freelance',      'amount' => 400.00],
    ['type' => 'expense', 'category' => 'Rent',           'amount' => 700.00],
    ['type' => 'expense', 'category' => 'Food',           'amount' => 200.00],
    ['type' => 'expense', 'category' => 'Food',           'amount' => 150.00],
    ['type' => 'expense', 'category' => 'Transportation', 'amount' => 120.00],
    ['type' => 'expense', 'category' => 'Entertainment',  'amount' => 95.00],
    ['type' => 'expense', 'category' => 'Other',          'amount' => 110.50],
];

$totalIncome = 0;
$totalExpenses = 0;
$byCategory = [];

foreach ($transactions as $t) {
    if ($t['type'] === 'income') {
        $totalIncome += $t['amount'];
    } else {
        $totalExpenses += $t['amount'];
        $byCategory[$t['category']] = ($byCategory[$t['category']] ?? 0) + $t['amount'];
    }
}

$balance = $totalIncome - $totalExpenses;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Monthly summary for Personal Finance Tracker">
  <title>Dashboard - Personal Finance Tracker</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Personal Finance Tracker</h1>
    <nav>
      <a href="dashboard.php">Dashboard</a>
      <a href="transactions.html">Transactions</a>
      <a href="login.html">Log out</a>
    </nav>
  </header>

  <main class="wide">
    <h2>October Summary</h2>

    <div class="cards">
      <div class="card">
        <h3>Total Income</h3>
        <p class="amount income">$<?php echo number_format($totalIncome, 2); ?></p>
      </div>
      <div class="card">
        <h3>Total Expenses</h3>
        <p class="amount expense">$<?php echo number_format($totalExpenses, 2); ?></p>
      </div>
      <div class="card">
        <h3>Balance</h3>
        <p class="amount">$<?php echo number_format($balance, 2); ?></p>
      </div>
    </div>

    <h3>Spending by Category</h3>
    <div class="chart-box">
      <canvas id="spending-chart"></canvas>
    </div>
  </main>

  <footer>
    <p>&copy; 2026 Srijan Pant</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script>
    const chartLabels = <?php echo json_encode(array_keys($byCategory)); ?>;
    const chartValues = <?php echo json_encode(array_values($byCategory)); ?>;
  </script>
  <script src="js/app.js"></script>
</body>
</html>