import React from "react";
import { Title } from "../ui";

const OrderCardItem = ({
  props,
  totalPrice,
  count,
  pizza: { name, imageUrl },
}) => {
  return (
    <div className="order-cart-item">
      <div className="order-cart-item__item order-cart-item__img">
        <img src={imageUrl} alt={name} className="pizza-block__image" />
      </div>
      <div className="order-cart-item__item order-cart-item__details">
        <Title variant="h4">{name}</Title>
        <span>{props}</span>
      </div>
      <div className="order-cart-item__item order-cart-item__count">
        <Title variant="h4">{count}</Title>
      </div>
      <div className="order-cart-item__item order-cart-item__price">
        <Title variant="h4">{totalPrice}$</Title>
      </div>
    </div>
  );
};

export default OrderCardItem;
