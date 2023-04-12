import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeAboutPage = () => {
    return (
        <Container>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 col-sm-8">
                        <div class="about-content">
                            <header>Home </header>
                            <h2>"Discover artisanal crafts by seniors & the specially-abled."</h2>
                            <div class="about-details">
                                <p class="fw-bold">"At our company, we're committed to empowering local artisans and
                                    promoting sustainable creativity."</p>
                                <p>"Our purpose is to offer exquisite and durable crafts that blend form and function. We
                                    hold the conviction that art has the power to enrich daily life with beauty and
                                    happiness, and we're committed to helping customers discover objects that stir their
                                    creativity and wonder."</p>
                                <p>At our core, we believe in the power of art to connect people and bring beauty into the
                                    world. We hope you'll join us on this journey and discover something truly special on
                                    our website.</p>
                                <a href="about.html" class="btn main-btn">Read More</a>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-sm-8">
                        <img src="bg.jpg" alt="alt" height="500" width="600"/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HomeAboutPage;
