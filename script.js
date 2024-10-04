// Initial account balance
let balance = 1000;

// Function to update the balance displayed on the screen
function updateBalance() {
  document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

// Deposit money
function deposit() {
  const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
  
  if (depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
    document.getElementById('message').textContent = 'Transaction Successfull'; 
  } else {
    document.getElementById('message').textContent = 'Please enter a valid deposit amount.';
  }

  // Clear the input field
  document.getElementById('deposit-amount').value = '';
}

// Withdraw money
function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  
  if (withdrawAmount > 0 && withdrawAmount <= balance) {
    balance -= withdrawAmount;
    updateBalance();
    document.getElementById('message').textContent = 'Transaction Successfull'; 
  } else if (withdrawAmount > balance) {
    document.getElementById('message').textContent = 'Insufficient funds.';
  } else {
    document.getElementById('message').textContent = 'Please enter a valid withdrawal amount.';
  }

  // Clear the input field
  document.getElementById('withdraw-amount').value = '';
}

// Initialize with the default balance
updateBalance();
