import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  header,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          className={`${styles.mainHeader} p-0`}
        >
          <Container fluid className="ps-0">
            <Navbar.Brand className="p-0 headerLogo" href="/">
              <Image
                width={607}
                height={360}
                src="/basikLogo.png"
                alt="BasikLogo"
              />
            </Navbar.Brand>
            <div className="mobNav" onClick={openNav}>
              <div className="menuLine"></div>
              <div className="menuLine"></div>
              <div className="menuLine"></div>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="exploreBtn exploreBtnDHide"
            >
              Explore Skills
            </Button>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`${styles.menuName} me-auto`}>
                <NavDropdown title="Courses" id="Pillow">
                  <NavDropdown.Item className={`${styles.dropDonwItem}`}>
                    <Link href="/shortTermProfessional">Short Term Professional Courses</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.dropDonwItem}`}>
                    <Link href="/backend_Accounts_Executive">Backend Accounts Executive</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.dropDonwItem}`}>
                    <Link href="/backend_finance_executive">Backend Finance Executive</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.dropDonwItem}`}>
                    <Link href="/real_time_accountant">Real Time Accountant</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.dropDonwItem}`}>
                    <Link href="/certified_finance_executive">Certified Finance Executive</Link>
                  </NavDropdown.Item>
                 
                </NavDropdown>
                <Link href="/about">About us</Link>
                <Link href="/faculty">Faculty</Link>

                <NavDropdown title="Placement" id="Pillow">
                  <NavDropdown.Item
                    href="/placement"
                    className={`${styles.dropDonwItem}`}
                  >
                    <Link href="/Students">Students</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action"
                    className={`${styles.dropDonwItem}`}
                  >
                    <Link href="/Counslor">Counslor</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact us</Link>
              </Nav>
              <Nav className={`${styles.navRight}`}>
                <Nav.Link href="#" className={`${styles.logBtn}`}>
                  Log In
                </Nav.Link>
                <Button
                  variant="primary"
                  size="lg"
                  className="exploreBtn mHide"
                >
                  Explore Skills
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
  function openNav() {
    var navAdd = document.getElementById("responsive-navbar-nav");
    navAdd.classList.toggle("navShow");
  }
};

export default Header;
