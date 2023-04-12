import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselHero = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="bg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            height: '80%',
                            textAlign: 'left',
                        }}>
                        <h1>100% Handmade</h1>
                        <h3>Best from Waste</h3>
                        <p>"Discover unique and handmade arts and crafts created by talented seniors and
                            specially-abled individuals."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="bg.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            height: '80%',
                            textAlign: 'left',
                        }}>
                        <h1>100% Homemade with care</h1>
                        <h3>Made from scratch</h3>
                        <p>"Experience the quality and craftsmanship of handmade goods created by our team of seniors and specially-abled artists and craftspeople."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="bg.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            height: '80%',
                            textAlign: 'left',
                        }}>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselHero