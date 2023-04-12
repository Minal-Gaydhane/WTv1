import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./Components/HomePage";
import FormComp from "./Components/FormComp";
import CardsGrid from "./Components/CardsComp"

const App = () => {
  return (
    <>
      <HomePage />
      <FormComp />
      <CardsGrid />
    </>
  );
};

export default App;
