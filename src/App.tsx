import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { AppDispatch } from "./store";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { cartState } from "./store/cart-slice";
import { uiState } from "./store/ui-slice";

let isInitial = true;
const App: React.FC = (props) => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const showCart = useSelector(
    (state: { ui: uiState }) => state.ui.cartIsVisible
  );
  const cart = useSelector((state: { cart: cartState }) => state.cart);
  const notification = useSelector(
    (state: { ui: uiState }) => state.ui.notification
  );
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};

export default App;
