import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Banner.module.css";
import BannerTextImg from "../banner/BannerTextImg";
import BannerDetailContent from "./BannerDetailContent";

const Banner = () => {
  
  const bannerContDynamic = [
    {
      id: 0,
      banImg: "/banner/home/Homepage-banner-01.png",
      h1Text: "Your skills can determine your career path",
      BtnOne: "Explore our Programs",
      h5Text: "Start Learning ",
      anchorLink: "/course01",
    },
    {
      id: 1,
      banImg: "/banner/home/Homepage-banner-02.png",
      h1Text: `Get hands-on experience with the skills you just attained`,
      BtnOne: "Explore our Programs",
      h5Text: "Start Learning ",
      anchorLink: "/course02",
    },
    {
      id: 2,
      banImg: "/banner/home/Homepage-banner-03.png",
      h1Text: `Become future-ready with the Practical & Digital learning in BFSI`,
      BtnOne: "Explore our Programs",
      h5Text: "Start Learning ",
      anchorLink: "/course03",
    },
    
  ];
  
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setActiveSlide(selectedIndex);
  };
  return (
    <section className="banerSection">
      <div className={`${styles.bannerContainer}`}>
        <Carousel fade activeIndex={activeSlide} onSelect={handleSelect}>
          {bannerContDynamic.map((bannercard) => (
            <Carousel.Item key={bannercard.id}>
              <BannerTextImg BannerTextCard={bannercard} />
            </Carousel.Item>
          ))}
        </Carousel>
        <BannerDetailContent activeSlide={activeSlide} />
      </div>
    </section>
  );
};

export default Banner;
