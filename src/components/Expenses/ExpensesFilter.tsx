import React from "react";
import "./ExpensesFilter.css";
interface ExpensesFilterProps {
  onChangeFilter: (year: number) => void;
  year: number;
  avaibleYears: string[];
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = (props) => {
  const dropdownChangeHandler = (event: React.FormEvent) => {
    props.onChangeFilter(+(event.target as HTMLInputElement).value);
  };
  const avaibleYearsSorted = props.avaibleYears.sort(function (a, b) {
    return +b - +a;
  });
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.year} onChange={dropdownChangeHandler}>
          {avaibleYearsSorted.map((y) => {
            return (
              <option key={y} value={y}>
                {+y}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
