import { useSelector } from "react-redux";

const useCart = () => {
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);

  return { items: Object.values(items), totalPrice, totalCount };
};

export default useCart;
