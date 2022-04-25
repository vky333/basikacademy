import React from 'react';
import styles from './Section01.module.css';
import {section,Button} from 'react-bootstrap';
import HeadingContent from '../../../globals/headingContent/HeadingContent'

export const Section01 = () =>{
    return(
        <>
            <section className={`${styles.sectionContent01}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className={`${styles.box01}`}>                               
                                 <HeadingContent 
                                    heading="About Course" 
                                    pagragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                    distinctio nemo quis pariatur, ad incidunt.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                    distinctio nemo quis pariatur, ad incidunt.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Possimus ut quis earum provident. Neque, ipsa repudiandae! Voluptatem
                                    iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, ad incidunt." 
                                />
                               <Button variant="primary" size="lg" className={`${styles.viewCourseBtn} mt-3`}>View Course Semester</Button>
                            </div>
                        </div>
                        <div className='col-md-4'>

                            <h1>Key Highlights</h1>
                            <ul className={`${styles.keyBullets}`}>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing. </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing. </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Section01;