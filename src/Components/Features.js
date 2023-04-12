import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const FeaturesSection = () => {
    return (
        <section className="feature_section">
            <Container>
                <Row>
                    <Col sm={6} lg={3} className="mb-5">
                        <Card className="features-box">
                            <div className="text-center">
                                <div className="features-icon-border">
                                    <div className="features-icon">
                                        <img decoding="async" src="Images/24.png" width="100" height="100"/>
                                    </div>
                                </div>
                                <div className="features-text">
                                    <h3>24/07 Support</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={6} lg={3} className="mb-5">
                        <Card className="features-box">
                            <div className="text-center">
                                <div className="features-icon-border">
                                    <div className="features-icon">
                                        <img decoding="async" src="Images/truck-loaded.png" width="100" height="100" />
                                    </div>
                                </div>
                                <div className="features-text">
                                    <h3>Free Shipping</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={6} lg={3} className="mb-5">
                        <Card className="features-box">
                            <div className="text-center">
                                <div className="features-icon-border">
                                    <div className="features-icon">
                                        <img decoding="async" src="Images/order.png" width="100" height="100" />
                                    </div>
                                </div>
                                <div className="features-text">
                                    <h3>Customized Orders</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={6} lg={3} className="mb-5">
                        <Card className="features-box">
                            <div className="text-center">
                                <div className="features-icon-border">
                                    <div className="features-icon">
                                        <img decoding="async" src="Images/lemon.png" width="100" height="100" />
                                    </div>
                                </div>
                                <div className="features-text">
                                    <h3>Eco-friendly Products</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesSection;
