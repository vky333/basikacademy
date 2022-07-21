import React from "react";
import { Form } from "react-bootstrap";
import { generate } from "shortid";
import LabelHeart from "../Otta/LabelHeart";
import styles from "../Otta/QuestionForm.module.css";

const questionlist = [
  {
    control_id: "f1",
    label: <LabelHeart labelText="XII passed" />,
  },
  {
    control_id: "f2",
    label: <LabelHeart labelText="Undergraduate" />,
  },
  {
    control_id: "f3",
    label: <LabelHeart labelText="Graduate" />,
  },
  {
    control_id: "f4",
    label: <LabelHeart labelText="Post Graduate" />,
  },
];
const Step1 = () => {
  return (
    <>
      <div className={`${styles.otta_mainHdrContent}`}>
        <h4>Hey, are you confused about your career? We have a solution for you. </h4>
       
        <p className="mb-5">Hey, are you being skeptical about your career? We have a solution for you.
Do you know that the BFSI sector will become the third-largest sector by 2025, 
with a value of around INR 81 trillion? Any organization, industry, or business 
entity cannot operate without accounts and finance professionals. Hence, there will 
be exponential growth in job openings in the BFSI sector.
Besides, Basik Academy is always ready to assist you in choosing the right career
 option in the field of accounts and finance by providing industry-relevant skill
  sets through experiential learning – with programs designed &amp; delivered by
   industry experts.
        </p>
       
      </div>
      <div className={`${styles.otta_header} text-center mx-auto`}>
        <h4 className="fw-bold">Can you tell us your highest Qualification so far?</h4>
      </div>
      <div className={`${styles.option_wrapper} option_wrapper`}>
        <div
          className={`${styles.option_Content} d-flex flex-wrap col-md-5 mx-auto py-3 optionCont`}
        >
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

export default Step1;
