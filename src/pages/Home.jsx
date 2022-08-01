import React from "react";
import { FiltersControl, MainSlider, Products } from "../components/Home";
import { Container } from "../components/ui";

const Home = () => {
  //!!! EXTRA RERENDR if we remove selectedFields and pizzas length equality check

  return (
    <>
      <MainSlider />
      <Container>
        <FiltersControl />
        <Products />
      </Container>
    </>
  );
};

export default Home;
