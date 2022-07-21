import React from "react";
import styles from "./Basik.module.css";
import Image from "next/image";
import { section, Carousel, Button } from "react-bootstrap";
import BasikCustomTab from "./BasikCustomTab";

export const BasikPrideSection = () => {
  return (
    <>
      <section
        className={`${styles.basikPrideSection} basikCont sectionGlobal`}
      >
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-box mb-5">
                <h1>
                Meet our <span>Learner&apos;s</span>
                  
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

export default BasikPrideSection;
