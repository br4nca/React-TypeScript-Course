import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
interface ProductDetailPageProps {}

const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </Fragment>
  );
};
export default ProductDetailPage;
