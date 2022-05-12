import React from "react";
import { Carousel, section } from "react-bootstrap";
import styles from '../banner/Banner.module.css'
import Image from "next/image";

export const StaticBanner = (props) => {
  return (
    <>
      <section className={`${styles.staticBaner}`}>
        <Image
          className="d-block w-100"
          width={2000}
          height={830}
          src={props.BannerImage}
          alt="First slide"
        />
        <div className={`${styles.BannerTextContainer}`}>
          <h1>{props.Heading}</h1>
          <p>{props.Para}</p>
        </div>
      </section>
    </>
  );
};

export default StaticBanner;
