import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { Expense } from "../../models/Expense";
import "./Expenses.css";
interface ExpensesProps {
  items: Array<Expense>;
}

const Expenses: React.FC<ExpensesProps> = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((value, index) => {
        return (
          <ExpenseItem
            key={index}
            expensTitle={value.expensTitle}
            expenseDate={value.expenseDate}
            expensAmount={value.expensAmount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
