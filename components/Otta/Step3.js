import React from "react";
import { Form } from "react-bootstrap";
import { generate } from "shortid";
import LabelHeart from "../Otta/LabelHeart";
import styles from "../Otta/QuestionForm.module.css";

const questionlist = [
  {
    control_id: "f35",
    label: <LabelHeart labelText="Yes" />,
  },
  {
    control_id: "f36",
    label: <LabelHeart labelText="No" />,
  },

  
];
const Step3 = () => {
  return (
    <>
      <div className={`${styles.otta_header} text-center mx-auto`}>
        <h4 className="fw-bold">Who doesn&apos;t want to earn while they learn? Do you?</h4>
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

export default Step3;
