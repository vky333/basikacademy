import React from 'react';
import styles from './CourseBanner.module.css';
import {Button} from 'react-bootstrap';
import Image from 'next/image'

export const CourseBanner = () =>{
    return(
        <>
        <section className={`${styles.staticBanner}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <div className={`${styles.textBannerBox}`}>                   
                        <div>Remodeling Career Degree Program</div>
                        <h1>Work Intergrated Degree Program - Certified Finance Executive</h1>
                        <h3>3 Years: Online & Offline</h3>
                        <div className={`${styles.starCont}`}> 
                        <Image src="/aboutPage/staricon.png" alt='starIcon' width={100} height={16} /> <span>7686 Ratings</span> 268755 Learners
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                        <div className={`${styles.banerBtnCont}`}>                                                       
                            <Button variant="primary" size="lg">Enroll Now</Button>
                            <Button variant="outline-primary" size="lg">Know More</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CourseBanner;