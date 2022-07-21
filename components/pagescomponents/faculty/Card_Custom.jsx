import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../pagescomponents/faculty/Faculty.module.css";

export const Card_Custom = (prop) => {
  return (
    <>
      <Card className={`${styles.cardContainer}`}>
        <Card.Img variant="top" src={prop.CardImage} className="carImage" />
        <Card.Body>
          <Card.Title>{prop.CardTitle}</Card.Title>
          <Card.Text>
            <div dangerouslySetInnerHTML={{ __html: prop.CardText }} />
          </Card.Text>
        </Card.Body>
        <div className={`${styles.hoverContainer}`}>          
        <h5>{prop.facultyName}</h5>
        <div className={`${styles.title}`}>{prop.facultyHistory}</div>
              
        </div>
      </Card>
    </>
  );
};

export default Card_Custom;
