import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}
const MealItem: React.FC<MealItemProps> = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}`;
  const addToCartHandler = (amount: number) => {
    cartCtx.addItem(
      {
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price,
      },
      amount
    );
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
