import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment, useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = 2;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {

    if(isInitial !== 0) {
      isInitial -= 1;
      return;
    }

    dispatch(sendCartData(cart))

  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;