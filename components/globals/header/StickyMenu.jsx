import React, { useState ,useEffect  } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import {
  Navbar,
  Container,
  Nav, 
  NavItem, 
} from "react-bootstrap";

export const StickyMenu = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 300 ) {
      setShow(true)
        
    }else{
      setShow(false)
    }
}

useEffect(() => {
  window.addEventListener('scroll', controlNavbar)
  return () => {
      window.removeEventListener('scroll', controlNavbar)
  }
}, [])

  return (
    <header className={`${styles.stickyMenuContainer} ${show && 'SticyMenuActive'} hidden`}>
      <Navbar
        collapseOnSelect       
        variant="light"      
      >
        <Container>
          <Navbar>
            <Nav className={`${styles.menuName} me-auto`}>
              <NavItem>
                <Link href="/">
                  <a>Overview</a>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/">
                  <a>Benefits </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/">
                  <a>Syllabus</a>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/">
                  <a>Instructor</a>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/">
                  <a>Certificate</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/">
                  <a>Placement & Reviews</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/">
                  <a>Fees </a>
                </Link>
              </NavItem>              
              <NavItem>
                <Link href="/">
                  <a>Faqs</a>
                </Link>
              </NavItem>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </header>
  );
};

export default StickyMenu;
