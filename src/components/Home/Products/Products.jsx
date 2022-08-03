import { cartIdGenerate } from "../../../utils/helpers";
import { PizzaBlock, PizzaLoadingBlock } from "../../index";

import styles from "./Products.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { usePagination, usePizzas } from "../../../hooks";
import { useCallback } from "react";
import { addCartItem } from "../../../redux/actions/cart";
import Pagination from "../../Pagination/Pagination";
import { Container } from "../../ui";
import {
  setProductModalId,
  toggleModalVisibility,
} from "../../../redux/actions/modals";
import { MODALS } from "../../../utils/constants";

const Products = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const { items: cartItems } = useSelector((state) => state.cart);
  const { selectedFields } = useSelector((state) => state.pizzas);
  const { totalCount } = useSelector(({ pizzas }) => pizzas.items);

  const pagination = usePagination(totalCount, 8);

  const pizzas = usePizzas(pagination.page, pagination.rowsPerPage);

  // useEffect(() => {
  //   setCategoryNames(categories.map((category) => category.name));
  // }, [categories]);

  const onAddItemToCart = useCallback((item) => {
    dispatch(addCartItem({ item, selectedProps: selectedFields[item.id] }));
  });

  const onProductClick = useCallback((item) => {
    dispatch(setProductModalId(item.id));
    dispatch(toggleModalVisibility(MODALS.ProductModal));
  });

  return (
    <div className={styles.products}>
      <Container>
        <h2 className={styles.title} id="menu">
          Menu
        </h2>
        <div className={styles.items}>
          {isLoaded && pizzas.length === Object.keys(selectedFields).length
            ? pizzas.map((item, index) => {
                const cartItem =
                  cartItems[
                    cartIdGenerate(
                      item.id,
                      selectedFields[item.id]?.type,
                      selectedFields[item.id]?.size
                    )
                  ];
                return selectedFields[item.id] ? (
                  <PizzaBlock
                    key={index}
                    cartCount={cartItem ? cartItem.count : 0}
                    selectedFields={selectedFields[item.id]}
                    {...item}
                    onAddToCart={() => onAddItemToCart(item)}
                    onClick={() => onProductClick(item)}
                  />
                ) : (
                  ""
                );
              })
            : Array(8)
                .fill()
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
        <div className={styles.pagination}>
          {totalCount ? <Pagination {...pagination} /> : ""}
        </div>
      </Container>
    </div>
  );
};

export default Products;
