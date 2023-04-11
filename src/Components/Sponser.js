import React from "react";
import {Row, Col } from "react-bootstrap";
// import Stack from 'react-bootstrap/Stack';
function Sponser() {
    return (
        <>
            <Row className="text-center">
                <Col>
                    <img src="Images/NGO1.jpg" alt="Logo 1" width="100" height="100" fluid/>
                    <p>Poona Geriatric Care Center, Pune</p>
                </Col>
                <Col>
                    <img src="Images/NGO2.png" alt="Logo 2" width="200" height="100" fluid/>
                    <p>Nirmalya Trust, Pune</p>
                </Col>
                <Col>
                    <img src="Images/NGO3.png" alt="Logo 3" width="200" height="100" fluid/>
                    <p>Prayatna: with special need, Pune</p>
                </Col>
                <Col>
                    <img src="Images/NGO4.jpg" alt="Logo 1" width="100" height="100" fluid/>
                    <p>NGOS For Specialone in Hadapsar, Pune</p>
                </Col>
            </Row>
        </>
        // <>
        // <Container fluid>
        //     <Stack direction="horizontal">
        //         <div>
        //             <img src="Images/NGO1.jpg" alt="Logo 1" width="100" height="100" />
        //             <p>Poona Geriatric Care Center, Pune</p>
        //         </div>
        //         <div>
        //             <img src="Images/NGO2.png" alt="Logo 2" width="100" height="100" />
        //             <p>Nirmalya Trust, Pune</p>
        //         </div>
        //         <div>
        //             <img src="Images/NGO3.png" alt="Logo 3" width="100" height="100" />
        //             <p>Prayatna: with special need, Pune</p>
        //         </div>
        //         <div>
        //             <img src="Images/NGO4.jpg" alt="Logo 1" width="100" height="100" />
        //             <p>NGOS For Specialone in Hadapsar, Pune</p>
        //         </div>
        //     </Stack>
        //     </Container>
        // </>
    );
}

export default Sponser;