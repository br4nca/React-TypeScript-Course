import React, { Fragment } from "react";
import { Link } from "react-router-dom";
interface ProductsPageProps {}

const PRODUCTS: { id: string; title: string }[] = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

const ProductsPage: React.FC<ProductsPageProps> = (props) => {
  return (
    <Fragment>
      <h1>ProductsPage</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default ProductsPage;
