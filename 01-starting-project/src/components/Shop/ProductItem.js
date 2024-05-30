import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/store';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  function handleAdd(item) {
    dispatch(cartActions.handleUpdateItem(item));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => handleAdd({title: title, price: price, qnt: 1})}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
