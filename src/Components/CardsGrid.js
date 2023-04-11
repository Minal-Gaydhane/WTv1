import React from "react";
import CardsComp from "./CardsComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';


const cardsData = [
    {
        title: "Card 1",
        content: "Lorem ipsum dolor sit amet.",
        imgSrc: "../Images/sketch1.jpg",
        Submit: "Place order",
    },
    {
        title: "Card 2",
        content: "Consectetur adipiscing elit.",
        imgSrc: "../Images/sketch2.webp",
    },
    {
        title: "Card 3",
        content: "Sed do eiusmod tempor incididunt.",
        imgSrc: "../Images/sketch3.jpg",
    },
    {
        title: "Card 4",
        content: "Ut labore et dolore magna aliqua.",
        imgSrc: "../Images/sketch4.jpg",
    },
    {
        title: "Card 5",
        content: "Ut enim ad minim veniam.",
        imgSrc: "../Images/sketch5.jpg",
    },
    {
        title: "Card 6",
        content: "Quis nostrud exercitation ullamco.",
        imgSrc: "../Images/sketch6.jpg",
    },
    {
        title: "Card 7",
        content: "Laboris nisi ut aliq commodo.",
        imgSrc: "../Images/sketch7.jpg",
    },
    {
        title: "Card 8",
        content: "Duis aute irure in reprehenderit.",
        imgSrc: "../Images/best6.jpg",
    },
    {
        title: "Card 9",
        content: "Excepteur sint occaecat non proident.",
        imgSrc: "../Images/best7.webp",
    },


];


const CardsGrid = () => {
    return (
        <>
            <Container>
                <Row>
                    {cardsData.map((card) => (
                        <Col xs={6} md={3}  >
                            <CardsComp cardImg={card.imgSrc} cardContent={card.content} cardTitle={card.title} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
};

export default CardsGrid;
