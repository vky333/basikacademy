import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowUp} from 'react-icons/io';
import {
  Navbar,
  Container,
  Nav,
  header,
  Button,
  NavDropdown,
  NavItem,
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
                <NavItem className='dropDownContainer'>
                <Link href=""><a className='dropTab'>Courses</a></Link>
                <Nav className='dropDownTab'>
                <Link href="/shortTermProfessional"><a>Short Term Professional Courses</a></Link>
                <Link href="/backend_Accounts_Executive"><a>Backend Accounts Executive</a></Link>
                <Link href="/backend_finance_executive"><a>Backend Finance Executive</a></Link>
                <Link href="/real_time_accountant"><a>Real Time Accountant</a></Link>
                <Link href="/certified_finance_executive"><a>Certified Finance Executive</a></Link>
              </Nav>
              </NavItem>
              <NavItem>
                <Link href="/about"><a>About us</a></Link></NavItem>
                <NavItem>
                <Link href="/faculty"><a>Faculty</a></Link></NavItem>
                <NavItem className='dropDownContainer'>
                <Link href=""><a className='dropTab'>Placement</a></Link>
                <Nav className='dropDownTab'>
                <Link href="/Students"><a>Students</a></Link>
                <Link href="/consultant"><a>Consultant</a></Link>
               
              </Nav>
              </NavItem>  
                <NavItem><Link href="/blog"><a>Blog</a></Link></NavItem>
                <NavItem><Link href="/contact"><a>Contact us</a></Link></NavItem>
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
