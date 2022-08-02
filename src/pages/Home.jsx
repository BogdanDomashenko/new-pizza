import React from "react";
import {
  AboutUs,
  Benefits,
  Customers,
  FiltersControl,
  MainSlider,
  Products,
  Reservation,
} from "../components/Home";

const Home = () => {
  //!!! EXTRA RERENDR if we remove selectedFields and pizzas length equality check in products

  return (
    <>
      <MainSlider />
      <FiltersControl />
      <Products />
      <AboutUs />
      <Benefits />
      <Reservation />
      <Customers />
    </>
  );
};

export default Home;
