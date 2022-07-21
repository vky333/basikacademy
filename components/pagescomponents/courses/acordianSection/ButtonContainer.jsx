import React from "react";
import styles from "../Course.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
export const ButtonContainer = (props) => {
  return (
    <>
      <h1>Dive into the course</h1>
      <div className={`${styles.btnBox}`}>
      <h6 className={`${styles.hedingAcordian}`}>
          {props.courseName}        
        </h6>
        <Button variant="outline-primary" size="lg">
          <Link href="/pdf/BASIKCATALOUGE_FINAL.pdf" >
            <a target="_blank" className={`${styles.buttonStyle} anchorbtnStyle`}>
             Download Brochure
            </a>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ButtonContainer;
