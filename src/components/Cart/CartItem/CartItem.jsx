import { ProductCount } from "../../index";
import { useDispatch } from "react-redux";
import {
  cartItemCountDec,
  cartItemCountInc,
} from "../../../redux/actions/cart";
import classNames from "classnames";
import { cartIdGenerate } from "../../../utils/helpers";

import styles from "./CartItem.module.scss";

const CartItem = ({ item, count, selectedProps, totalPrice, countSize }) => {
  const dispatch = useDispatch();
  const id = cartIdGenerate(item.id, selectedProps.type, selectedProps.size);

  const onIncCount = () => {
    dispatch(cartItemCountInc(id));
  };

  const onDecCount = () => {
    dispatch(cartItemCountDec(id));
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
        <div className={styles.rightBlock}>
          <ProductCount
            count={count}
            onInc={onIncCount}
            onDec={onDecCount}
            size={countSize}
          />
          <span className={styles.price}>{totalPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
