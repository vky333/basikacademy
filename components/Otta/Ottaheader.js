import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../Otta/QuestionForm.module.css";
import Link from "next/link";
import Image from "next/image";

const Ottaheader = () => {
  return (
    <>
      <div>
        <Row className={`${styles.logo}`}>
          <Col md={12}>
          <Link href="/"><a>
            <Image
                width={140} height={80}
                src="/basikLogo.png"
                alt="BasikLogo"
                style={{cursor:"pointer"}}
              /></a>
            </Link>
          </Col>
        
        </Row>
      </div>
    </>
  );
};

export default Ottaheader;
