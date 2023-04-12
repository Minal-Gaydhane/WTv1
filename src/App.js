// import logo from './logo.svg';
// import './App.css';
// import CardExample from './Components/cards';

// function App() {
//   return (
//     <div className="App">
//       <CardExample Images={"Images/sketch7.jpg"}/>
//       <CardExample Images={"Images/sketch7.jpg"}/>
//       <CardExample Images={"Images/sketch7.jpg"}/>
//       <CardExample Images={"Images/sketch7.jpg"}/>
//     </div>
//   );
// }

// export default App;


import React from "react";
import CardsGrid from './Components/CardsGrid';
import NavbarM from "./Components/Navbar";
import Sponser from "./Components/Sponser";
import CarouselHero from "./Components/CarousalHero";
import { Container } from "react-bootstrap";
import FeaturesSection from "./Components/Features";
import HomeAboutPage from "./Components/HomeAboutPage";


const App = () => {
  return (
    <>
      <NavbarM />
      <Container>
        <CarouselHero/>
        <FeaturesSection/>
        <HomeAboutPage/>
        <CardsGrid />
        <Sponser />
      </Container>
    </>
  );
};

export default App;
