import React from 'react';
import {section} from 'react-bootstrap';
import styles from '../about/About.module.css';

export const section03 = (props) =>{
    
    return(
        <>
            <section className={`${styles.aboutsection03}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>                       
                            <h1>Key Highlights</h1>
                            <ul className= {`${styles.getCoursList}`}>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default section03;


