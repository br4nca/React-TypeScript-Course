import React, { useContext, useEffect, useState } from "react";
import CartItem from "../../models/CartItem";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
interface HeaderCartButtonProps {
  onClick: () => void;
}
const HeaderCartButton: React.FC<HeaderCartButtonProps> = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce(
    (curNumber: number, item: CartItem) => {
      return curNumber + item.amount;
    },
    0
  );
  const btnClasses = `button ${btnIsHighlighted ? "bump" : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
