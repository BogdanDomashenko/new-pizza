import React from "react";
import {
  AboutUs,
  FiltersControl,
  MainSlider,
  Products,
} from "../components/Home";

const Home = () => {
  //!!! EXTRA RERENDR if we remove selectedFields and pizzas length equality check in products

  return (
    <>
      <MainSlider />
      <FiltersControl />
      <Products />
      <AboutUs />
    </>
  );
};

export default Home;
