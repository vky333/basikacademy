import React from 'react';
import styles from '../blog/Blog.module.css';
import {Form,Button} from'react-bootstrap'

export const StayCard = (props) => {
  return (
    <>
        <aside className={`${styles.styaCard} mb-3 `}>
            <h5>Stay Up To Date With Us </h5>
            <p className='mb-3'>Be the first to know about new class launches and announcements.</p>
            <div className='emailContainer'>
                <Form>
                    <Form.Group className='mb-4' controlId="formBasicEmail">                    
                        <Form.Control type="email" placeholder="Email Address*" />                    
                    </Form.Group>                
                    <Button variant="primary" type="submit">
                        Subscribe
                    </Button>
                </Form>
                <div className={`${styles.para01}`}>By clicking subscribe, you agree to our <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Services</a></div>
            </div>

        </aside>
    </>
  )
}

export default StayCard
