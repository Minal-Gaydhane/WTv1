import React from 'react'

import NavbarM from "../Components/Navbar";
import Sponser from "../Components/Sponser";
import CarouselHero from "../Components/CarousalHero";
import FeaturesSection from "../Components/Features";
import CustomerR from "../Components/CustomerR"
import HomeAboutPage from "../Components/HomeAboutPage";
import Footer from '../Components/Footer';

import FormComp from "../Components/FormComp";
import CardsGrid from "../Components/CardsGrid"

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

            <FormComp />
            <CardsGrid />
            
        </>
    )
}

export default HomePage