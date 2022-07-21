import React from "react";
import BasikCustomTab from "../../globals/basiksPride/BasikCustomTab";
import styles from "../webinar/Webinar.module.css";
import WebinarCard from "./WebinarCard";
import Image from "next/image";

export const Webinar = () => {
  return (
    <>
      <section className="webinarContainer banerSection">
        <section className={`${styles.bannerSection}`}>
          <Image
            className="d-block"
            width={54}
            height={54}
            src="/icons/rightIcon.png"
            alt="rightIcon"
          />
          <h1>Thank You!</h1>
          <p>Our Senior Counsellor Will Get Back To You Shortly</p>
        </section>
      </section>
      <section className={`${styles.section01}`}>
        <WebinarCard />
      </section>
      <section
        className={`${styles.basikPrideSection} basikCont sectionGlobal`}
      >
        <section className="container mb-3">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-box mb-5">
                <h1>
                  Basik Academy’s <span>Prime Placements</span>
                </h1>
                <h4>
                  Basik Academy has dedicated placement cell to function
                  throughout the year for generating suitable employment
                  opportunities for our trained students in the industry.
                </h4>
              </div>

              <BasikCustomTab />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Webinar;
