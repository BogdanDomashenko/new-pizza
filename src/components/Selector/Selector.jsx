import classNames from "classnames";
import { setSelectedField } from "../../redux/actions/pizzas";
import { useDispatch } from "react-redux";

import styles from "./Selector.module.scss";

const Selector = ({ id, types, sizes, activeType, activeSize, className }) => {
  const dispatch = useDispatch();

  const onSelectSize = (size) => {
    dispatch(setSelectedField(id, { type: activeType, size }));
  };

  const onSelectType = (type) => {
    dispatch(setSelectedField(id, { type, size: activeSize }));
  };

  return (
    <div className={classNames(styles.selector, className)}>
      <ul className={styles.ul}>
        {types.map((item) => (
          <li
            key={item}
            className={classNames({
              [styles.active]: item === activeType,
              [styles.disabled]: !types.includes(activeType),
            })}
            onClick={() => onSelectType(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.ul}>
        {sizes.map((item) => (
          <li
            key={item}
            className={item === activeSize ? styles.active : ""}
            onClick={() => onSelectSize(item)}
          >
            {item} inch
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
