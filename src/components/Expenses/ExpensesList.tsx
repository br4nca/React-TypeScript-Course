import React from "react";
import ExpenseItem from "./ExpenseItem";
import { Expense } from "../../models/Expense";
import "./ExpensesList.css";
interface ExpensesListProps {
  items: Array<Expense>;
}

const ExpensesList: React.FC<ExpensesListProps> = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((value) => (
        <ExpenseItem
          key={value.id}
          expensTitle={value.expenseTitle}
          expenseDate={value.expenseDate}
          expensAmount={value.expenseAmount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
