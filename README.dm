# SpendWise

SpendWise is a personal budgeting dashboard that helps users manage their monthly budget and track their expenses.

The project was originally created using HTML and CSS. This week, JavaScript was added to make the application interactive.

## What Improvements Were Made

The following improvements were made to SpendWise:

- Added an interactive expense form.
- Added JavaScript functionality.
- Added an array for storing multiple expenses.
- Added loops for processing expense records.
- Added conditional statements for budget decisions.
- Added DOM manipulation.
- Added event listeners.
- Added automatic calculation of total expenses.
- Added automatic calculation of remaining balance.
- Added dynamic display of expenses on the webpage.
- Added budget feedback messages.

## Conditional Statements

Conditional statements are used to make decisions based on the user's budget.

SpendWise checks the remaining balance.

If the remaining balance is below zero, the application displays a warning that the budget has been exceeded.

If the remaining balance is below KSh 5,000, the application tells the user that the remaining balance is low.

Otherwise, the application tells the user that they are within their budget.

Example:

```javascript
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