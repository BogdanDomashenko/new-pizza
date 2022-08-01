import { Tabs } from "../../../ui";
import { useCategories } from "../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../../redux/actions/filters";

import styles from "./Categories.module.scss";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useCategories();
  const activeCategory = useSelector((state) => state.filters.category);
  // const categoryNames = useMemo(
  //   () => categories.map((category) => category.name),
  //   [categories]
  // );
  const category = activeCategory;

  const onCategoryChange = (id) => {
    dispatch(setCategory(id));
  };

  return (
    <div className={styles.categories}>
      {categories.length ? (
        <Tabs
          items={categories}
          value={category}
          onChange={onCategoryChange}
          className={styles.tabs}
          tabClassName={styles.tab}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Categories;
