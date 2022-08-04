import { useSelector } from "react-redux";

const useCart = () => {
  const { items } = useSelector((state) => state.cart);

  return Object.values(items);
};

export default useCart;
