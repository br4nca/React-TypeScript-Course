import React, { useState } from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { Expense } from "./models/Expense";
import "./index.css";
const DUMMY_EXPENSES: Expense[] = [
  {
    id: Math.random().toString(),
    expenseTitle: "Car Insurance",
    expenseDate: new Date(),
    expenseAmount: 400,
  },
  {
    id: Math.random().toString(),
    expenseTitle: "Shopping",
    expenseDate: new Date(),
    expenseAmount: 15,
  },
  {
    id: Math.random().toString(),
    expenseTitle: "Dog's Food",
    expenseDate: new Date(),
    expenseAmount: 10,
  },
];

const App: React.FC = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setFilteredYear(expense.expenseDate.getFullYear());
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        filteredYear={filteredYear}
        setFilteredYear={setFilteredYear}
      />
    </div>
  );
};

export default App;
