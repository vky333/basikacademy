import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {Navbar,Container,Nav,header,Button} from "react-bootstrap";

const Header = () => {
  return (
    <>
    <header>
      <Navbar collapseOnSelect expand="lg" variant="light" className={`${styles.mainHeader} p-0`}>
          <Container fluid className='ps-0'>
          <Navbar.Brand className='p-0 headerLogo' href="/">            
            <Image width={200} height={130} src='/basikLogo.png' alt='BasikLogo'/>
          </Navbar.Brand>
          <div className='mobNav' onClick={openNav}>
            <div className='menuLine'></div>
            <div className='menuLine'></div>
            <div className='menuLine'></div>
            </div>          
          <Button variant="primary" size="lg" className="exploreBtn exploreBtnDHide">Explore Skills</Button>
          <Navbar.Collapse id="responsive-navbar-nav">           
            <Nav className={`${styles.menuName} me-auto`}>
              <Link href="/course">Courses</Link>
              <Link href="/about">About us</Link>
              <Link href="/faculty">Faculty</Link>
              <Link href="/career">Career</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact us</Link>              
            </Nav>
            <Nav className={`${styles.navRight}`}>
              <Nav.Link href="#" className={`${styles.logBtn}`}>Log In</Nav.Link>              
              <Button variant="primary" size="lg" className="exploreBtn mHide">Explore Skills</Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      </header>
    </>
  )
  function openNav() {
    var navAdd = document.getElementById("responsive-navbar-nav");
    navAdd.classList.toggle("navShow");
  }
  
 
  
}

export default Header