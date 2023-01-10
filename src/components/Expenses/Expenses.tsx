import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { Expense } from "../../models/Expense";
import "./Expenses.css";
interface ExpensesProps {
  items: Array<Expense>;
}

const Expenses: React.FC<ExpensesProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const filterChangeHandler = (selecterYear: number) => {
    setFilteredYear(selecterYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        year={filteredYear}
      />
      {props.items.map((value, index) => {
        return (
          <ExpenseItem
            key={index}
            expensTitle={value.expenseTitle}
            expenseDate={value.expenseDate}
            expensAmount={value.expenseAmount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
