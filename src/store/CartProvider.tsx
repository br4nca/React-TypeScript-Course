import React, { useReducer } from "react";
import CartItem from "../models/CartItem";
import Meal from "../models/Meal";
import { CartContext, CartContextProps } from "./cart-context";

type State = {
  items: CartItem[];
  totalAmount: number;
};
type AddAction = {
  type: "ADD" | "REMOVE";
  item: CartItem;
};
type RemoveAction = {
  type: "ADD" | "REMOVE";
  id: string;
};
const defaultCartState = {
  items: [] as CartItem[],
  totalAmount: 0,
};

const cartReducer = (state: State, action: AddAction | RemoveAction) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === (action as AddAction).item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat((action as AddAction).item);
    }
    const updatedTotalAmount =
      state.totalAmount +
      (action as AddAction).item.price * (action as AddAction).item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === (action as RemoveAction).id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== (action as RemoveAction).id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

interface CartProviderProps {
  children: React.ReactNode;
}
const CartProvider: React.FC<CartProviderProps> = (props) => {
  const [cartState, dispachedCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item: Meal, amount: number) => {
    dispachedCartAction({ type: "ADD", item: { amount, ...item } });
  };
  const removeItemFromCartHandler = (id: string) => {
    dispachedCartAction({ type: "REMOVE", id: id });
  };
  const cartContext: CartContextProps = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
