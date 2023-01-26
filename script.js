class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    // guard clause
    if (this.balance - amount <= 0) {
      console.log('❌ You cannot withdraw more than what you have!')
      console.log({ balance: this.balance })
      return
    }

    this.balance -= amount;
    console.log('withdrew', `$${amount}`)
    console.log({ balance: this.balance })
  }

  deposit(amount) {
    this.balance += amount;
    console.log('deposited', `$${amount}`)
    console.log({ balance: this.balance })
  }
}

const nabilChecking = new Bank(100)
console.log(nabilChecking.balance)
nabilChecking.deposit(100)
nabilChecking.withdraw(100)
nabilChecking.withdraw(200)
nabilChecking.withdraw(100)

const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const amountInput = document.getElementById('amount');
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
  const amount = Number(amountInput.value)
  nabilChecking.deposit(Number(amountInput.value))
  balanceDiv.innerText = `Balance: $${nabilChecking.balance}`
}

withdrawButton.onclick = () => {
  const amount = Number(amountInput.value)
  nabilChecking.withdraw(Number(amountInput.value))
  balanceDiv.innerText = `Balance: $${nabilChecking.balance}`
}