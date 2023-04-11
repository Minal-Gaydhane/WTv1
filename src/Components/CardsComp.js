import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
function CardsComp(props) {
  return (
    <>

      <Card>
        <Card.Img variant="top" src={props.cardImg} width="200" height="350" />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardContent}</Card.Text>
        </Card.Body>
        <button>Submit</button>
      </Card>
    </>
  );
}

export default CardsComp;
