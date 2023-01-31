import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartState } from "../../store/cart-slice";

import { uiActions } from "../../store/ui-slice";
import "./CartButton.css";

interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(
    (state: { cart: cartState }) => state.cart.totalQuantity
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
