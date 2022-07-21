import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { generate } from "shortid";
// import LabelHeart from "/components/Otta/LabelHeart";
// import Form from 'react-bootstrap/Form';
import styles from "../Otta/QuestionForm.module.css";

const Step7 = () => {
  return (
    <>
      <div className={`${styles.otta_header} text-center mx-auto`}>
        <h4 className="fw-bold">More about you </h4>
      </div>
      <div className={`${styles.option_wrapper} ${styles.login_wrapper} option_wrapper`}>
        <Row>
          <Col md={5} className="mx-auto pb-3">
           
            <Form.Control type="text" id="fname" placeholder="Name"/>
            <Form.Text className="text-danger d-none" id="passwordHelpBlock">
              Please fill in this field.
            </Form.Text>

            <Form.Label className={`${styles.frmLabl} bg-transparent ps-0`}></Form.Label>
            <Form.Control type="email" id="email" placeholder="Email" />
            <Form.Text className="text-danger d-none" id="passwordHelpBlock">
              Please fill in this field.
            </Form.Text>

            <Form.Label className={`${styles.frmLabl} bg-transparent ps-0`}></Form.Label>
            <Form.Control type="text" id="number" placeholder="Number"/>
            <Form.Text className="text-danger d-none" id="passwordHelpBlock">
              Please fill in this field.
            </Form.Text>

            <Form.Label className={`${styles.frmLabl} bg-transparent ps-0`}></Form.Label>
            <Form.Control type="text" id="state" placeholder="State" />
            <Form.Text className="text-danger d-none" id="passwordHelpBlock">
              Please fill in this field.
            </Form.Text>

            <Form.Label className={`${styles.frmLabl} bg-transparent ps-0`}>
              
            </Form.Label>
            <Form.Control type="date" id="dob" placeholder="Date of birth"/>
            <Form.Text className="text-danger d-none" id="passwordHelpBlock">
              Please fill in this field.
            </Form.Text>

            <p className="fs-12 my-4 text-center">
              By signing up you agree to our{" "}
              <span className="fw-bold">Privacy Policy</span> and{" "}
              <span className="fw-bold"> </span> for Candidates.
            </p>
            <p className="m-0 position-relative">
              <hr />
              <span
                className={`${styles.bgspan} position-absolute top-0 start-50 translate-middle px-4 text-secondary`}
              >
                OR
              </span>
            </p>
            <p className="fs-12 my-4 text-center">
              <span className="fw-bold"> Terms & Conditions</span> for
              Candidates.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Step7;
