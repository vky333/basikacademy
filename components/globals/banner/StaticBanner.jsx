import React from "react";
import styles from "../banner/Banner.module.css";
import Image from "next/image";

export const StaticBanner = (props) => {
  return (
    <>
    <section className={`${styles.bannerSection} banerSection`}>  
      <Image
        className="d-block w-100"
        width={1983}
        height={700}
        src={props.BannerImage}
        alt="First slide"
      />
      <div className={`${styles.BanerTextBox} text-left`}>
        <h1>{props.Heading}</h1>
        <p>{props.Para}</p>
      </div>
      </section>
    </>
  );
};

export default StaticBanner;
