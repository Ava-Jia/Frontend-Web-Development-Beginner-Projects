let budgetInput = document.getElementById("budget-amount");
let expenseNameInput = document.getElementById("expenses-category");
let expenseAmountInput = document.getElementById("expenses-amount");

let totalBudgetDisplay = document.getElementById("total-budget");
let totalExpensesDisplay = document.getElementById("total-expenses");
let balanceDisplay = document.getElementById("balance");

let expenseListContainer = document.getElementById("expense-list-items");
let expenseItemName = document.getElementById("expense-item-name");
let expenseItemAmount = document.getElementById("expense-item-amount");

let totalBudget = 0;
let totalExpenses = 0;

function createExpenseItem(name, amount){
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");

    expenseItem.innerHTML = `
        <span id="expense-item-name">${name}</span>
        <span id="expense-item-amount">${amount.toFixed(2)}</span>
        <button class="edit-btn" style="width: 30px;"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete-btn" style="width: 30px;"><i class="fa-solid fa-trash"></i></button>
    `;

    expenseItem.querySelector('.delete-btn').addEventListener('click', () => {
        totalExpenses -= amount;
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
        expenseItem.remove();
        updateBalance();
    });

    expenseListContainer.appendChild(expenseItem);
};

function updateBalance(){
    const currentBalance = totalBudget - totalExpenses;
    balanceDisplay.textContent = currentBalance.toFixed(2);
}

document.getElementById('budget-form').addEventListener("submit", (event) => {
    event.preventDefault();

    const Budget = parseFloat(budgetInput.value) || 0;
    totalBudget += Budget;
    totalBudgetDisplay.textContent = totalBudget.toFixed(2);
    updateBalance();
    budgetInput.value = '';
});

document.getElementById('expense-form').addEventListener("submit", (event) => {
    event.preventDefault();
    
    const amount = parseFloat(expenseAmountInput.value) || 0;
    const name = expenseNameInput.value.trim();

    if (amount && name){
        totalExpenses += amount;
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
        
        createExpenseItem(name, amount);

        updateBalance();
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});
