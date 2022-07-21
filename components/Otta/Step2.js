import React from "react";
import { Form } from "react-bootstrap";
import { generate } from "shortid";
import LabelHeart from "../Otta/LabelHeart";
import styles from "../Otta/QuestionForm.module.css";

const questionlist = [
  {
    control_id: "f23",
    label: <LabelHeart labelText="Certificate" />,
  },
  {
    control_id: "f24",
    label: <LabelHeart labelText="Diploma" />,
  },
  {
    control_id: "f25",
    label: <LabelHeart labelText="Degree" />,
  },
  
];
const Step2 = () => {
  return (
    <>
      <div className={`${styles.otta_header} text-center mx-auto`}>
      <h4 className="fw-bold">What suits you the best? </h4>
      </div>
      <div className={`${styles.option_wrapper} option_wrapper`}>
        <div className={`${styles.option_Content} d-flex flex-wrap col-md-5 mx-auto py-3 optionCont`}>
          {questionlist.map((list) => (
            <Form.Group key={generate()} controlId={list.control_id}>
              <Form.Check type="checkbox" label={list.label} />
            </Form.Group>
          ))}
        </div>
      </div>
    </>
  );
};

export default Step2;
