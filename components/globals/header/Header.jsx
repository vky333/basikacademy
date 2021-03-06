import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
//import { IoIosArrowUp } from "react-icons/io";
import Head from "next/head";
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
import { Register } from "./Register";
import { Login } from "./Login";

const Header = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [FormBox, setFormBox] = useState('login');
  

  return (
    <>
      <Head>
        <title>Basik Academy</title>
        <meta name="description" content="Generated by create next app" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.menuHeader}`}>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          className={`${styles.mainHeader} p-0`}
        >
          <Container fluid className="ps-0">
            <Navbar.Brand className="p-0 headerLogo" href="/">
            <Image
                width={150} height={90}
                src="/basikLogo.png"
                alt="BasikLogo"
              />
            </Navbar.Brand>
            <div className="mobNav" onClick={openNav}>
              <div className="menuLine"></div>
              <div className="menuLine"></div>
              <div className="menuLine"></div>
            </div>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`${styles.menuName} me-auto`}>
                <NavItem>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </NavItem>
                <NavDropdown title="Courses" id="courses-nav-dropdown">
                  <Nav className="dropDownTab">
                    <Link href="/course01">
                      <a>B-Voc in Bussiness Accounting and Taxation</a>
                    </Link>
                    <Link href="/course02">
                      <a>Accounts &amp; e -Taxation</a>
                    </Link>
                    <Link href="/course03">
                      <a>Certified Accounts Executive</a>
                    </Link>
                    <Link href="/course04">
                      <a>Accounting Software Applications</a>
                    </Link>
                  </Nav>
                </NavDropdown>

                <NavItem>
                  <Link href="/about">
                    <a>Our Story</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/faculty">
                    <a>Faculty</a>
                  </Link>
                </NavItem>

                <NavDropdown title="Placements" id="placement-nav-dropdown">
                  <Nav className="dropDownTab">
                    <Link href="/student">
                      <a>Students Placement</a>
                    </Link>
                    <Link href="/conslutent">
                      <a>Employer </a>
                    </Link>
                  </Nav>
                </NavDropdown>
                <NavItem>
                  <Link href="/blog">
                    <a>   Knowledge Center</a>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/contact">
                    <a>Contact us</a>
                  </Link>
                </NavItem>
              </Nav>

              <Nav className={`${styles.navRight}`}>
                <Nav.Link
                  href="#"
                  className={`${styles.logBtn}`}
                  onClick={handleShow}
                >
                  Sign In
                </Nav.Link>
                <Nav.Link href="/suggest" className={`${styles.logBtn}`}>
                  Looking for a Job?
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Modal
        show={show}
        onHide={handleClose}
        className="loginContainer talkContainer"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen={fullscreen}
      >
        <Modal.Body style={{width: "100%"}}> 
          {FormBox === 'login' ? <Login changeToRegister={() => setFormBox('register')} /> : <Register changeToLogin={() => setFormBox('login')} /> }
        </Modal.Body>
      </Modal>
    </>
  );
  function openNav() {
    var navAdd = document.getElementById("responsive-navbar-nav");
    navAdd.classList.toggle("navShow");
  }
};

export default Header;
