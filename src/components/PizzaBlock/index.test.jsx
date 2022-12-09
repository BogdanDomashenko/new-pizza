import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithStore } from "../../utils/helpers/testing";
import * as reduxHooks from "react-redux";
import { PizzaBlock } from "..";
import { useProduct } from "../../hooks";

const item = {
  id: 1,
  name: "White chiken",
  price: 12,
  rating: 6,
  Sizes: [
    {
      id: 2,
      name: "10",
      price: 0,
    },
    {
      id: 3,
      name: "12",
      price: 2,
    },
    {
      id: 4,
      name: "16",
      price: 4,
    },
  ],
  Types: [
    {
      id: 2,
      name: "tiny",
      price: 0,
    },
    {
      id: 3,
      name: "default",
      price: 2,
    },
  ],
  ProductImages: [
    {
      url: "https://i.ibb.co/937F4Sp/text-4-2.png",
    },
  ],
  Category: {
    id: 1,
    name: "Pizzas",
  },
};

const product = {
  "type": { "id": 2, "name": "tiny", "price": 0 },
  "size": { "id": 2, "name": "10", "price": 0 },
  "additionalPrice": 0,
  "cartCount": 0,
};

const useProductSpy = jest.spyOn({ useProduct }, "useProduct");

describe("Render PizzaBlock", () => {
  it("should render", () => {
    useProductSpy.mockReturnValue(product);

    renderWithStore(<PizzaBlock {...item} />);

    expect(screen.getByText(item.name)).toBeInTheDocument();
  });
});
