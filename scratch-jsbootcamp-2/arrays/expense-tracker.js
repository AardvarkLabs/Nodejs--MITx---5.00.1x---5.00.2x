

const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [], 
    addExpense: function (description, amount) {
        this.expenses.push({
            // object
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (expense){
            totalIncome = totalIncome + income.amount 
        })

        accountBlance = totalIncome -totalExpenses

        return `${this.name} has a blance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}


// Expanse -> description, amount 
// addExpense  -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses

// 1 add income array to account
// 2 addincome method -> description, amount
// 3 Tweak getAccountSummary



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())

