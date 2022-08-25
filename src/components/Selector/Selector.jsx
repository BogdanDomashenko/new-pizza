import classNames from "classnames";
import { setSelectedField } from "../../redux/actions/pizzas";
import { useDispatch } from "react-redux";

import styles from "./Selector.module.scss";

const Selector = ({ id, types, sizes, activeType, activeSize, className }) => {
  const dispatch = useDispatch();

  const onSelectSize = (size) => {
    dispatch(setSelectedField(id, { type: activeType, size: size.name }));
  };

  const onSelectType = (type) => {
    dispatch(setSelectedField(id, { type: type.name, size: activeSize }));
  };

  return (
    <div className={classNames(styles.selector, className)}>
      <ul className={styles.ul}>
        {types?.map((item) => (
          <li
            key={item.id}
            className={classNames({
              [styles.active]: item.name === activeType,
            })}
            onClick={() => onSelectType(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <ul className={styles.ul}>
        {sizes?.map((item) => (
          <li
            key={item.id}
            className={item.name === activeSize ? styles.active : ""}
            onClick={() => onSelectSize(item)}
          >
            {item.name} inch
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
