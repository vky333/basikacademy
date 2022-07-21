import React, { useState } from "react";
import styles from "../button/Button.module.css";
import {
  Navbar,
  Container,
  Nav,
  header,
  Button,
  NavDropdown,
  NavItem,
  Modal,
  Form,
} from "react-bootstrap";
import Image from "next/image";
import CustomFormControl from "../CustomFormControl";

export const TalkComponentGlobal = (props) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const loginFrom = () => setShow(true);
  return (
    <>
      <section className="talkExpertLink sectionGlobal">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h1>{props.Heading}</h1>
              <a className="talkExBtn anchorbtnStyle" onClick={loginFrom}>
                Talk to Our Expert
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="talkSection">
        <Modal
          show={show}
          onHide={handleClose}
          className="talkContainer"
          fullscreen={fullscreen}
        >
          <Modal.Header closeButton className="text-center">
            <Image width={150} height={90} src="/basikLogo.png" alt="login" />
          </Modal.Header>
          <Modal.Body>
            <div className="fromLftText">
              Enhance your employability skills and become employment ready from
              the beginning of your career journey.
              <div>
                <h5 className="mt-4">Contact Us for Free Career Counselling</h5>
                <h1>
                  <span>1800-420-5757</span>
                </h1>
              </div>
            </div>
            <div className="fromSction">
              <CustomFormControl
                LabelName="Name*"
                InputType="text"
                placeholderName="Name*"
              />
              <CustomFormControl
                LabelName="Email ID*"
                InputType="text"
                placeholderName="Email ID*"
              />
              <CustomFormControl
                LabelName="Mobile Number*"
                InputType="text"
                placeholderName="Mobile Number*"
              />
              <CustomFormControl
                LabelName="City Name*"
                InputType="text"
                placeholderName="City Name*"
              />
              <Button
                variant="primary"
                onClick={handleClose}
                className="frmSubmitBtn"
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default TalkComponentGlobal;
