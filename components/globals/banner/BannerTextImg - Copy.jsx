import React from 'react';
import {Carousel,section} from 'react-bootstrap';
import styles from './Banner.module.css';
import Image from 'next/image';

export const BannerTextImg = () =>{
    return(
        <>            
            <img className="d-block w-100" src="/Home/ban/ban1.png" alt="First slide" />
            <Carousel.Caption className={`${styles.bannerTextCont}`}>
                <h5>Start Learning </h5>
                <h1>Your skills can determine your career path.</h1>
                <div className={`${styles.banerBtnCont}`}>
                    <div className={`${styles.enrolBtn}`}>Explore our programs</div>
                </div>
            </Carousel.Caption>
        </>
    )
}

export default BannerTextImg;