import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Banner.module.css';
import BannerTextImg from '../banner/BannerTextImg';
import BannerDetailContent from './BannerDetailContent';

const Banner = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const bannerContDynamic = [
        {
            id: 0,
            banImg: "/Banners/Home/Homepage-banner-01.png",
            h1Text: "Your skills can determine your career path.",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 1,
            banImg: "/Banners/Home/Homepage-banner-02.png",
            h1Text: "Work Intergrated Degree Program Certified Finance Executive",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 2,
            banImg: "/Banners/Home/Homepage-banner-03.png",
            h1Text: "Certificate Program for Undergraduates",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 3,
            banImg: "/Banners/Home/Homepage-banner-04.png",
            h1Text: "Work Intergrated Degree Program Certified Finance Executive",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 4,
            banImg: "/Banners/Home/Homepage-banner-05.png",
            h1Text: "Your skills can determine your career path.",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        }
    ]

    return (
        <section className='banerSection'>

            <div className={`${styles.bannerContainer}`}>
                <Carousel onSelect={(selectedIndex, e) => setActiveSlide(selectedIndex)} fade>
                    {bannerContDynamic.map(bannercard =>
                        <Carousel.Item key={bannercard.id}>
                            <BannerTextImg BannerTextCard={bannercard} />
                        </Carousel.Item>
                    )}
                </Carousel>
                <BannerDetailContent activeSlide={activeSlide} />

            </div>
        </section>
    )
}

export default Banner;