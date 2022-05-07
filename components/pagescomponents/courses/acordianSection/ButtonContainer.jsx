import React from "react";
import styles from '../Course.module.css'
import {Button,section,Accordion} from 'react-bootstrap';
export const ButtonContainer = () => {
  return (
    <>
      <h1>Dive into the course</h1>
      <div className={`${styles.btnBox}`}>
        <Button variant="primary" size="lg">
          See Curriculum
        </Button>
        <Button variant="outline-primary" size="lg">
          Download Brochure
        </Button>
      </div>
    </>
  );
};


export default ButtonContainer