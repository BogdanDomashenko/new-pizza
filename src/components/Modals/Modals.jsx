import React from "react";
import CheckoutModal from "./СheckoutModal";
import СheckoutResultModal from "./СheckoutResultModal";
import ProductModal from "./ProductModal/ProductModal";

const Modals = () => {
  return (
    <div>
      <ProductModal />
      <CheckoutModal />
      <СheckoutResultModal />
    </div>
  );
};

export default Modals;
