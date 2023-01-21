import React, { ReactNode, useState, useEffect } from "react";
import CartItem from "../models/CartItem";
import Meal from "../models/Meal";

export type CartContextProps = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: Meal, amount: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const CartContext = React.createContext<CartContextProps>({
  items: [],
  totalAmount: 0,
  addItem: (item: Meal, amount: number) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
});

export default CartContext;
