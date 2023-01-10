import React from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { Expense } from "../../models/Expense";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
interface ExpensesProps {
  items: Array<Expense>;
  filteredYear: number;
  setFilteredYear: (p: number) => void;
}

const Expenses: React.FC<ExpensesProps> = (props) => {
  const filterChangeHandler = (selecterYear: number) => {
    props.setFilteredYear(selecterYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear() === props.filteredYear;
  });
  const yearExpenses = filteredExpenses.map((expense) => expense.expenseAmount);
  const yearExpensesSum = yearExpenses.reduce(function (a, b) {
    return a + b;
  }, 0);
  const rawAvaibleYears = props.items.map((i) =>
    i.expenseDate.getFullYear().toString()
  );
  const avaibleYears = rawAvaibleYears.filter((c, index) => {
    return rawAvaibleYears.indexOf(c) === index;
  });
  return (
    <div>
      <Card className="expenses">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          {props.filteredYear}
        </h1>
        <h2 style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
          Total Expenses {yearExpensesSum} €
        </h2>
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          year={props.filteredYear}
          avaibleYears={avaibleYears}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
