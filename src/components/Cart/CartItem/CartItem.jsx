import styles from "./CartItem.module.scss";
import { ProductCount } from "../../index";
import { useDispatch } from "react-redux";
import {
  cartItemCountDec,
  cartItemCountInc,
} from "../../../redux/actions/cart";
import classNames from "classnames";

const CartItem = ({ item, count, selectedProps, totalPrice, countSize }) => {
  const dispatch = useDispatch();

  const onIncCount = () => {
    dispatch(cartItemCountInc());
  };

  const onDecCount = () => {
    dispatch(cartItemCountDec());
  };

  return (
    <div className={styles.item}>
      <img src={item.imageUrl} alt={item.name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={classNames(styles.title)}>{item.name}</span>
          <div className={styles.selectedProps}>
            <span className="">{selectedProps.size} inch</span>
            <span className="">{selectedProps.size}</span>
          </div>
        </div>
        <ProductCount
          count={count}
          onInc={onIncCount}
          onDec={onDecCount}
          size={countSize}
        />
        <span className={styles.price}>{totalPrice}$</span>
      </div>
    </div>
  );
};

export default CartItem;
