import styles from './Header.module.css';
import Image from 'next/image';
import {Navbar,Container,Nav,header,Button} from "react-bootstrap";

const Header = () => {
  return (
    <>
    <header>
      <Navbar collapseOnSelect expand="lg" variant="light" className={`${styles.mainHeader} p-0`}>
          <Container fluid className='ps-0'>
          <Navbar.Brand className='p-0 headerLogo' href="#home">            
            <img src='/basikLogo.png' alt='BasikLogo'/>
          </Navbar.Brand>
          <div className='mobNav' onClick={openNav}>&#9776;</div>          
          <Button variant="primary" size="lg" className="exploreBtn exploreBtnDHide">Explore Skills</Button>
          <Navbar.Collapse id="responsive-navbar-nav">           
            <Nav className={`${styles.menuName} me-auto`}>
              <Nav.Link href="/Courses">Courses</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="#Faculty">Faculty</Nav.Link>
              <Nav.Link href="#Career">Career</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>              
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