import React from "react";
import { useDispatch } from "react-redux";
import Product from "../../models/Product";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import "./ProductItem.css";

interface ProductItemProps extends Product {}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="product_item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="product_price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="product_actions">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
