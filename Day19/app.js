import { addExpenses, expenses } from "./module/expensesModule.js";
import { displayList } from "./module/uiModule.js";


let expensesFormContainer = document.getElementById("expenses-form");
let expensesListContainer = document.getElementById("expenses-list");

fetch('./component/expenses-form.html').then((response) => response.text()).then((html) => {
        expensesFormContainer.innerHTML = html
    })

fetch('./component/expenses-list.html').then((response) => response.text()).then((html) => {
        expensesListContainer.innerHTML = html
    })

let form = document.getElementById("expenses-form")
form.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        let expenseNameInput = document.getElementById("expenseName")
        let expensePriceInput = document.getElementById("expensePrice")


        let expenseName = expenseNameInput.value
        let expensePrice = expensePriceInput.value

        if (expenseName && expensePrice) {
            addExpenses(expenseName, expensePrice)
            console.log("expenses", expenses)

            displayList()
        }

    } catch (error) {
        alert(`App Error: ${error.message}`)
    }
})