import React from "react";
import {Form} from "react-bootstrap";
export const CustomFormControl = (props) => {
  return (
    <>
      <Form.Group controlId={props.Id} className="mb-3">
        <Form.Label className="formLable">{props.LabelName}</Form.Label>
        <Form.Control type={props.InputType} placeholder={props.placeholderName} required/>
      </Form.Group>
    </>
  );
};

export default CustomFormControl;
