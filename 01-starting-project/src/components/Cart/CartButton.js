import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/store';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const item = useSelector( state => state.cart.info)

  function handleToggle() {
    dispatch(cartActions.handleToggle());
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{item[0].qnt === 0 ? 0 : item.length}</span>
    </button>
  );
};

export default CartButton;
