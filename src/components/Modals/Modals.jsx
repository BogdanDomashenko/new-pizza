import React from "react";
import { useSelector } from "react-redux";
import { MODALS } from "../../utils/constants";
import ProductModal from "./ProductModal/ProductModal";
import СheckoutResultModal from "./СheckoutResultModal";
import CheckoutModal from "./СheckoutModal";
import CartModal from "./CartModal/CartModal";

const Modals = () => {
  const modals = useSelector((state) => state.modals);

  return (
    <>
      {modals[MODALS.ProductModal].visibility ? <ProductModal /> : ""}
      {modals[MODALS.СheckoutModal].visibility ? <CheckoutModal /> : ""}
      {modals[MODALS.СheckoutResultModal].visibility ? (
        <СheckoutResultModal />
      ) : (
        ""
      )}
      {modals[MODALS.CartModal].visibility ? <CartModal /> : ""}
    </>
  );
};

export default Modals;
