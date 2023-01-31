import { useDispatch } from "react-redux";

import "./CartItem.css";
import { cartActions } from "../../store/cart-slice";
import React from "react";
interface CartItemProps {
  item: {
    title: string;
    quantity: number;
    total: number;
    price: number;
    id: string;
  };
}
const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{" "}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
