import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import "./MealItemForm.css";

interface MealItemFormProps {
  id: string;
  onAddToCart: (n: number) => void;
}
const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredAmount = (amountInputRef.current as HTMLInputElement).value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
