import React from "react";
import "./NewExpense.css";
import { Expense } from "../../models/Expense";
import NewExpenseForm from "./NewExpenseForm";
interface NewExpenseProps {
  onAddExpense: (expense: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const saveExpenseData = (enteredExpenseData: {
    enteredTitle: string;
    enteredAmount: number;
    enteredDate: Date;
  }) => {
    console.log(enteredExpenseData);
    props.onAddExpense({
      id: Math.random().toString(),
      expenseTitle: enteredExpenseData.enteredTitle,
      expenseAmount: enteredExpenseData.enteredAmount,
      expenseDate: enteredExpenseData.enteredDate,
    });
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
