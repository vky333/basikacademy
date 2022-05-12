import React from "react";
import{Card} from 'react-bootstrap'

export const Card_Custom = (prop) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={prop.CardImage} className="carImage" />
        <Card.Body>
          <Card.Title>{prop.CardTitle}</Card.Title>
          <Card.Text>
          {prop.CardText}
            
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card_Custom
