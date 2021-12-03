//create starter values
let monthlyIncome = 0;
let expenses = []; //an array of expense objects
let expenseTotal = 0;
let balance = 0;

//Add references to HTLM elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById ("update_budget_button");

//second form
let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); //DIV
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");

//Build a function that stores a monthly budget value and displays it in the app
function updateBudget(event){
    console.log("Update Budget fired.");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); //Convert string to number
    monthlyBudget.innerText = "$" + monthlyIncome; //Display in the app
    //TODO: Re-calculate the remaining balance
    updateBalance();
}

//Add updateBudget to update budget button onclick
updateBudgetButton.onclick = updateBudget;

//Build a helper function that will calculate the remaining balance and display it in the app
function updateBalance() {
    console.log("Update Balance fired");
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance; //Display in the app
    //Update color of text based on balance
    if (balance < 0){
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.add("green");
        remainingBalance.classList.remove("red");
    }
}

//Build a function that will create a new expense and add it to the expense array and display in the app
function addExpense(event) {
    console.log("Add Expense fired.");
    event.preventDefault();
    //Build a new expense object
    let expense  = {
        name: nameInput.value, 
        amount: parseInt(amountInput.value)//convert to number
    };
    //add to expense array
    expenses.push(expense);
    //Display in the app
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    //TODO: Calculate expense total
    updateExpenseTotal();
}

//Add addExpense as onclick handler to Add Expense button
addExpenseButton.onclick = addExpense;

//Build a function that adds the expenses in the expense list and displays in the app
function updateExpenseTotal() {
    expenseTotal = 0; // Reset
    //Iterate over the expense objects and re-calculate
    for (let i = 0; i < expenses.length; i++){
        let currentExpense= expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    //Display the new result in the app
    totalExpenses.innerText = "$" + expenseTotal;
    //Update remaining balance 
    updateBalance();
}