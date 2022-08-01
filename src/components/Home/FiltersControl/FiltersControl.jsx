import Categories from "./Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setSortBy } from "../../../redux/actions/filters";

import styles from "./FiltersControl.module.scss";
import { SelectPopup } from "../../ui";

const FiltersControl = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(({ filters }) => filters);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className={styles.filters}>
      <Categories />
      <SelectPopup
        label="Sort by"
        items={["popular", "price", "alphabet"]}
        activeItem={sortBy}
        onSelectItem={onSelectSortType}
      />
    </div>
  );
};

export default FiltersControl;
