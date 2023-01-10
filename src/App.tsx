import React from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { Expense } from "./models/Expense";
import "./index.css";
const App: React.FC = () => {
  const expenses: Expense[] = [
    {
      id: Math.random.toString(),
      expenseTitle: "Car Insurance",
      expenseDate: new Date(),
      expenseAmount: 400,
    },
    {
      id: Math.random.toString(),
      expenseTitle: "Shopping",
      expenseDate: new Date(),
      expenseAmount: 15,
    },
    {
      id: Math.random.toString(),
      expenseTitle: "Farmacia",
      expenseDate: new Date(),
      expenseAmount: 10,
    },
  ];
  const addExpenseHandler = (expense: Expense) => {
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
