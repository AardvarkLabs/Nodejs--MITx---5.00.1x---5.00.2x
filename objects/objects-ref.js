
//  

let myAccount = {
    name: 'Adnrew',
    expenses: 0,
    income: 0
}
/*
let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}
*/

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}
// function to addincome
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}
// function to resest account
addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
// get AccountSummary
// Account for Andrew has $900. $1000 income. $100 in expenses

//addincome
//add expenses
//addexpenses
//resetaccount
//getaccount

