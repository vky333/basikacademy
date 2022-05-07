import React from "react";
import styles from '../Course.module.css'
import { Button } from "react-bootstrap";
import BannerBtnCont from "../courseBanner/BannerBtnCont";
import Image from "next/image";

export const CustomBanner = (props) => {
  return (
    <>
      <section className={`${styles.staticBanner}`}>
      <div className={`${styles.bannerImageContainer}`}>
        <Image
          src={props.banerImage}
          alt="banerImage"          
          width={2000}
          height={831}
        />
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.textBannerBox}`}>
                <div>{props.title01}</div>
                <h1>{props.title02}</h1>
                <h3>{props.title03}</h3>
                <div className={`${styles.starCont}`}>
                  <Image
                    src={props.imgTitle}
                    alt="starIcon"
                    width={100}
                    height={16}
                  />
                  <span>{props.title04}</span> {props.title05}
                </div>
                <p>
                  {props.title06}
                </p>
                <BannerBtnCont />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomBanner;
