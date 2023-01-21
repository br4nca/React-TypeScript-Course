import React, { FormEvent, useRef, useState } from "react";
import "./Checkout.css";

const isNotEmpty = (value: string) => value.trim() !== "";
const isFiveChars = (value: string) => value.trim().length === 5;

interface CheckoutProps {
  onCancel: () => void;
  onConfirm: (userData: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
  }) => void;
}
const Checkout: React.FC<CheckoutProps> = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredName = (nameInputRef.current as HTMLInputElement).value;
    const enteredStreet = (streetInputRef.current as HTMLInputElement).value;
    const enteredPostalCode = (postalCodeInputRef.current as HTMLInputElement)
      .value;
    const enteredCity = (cityInputRef.current as HTMLInputElement).value;
    setFormInputValidity({
      name: isNotEmpty(enteredName),
      street: isNotEmpty(enteredStreet),
      city: isNotEmpty(enteredCity),
      postalCode: isFiveChars(enteredPostalCode),
    });
    const formIsValid =
      isNotEmpty(enteredName) &&
      isNotEmpty(enteredStreet) &&
      isNotEmpty(enteredCity) &&
      isFiveChars(enteredPostalCode);
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  return (
    <form className="c_form" onSubmit={confirmHandler}>
      <div className={`c_control ${formInputValidity.name ? "" : "c_invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`c_control ${formInputValidity.street ? "" : "c_invalid"}`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`c_control ${
          formInputValidity.postalCode ? "" : "c_invalid"
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters)!</p>
        )}
      </div>
      <div className={`c_control ${formInputValidity.city ? "" : "c_invalid"}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className="c_actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="c_submit">Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
