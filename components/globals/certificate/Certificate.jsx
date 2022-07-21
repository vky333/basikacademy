import React,{useState} from "react";
import Image from "next/image";
import {Modal} from 'react-bootstrap'
import styles from '../certificate/Certificate.module.css'

export const Certificate = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>What is <span>Lorem Ipsum?</span></h1>
          <div className="pe-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="col-md-4">
          <div onClick={handleShow} className={`${styles.cerficateImg}`}>
            <Image
              width={842}
              height={595}
              src="/CERTIFICATE-BASIK.jpg"
              alt="CERTIFICATE-BASIK"
            />
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="CertifcateSection"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton className="text-center"></Modal.Header>
        <Modal.Body>
          <Image
            width={842}
            height={595}
            src="/CERTIFICATE-BASIK.jpg"
            alt="CERTIFICATE-BASIK"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Certificate;
