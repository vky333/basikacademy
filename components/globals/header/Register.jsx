import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import Image from 'next/image';
import styles from "./Header.module.css";

export const Register = (props) => {
    
  return (
    <>
        <Modal.Header closeButton className="text-center" >
        <Image width={150} height={95} src="/basikLogo.png" alt="login" />             
          <h1>Create your account</h1>
          <Modal.Title>Already have an account? <button className="bg-transparent mt-0" onClick={() => props.changeToLogin()}>SIGN IN</button></Modal.Title> 
        </Modal.Header>       
        <Form className="loginRegister">
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="Enter your email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Enter your email*</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="text"
              placeholder="Create your Password"
            />
            <label htmlFor="floatingPasswordCustom">Create your Password*</label>
          </Form.Floating>
          <Button variant="primary" type="submit">
            Create Account
          </Button>
          <div className={`${styles.termCondition}`}>            
              <div className={`${styles.term01}`}>By clicking &quot;signup&quot; you agree to our</div>
              <a href="#" className={`${styles.term02}`}>Terms of Service</a> <div className={`${styles.term03}`}> &amp; </div>      
              <a href="#" className={`${styles.term04}`}>Privacy Policy</a>
          </div>
        </Form>
    </>
  )
}
