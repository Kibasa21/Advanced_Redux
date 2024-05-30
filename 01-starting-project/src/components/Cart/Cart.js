import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const {title, qnt, price} = useSelector(state => state.cart.info[0]);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {
        title !== '' ?
          (
            <ul>
              <CartItem
                item={{ title: title, quantity: qnt, total: (qnt * price), price: price }}
              />
            </ul>
          )
          :
          'Your cart is empty!'
      }
    </Card>
  );
};

export default Cart;
