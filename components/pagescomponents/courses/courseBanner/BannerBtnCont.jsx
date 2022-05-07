import React from "react";
import styles from '../Course.module.css'
import {Button} from 'react-bootstrap';

export const BannerBtnCont = () => {
  return (
    <>
      <div className={`${styles.banerBtnCont}`}>
        <Button variant="primary" size="lg">
          Enroll Now
        </Button>
        <Button variant="outline-primary" size="lg">
          Know More
        </Button>
      </div>
    </>
  );
};

export default BannerBtnCont;
