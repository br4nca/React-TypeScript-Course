import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import Meal from "../../models/Meal";
import Checkout from "./Checkout";

interface CartProps {
  onClose: () => void;
}
const Cart: React.FC<CartProps> = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item: Meal) => {
    cartCtx.addItem(item, 1);
  };

  const submitOrderHandler = async (userData: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
  }) => {
    setIsSubmitting(true);
    await fetch("yourFirebaseDatabase/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className="actions">
      <button className="button--alt" onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  function orderHandler() {
    setIsCheckout(true);
  }
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );
  const isSubmittingContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className="actions">
        <button className="button" onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
