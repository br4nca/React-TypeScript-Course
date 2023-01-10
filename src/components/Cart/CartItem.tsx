import React from "react";
import "./CartItem.css";
import CartItemModel from "../../models/CartItem";
import Meal from "../../models/Meal";
interface CartItemProps extends CartItemModel {
  onRemove: (id: string) => void;
  onAdd: (item: Meal) => void;
}
const CartItem: React.FC<CartItemProps> = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartItemRemoveHandler = () => {
    props.onRemove(props.id);
  };
  const cartItemAddHandler = () => {
    props.onAdd({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
    });
  };
  return (
    <li className="cart-item">
      <div>
        <h2 className="cart-item-h2">{props.name}</h2>
        <div className="cart-item-summary">
          <span className="cart-item-price">{price}</span>
          <span className="cart-item-amount">x {props.amount}</span>
        </div>
      </div>
      <div className="cart-item-actions">
        <button className="cart-item-button" onClick={cartItemRemoveHandler}>
          −
        </button>
        <button className="cart-item-button" onClick={cartItemAddHandler}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
