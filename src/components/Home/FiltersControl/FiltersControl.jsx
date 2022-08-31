import Categories from "./Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setSortBy } from "../../../redux/actions/filters";

import styles from "./FiltersControl.module.scss";
import { Button, Container, Input, SelectPopup } from "../../ui";
import classNames from "classnames";
import { searchProduct } from "../../../redux/actions/pizzas";
import { useInput } from "../../../hooks";

const FiltersControl = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(({ filters }) => filters);
  const searchInput = useInput();

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleSearchClick = () => {
    dispatch(searchProduct(searchInput.value));
  };

  return (
    <Container>
      <div className={styles.filters} id="menu">
        <Categories />
        {/* <SelectPopup
          label="Sort by"
          items={["popular", "price", "alphabet"]}
          activeItem={sortBy}
          onSelectItem={onSelectSortType}
          className={classNames(
            "select__popup select__popup--success",
            styles.sort
          )}
        /> */}
        <div className={styles.search}>
          <Input
            className={styles.searchInput}
            label="Search"
            {...searchInput}
          />
          <Button variant="success" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FiltersControl;
