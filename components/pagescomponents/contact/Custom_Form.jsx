import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../contact/Contact.module.css";
import CustomFormControl from "../../globals/CustomFormControl";
export const Custom_Form = () => {
  return (
    <>
      <Form className="row">
        <div className="col-lg-12 mb-3">
          <CustomFormControl
            Id="formGroup01"
            LabelName="Name*"
            InputType="text"
            placeholderName="First Name"
          />
        </div>
        <div className="col-lg-12 mb-3">
          <CustomFormControl
            Id="formGroup02"
            LabelName="Last Name*"
            InputType="text"
            placeholderName="Last Name*"
          />
        </div>
        <div className="col-lg-12 mb-3">
          <CustomFormControl
            Id="formGroup04"
            LabelName="Email Address"
            InputType="email"
            placeholderName="Email Address"
          />
        </div>
        <div className="col-lg-12 mb-3">
          <CustomFormControl
            Id="formGroup05"
            LabelName="Mobile Number*"
            InputType="text"
            placeholderName="Mobile Number*"
          />
        </div>
        <div className="col-lg-12 mb-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Type your message here."
            />
          </Form.Group>
        </div>
        <div className="col-lg-12">
          <Button
            variant="primary"
            type="submit"
            className={`${styles.contactBtn}`}
          >
            Send Message
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Custom_Form;
