import React from "react";
import { section } from "react-bootstrap";
import styles from "../about/About.module.css";
import Image from "next/image";

export const section03 = (props) => {
  return (
    <>
      <section className={`${styles.aboutsection03} aboutsecton03 sectionGlobal`}>
        <div className={`${styles.borderTopBtm} container`}>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.lftBox}>                
                <div className={styles.btmBox}>                  
                  <Image
                    src="/about/c10.png"
                    width={600}
                    height={397}
                    alt="CEO"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
            <div className={styles.rgtBox}> 
              <h1>Message from <span className="blueColor">CEO&apos;s Desk </span> </h1>
              <h5>
                I take this opportunity to thank you for showing your interest in BASIK Academy. We
                have been providing quality education to the learners from 10+2/Undergraduate (any
                stream) in the field of Accounts, Finance, Taxation for the
                past 20 years. Over 10000 learners have been certified and over
                8000 learners have been placed in Banking, Finance, Insurance
                Industries (BFSI) ever since we started our journey in education
                and training. 
              </h5>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section03;
