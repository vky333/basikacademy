import React from 'react'
// import { Row , Col } from "react-bootstrap"
import { Form } from "react-bootstrap";
import LabelCheck from "../Otta/LabelCheck";
import { generate } from "shortid";
import styles from "../Otta/QuestionForm.module.css";


const questionlist = [
    {
        id:1,
        label:<LabelCheck labelText="Internships" />,
    },
    {
        id:2,
        label:<LabelCheck labelText="Entry-level/graduate" />,
    },
    {
        id:3,
        label:<LabelCheck labelText="Junior (1-2 years)" />,
    },
    {
        id:4,
        label:<LabelCheck labelText="Mid-level (3-4 years)" />,
    },
];


const Step5 = () => {


  return (
    <>
          <div className={`${styles.otta_header} text-center mx-auto`}>
        <h4 className="fw-bold">What level of roles would you like to see?</h4>
      </div>
      <div className={`${styles.option_wrapper} option_wrapper`}>
        <div className="col-md-5 mx-auto py-3">

     
       <p className='text-center'>Select the most relevant for you (max 2)</p>
        {questionlist.map((list) => (
            <Form.Group key={generate()} controlId={list.id}>
              <Form.Check type="checkbox" label={list.label} />
            </Form.Group>
          ))}
    
    
        </div>
      </div>
    </>
  )
}

export default Step5