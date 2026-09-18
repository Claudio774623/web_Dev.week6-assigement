// ========================================
// SpendWise Interactive JavaScript
// ========================================


// ========================================
// 1. BUDGET VARIABLE
// ========================================

// Store the monthly budget
let budget = 50000;


// ========================================
// 2. EXPENSE ARRAY
// ========================================

// Store multiple expense records
let expenses = [
    {
        name: "Lunch",
        amount: 400,
        category: "Food"
    },

    {
        name: "Bus Fare",
        amount: 300,
        category: "Transport"
    }
];


// ========================================
// 3. SELECT HTML ELEMENTS
// ========================================

// Get the expense form
const expenseForm =
    document.getElementById("expense-form");


// Get input fields
const expenseName =
    document.getElementById("expense-name");

const expenseAmount =
    document.getElementById("expense-amount");

const expenseCategory =
    document.getElementById("expense-category");


// Get dashboard elements
const budgetDisplay =
    document.getElementById("budget-display");

const totalExpensesDisplay =
    document.getElementById("total-expenses");

const remainingBalanceDisplay =
    document.getElementById("remaining-balance");

const budgetMessage =
    document.getElementById("budget-message");


// Get expense list
const expenseList =
    document.getElementById("expense-list");


// ========================================
// 4. CALCULATE TOTAL EXPENSES
// ========================================

function calculateTotalExpenses() {

    let total = 0;


    // Loop through all expenses
    expenses.forEach(function(expense) {

        total = total + expense.amount;

    });


    return total;
}


// ========================================
// 5. CALCULATE REMAINING BALANCE
// ========================================

function calculateRemainingBalance() {

    const totalExpenses =
        calculateTotalExpenses();


    return budget - totalExpenses;
}


// ========================================
// 6. BUDGET DECISION MAKING
// ========================================

function checkBudget() {

    const remainingBalance =
        calculateRemainingBalance();


    // Conditional statements
    if (remainingBalance < 0) {

        budgetMessage.textContent =
            "Warning: You have exceeded your budget.";

    }

    else if (remainingBalance < 5000) {

        budgetMessage.textContent =
            "Be careful: Your remaining balance is low.";

    }

    else {

        budgetMessage.textContent =
            "Good job! You are within your budget.";

    }
}


// ========================================
// 7. DISPLAY EXPENSES
// ========================================

function displayExpenses() {

    // Clear the existing list
    expenseList.innerHTML = "";


    // Loop through every expense
    expenses.forEach(function(expense) {

        // Create a new list item
        const listItem =
            document.createElement("li");


        // Add expense information
        listItem.textContent =
            expense.name +
            " - KSh " +
            expense.amount +
            " (" +
            expense.category +
            ")";


        // Add item to webpage
        expenseList.appendChild(listItem);

    });
}


// ========================================
// 8. UPDATE DASHBOARD
// ========================================

function updateDashboard() {

    // Calculate total
    const totalExpenses =
        calculateTotalExpenses();


    // Calculate remaining balance
    const remainingBalance =
        calculateRemainingBalance();


    // Update budget
    budgetDisplay.textContent =
        budget;


    // Update total expenses
    totalExpensesDisplay.textContent =
        totalExpenses;


    // Update remaining balance
    remainingBalanceDisplay.textContent =
        remainingBalance;


    // Update expense list
    displayExpenses();


    // Update budget message
    checkBudget();
}


// ========================================
// 9. HANDLE FORM EVENT
// ========================================

expenseForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();


        // Get user input
        const name =
            expenseName.value.trim();


        const amount =
            Number(expenseAmount.value);


        const category =
            expenseCategory.value;


        // Check if the amount is valid
        if (amount <= 0) {

            alert(
                "Please enter an amount greater than zero."
            );

            return;
        }


        // Check if a category was selected
        if (category === "") {

            alert(
                "Please select an expense category."
            );

            return;
        }


        // Add the new expense to the array
        expenses.push({

            name: name,

            amount: amount,

            category: category

        });


        // Update the dashboard
        updateDashboard();


        // Clear the form
        expenseForm.reset();

    }
);


// ========================================
// 10. INITIAL DISPLAY
// ========================================

updateDashboard();