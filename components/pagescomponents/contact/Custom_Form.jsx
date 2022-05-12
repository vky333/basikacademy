import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../contact/Contact.module.css";
export const Custom_Form = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          {/* <Form.Label>Name*</Form.Label> */}
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          {/* <Form.Label>Last Name*</Form.Label> */}
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Email Address" />
          {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          {/* <Form.Label>Mobile Number*</Form.Label> */}
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Example textarea</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your message here."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="By submitting this form, i agree to Basik's Privacy Policy."
          />
        </Form.Group>
        <Button variant="primary" type="submit" className={`${styles.contactBtn}`}>
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default Custom_Form;
