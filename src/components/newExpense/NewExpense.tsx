import React, { useState } from "react";
import "./NewExpense.css";
import { Expense } from "../../models/Expense";
import NewExpenseForm from "./NewExpenseForm";
interface NewExpenseProps {
  onAddExpense: (expense: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData: {
    enteredTitle: string;
    enteredAmount: number;
    enteredDate: Date;
  }) => {
    props.onAddExpense({
      id: Math.random().toString(),
      expenseTitle: enteredExpenseData.enteredTitle,
      expenseAmount: enteredExpenseData.enteredAmount,
      expenseDate: enteredExpenseData.enteredDate,
    });
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
