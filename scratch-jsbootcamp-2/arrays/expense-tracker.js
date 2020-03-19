

const account = {
    name: 'Andrew Mead',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            // object
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        return `${this.name} has $${totalExpenses} in expenses.`
    }
}


// Expanse -> description, amount 
// addExpense  -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())

