import React, { useState } from "react";
import "./NewExpenseForm.css";
interface NewExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: {
    enteredTitle: string;
    enteredAmount: number;
    enteredDate: Date;
  }) => void;
}

const NewExpenseForm: React.FC<NewExpenseFormProps> = (props) => {
  const initialState = {
    enteredTitle: "",
    enteredAmount: 0,
    enteredDate: new Date(),
  };

  const [userInput, setUserInput] = useState<{
    enteredTitle: string;
    enteredAmount: number;
    enteredDate: Date;
  }>(initialState);
  const titleChangeHandler = (event: React.FormEvent) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: (event.target as HTMLInputElement).value,
      };
    });
  };
  const amountChangeHandler = (event: React.FormEvent) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: +(event.target as HTMLInputElement).value,
      };
    });
  };
  const dateChangeHandler = (event: React.FormEvent) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: new Date((event.target as HTMLInputElement).value),
      };
    });
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput(initialState);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            value={userInput.enteredDate.toISOString().slice(0, 10)}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
