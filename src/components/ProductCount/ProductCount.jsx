import classNames from "classnames";

import styles from "./ProductCount.module.scss";

const ProductCount = ({ count, onInc, onDec }) => {
  return (
    <div className={styles.productCount}>
      <button className={styles.button} onClick={onDec}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={classNames(styles.button, styles.buttonPrimary)}
        onClick={onInc}
      >
        +
      </button>
    </div>
  );
};

export default ProductCount;
