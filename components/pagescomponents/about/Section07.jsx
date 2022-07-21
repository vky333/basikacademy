import React from "react";
import HeadingContent from "../../globals/headingContent/HeadingContent";
import styles from "../about/About.module.css";
import Image from "next/image";

export const Section07 = () => {
  return (
    <>
      <section className={`${styles.section07} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className={`${styles.inrBox} col-md-5`}>
              <HeadingContent
                heading="Basik <span>Pedagogy</span>"
                pagragraph="BASIK Academy’s Training Methodology is aimed toward equipping the students with domain & platform skills thus
                enabling them to become employment ready. Student learns the subject, through case studies & real time
                projects & on job training candidate translates his learning to application 
                skill which is assesed by the subject matter expert and finally
                candidate is certfied."
              />
            </div>
            <div className="col-md-7">
              <div className={`${styles.chartImg}`}>
                <Image
                  src="/about/C6.png"
                  width={670}
                  height={670}
                  alt="chart"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section07;
