import React from 'react';
import {Carousel,section} from 'react-bootstrap';
import styles from './Banner.module.css';
import BannerTextImg from '../banner/BannerTextImg';
import BannerDetailContent from './BannerDetailContent';



const Banner = () => {

    const bannerContDynamic =[
        {
            id: 0,
            banImg:"/Home/ban/ban1.png",
            h1Text:"Your skills can determine your career path.",
            BtnOne:"Explore our programs",
            h3Text:"",
            h4Text:"",
            h5Text:"Start Learning "
        },
        {
            id: 1,
            banImg:"/Home/ban/ban2.png",
            h1Text:"Work Intergrated Degree Program Certified Finance Executive",
            BtnOne:"Explore our programs",
            h3Text:"",
            h4Text:"",
            h5Text:"Start Learning "
        },
        {
            id: 2,
            banImg:"/Home/ban/ban1.png",
            h1Text:"Certificate Program for Undergraduates",
            BtnOne:"Explore our programs",
            h3Text:"",
            h4Text:"",
            h5Text:"Start Learning "
        },
        {
            id: 3,
            banImg:"/Home/ban/ban2.png",
            h1Text:"Work Intergrated Degree Program Certified Finance Executive",
            BtnOne:"Explore our programs",
            h3Text:"",
            h4Text:"",
            h5Text:"Start Learning "
        },
        {
            id: 4,
            banImg:"/Home/ban/ban1.png",
            h1Text:"Your skills can determine your career path.",
            BtnOne:"Explore our programs",
            h3Text:"",
            h4Text:"",
            h5Text:"Start Learning "
        }
    ]            

    return ( 
    <section className='banerSection'>  
        <div className={`${styles.bannerContainer}`}>
            <Carousel fade>
                {bannerContDynamic.map(bannercard => 
                    <Carousel.Item key={bannercard.id}>
                        <BannerTextImg BannerTextCard={bannercard}/>
                    </Carousel.Item>
                )}              
            </Carousel>
            <BannerDetailContent/>           
        </div>
    </section>
    )
}

export default Banner;