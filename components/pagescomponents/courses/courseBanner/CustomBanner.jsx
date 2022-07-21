import React from "react";
import styles from "../Course.module.css";
import { Button } from "react-bootstrap";
import BannerBtnCont from "../courseBanner/BannerBtnCont";
import Image from "next/image";
import Video from "../../../globals/Video";

export const CustomBanner = (props) => {
  return (
    <>
      <section className={`${styles.staticBanner} banerSection`}>
        <div className={`${styles.bannerImageContainer}`}>
          <Image
            src={props.banerImage}
            alt="banerImage"
            width={1983}
            height={700}
          />
        </div>
        <section className={`${styles.textContainer}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.textBannerBoxx}`}>
                  <div>{props.title01}</div>
                  <h1 dangerouslySetInnerHTML={{ __html: props.title02 }}></h1>
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
                  <p dangerouslySetInnerHTML={{ __html: props.title06 }}></p>
                  <BannerBtnCont />
                  <div className={`${styles.banerVideo}`}>
                    <div className={`${styles.CourseBanVideoBox}`}>
                    <Video videoSrc={props.VideoPath} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default CustomBanner;
