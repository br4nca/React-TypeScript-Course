import React from "react";
import { useSelector } from "react-redux";
import { cartState } from "../../store/cart-slice";

import Card from "../UI/Card";
import "./Cart.css";
import CartItem from "./CartItem";

interface CartProps {}

const Cart: React.FC<CartProps> = (props) => {
  const cartItems = useSelector(
    (state: { cart: cartState }) => state.cart.items
  );

  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
