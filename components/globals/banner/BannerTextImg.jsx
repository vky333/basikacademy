import React from 'react';
import {Carousel,section,Button} from 'react-bootstrap';
import styles from './Banner.module.css';
import Image from 'next/image';


export const BannerTextImg = (props) =>{
    return(
        <>            
            <Image className="d-block w-100" width={2000} height={830} src={props.BannerTextCard.banImg} alt="First slide" />
            <Carousel.Caption className={`${styles.bannerTextCont}`}>
                <h5>{props.BannerTextCard.h5Text}</h5>
                <h1>{props.BannerTextCard.h1Text}</h1>
                <div className={`${styles.banerBtnCont}`}>                   
                    <Button variant="primary" size="lg" className={`${styles.enrolBtn}`}>{props.BannerTextCard.BtnOne}</Button>
                </div>
            </Carousel.Caption>
        </>
    )
}

export default BannerTextImg;