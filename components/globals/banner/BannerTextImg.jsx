import React from "react";
import { Carousel, section, Button } from "react-bootstrap";
import styles from "./Banner.module.css";
import { Image } from "react-bootstrap";
import Link from "next/link";

export const BannerTextImg = (props) => {
  return (
    <>
      <Image      
        className={`${styles.banImage} zoom-in-zoom-out`}
        src={props.BannerTextCard.banImg}
        alt="First slide"
        width="1321"
        height="550"
      />
      <Carousel.Caption className={`${styles.bannerTextCont}`}>
        <h5>{props.BannerTextCard.h5Text}</h5>
        <h1>{props.BannerTextCard.h1Text}</h1>
        <div className={`${styles.banerBtnCont}`}>
          <Link href={props.BannerTextCard.anchorLink}>
            <a className={`${styles.enrolBtn}`}>
              {props.BannerTextCard.BtnOne}
            </a>
          </Link>
        </div>
      </Carousel.Caption>
    </>
  );
};

export default BannerTextImg;
