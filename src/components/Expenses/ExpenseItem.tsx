import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
interface ExpenseItemProps {
  expenseDate: Date;
  expensTitle: string;
  expensAmount: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expensTitle}</h2>
        <div className="expense-item__price">{props.expensAmount}€</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
