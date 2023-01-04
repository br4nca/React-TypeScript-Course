import React from "react";
import Expenses from "./components/Expenses/Expenses";
import { Expense } from "./models/Expense";
import "./index.css";
const App: React.FC = () => {
  const expenses: Expense[] = [
    {
      expensTitle: "Car Insurance",
      expenseDate: new Date(),
      expensAmount: 400,
    },
    { expensTitle: "Shopping", expenseDate: new Date(), expensAmount: 15 },
    { expensTitle: "Farmacia", expenseDate: new Date(), expensAmount: 10 },
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
