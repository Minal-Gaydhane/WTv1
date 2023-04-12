import React from 'react'

import NavbarM from "./Components/Navbar";
import Sponser from "./Components/Sponser";
import CarouselHero from "./Components/CarousalHero";
import FeaturesSection from "./Components/Features";
import CustomerR from "./Components/CustomerR"
import HomeAboutPage from "./Components/HomeAboutPage";
import Footer from './Footer';

import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <>
            <NavbarM />
            <CarouselHero />
            <Container>
                <FeaturesSection />
                <HomeAboutPage />
                <Sponser />
                <CustomerR />
            </Container>
            <Footer />
        </>
    )
}

export default HomePage