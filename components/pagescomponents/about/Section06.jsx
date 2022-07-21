import React from "react";
import Image from "next/image";
import styles from "../about/About.module.css";

export const Section06 = () => {
  return (
    <>
      <section className={`${styles.section06} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                Our<span className="blueColor"> Core Values</span>
              </h1>
              <ul>
                <li>
                  <Image
                    src="/about/c8.png"
                    width="151"
                    height="140"
                    alt="value"
                  />
                  <div className={`${styles.contBox}`}>
                    <h4>Trust</h4>
                    <p>
                      BASIK Academy is coming from an organization with 20+
                      years of experience in vocational education delivery.
                    </p>
                  </div>
                </li>
                <li>
                  <Image
                    src="/about/c7.png"
                    width="151"
                    height="140"
                    alt="value"
                  />
                  <div className={`${styles.contBox}`}>
                    <h4>Optimism</h4>
                    <p>
                      BASIK Academy&apos;s value proposition is based on the
                      emotion of optimism among students that they can get a
                      sustainable job.
                    </p>
                  </div>
                </li>
                <li>
                  <Image
                    src="/about/c11.png"
                    width="151"
                    height="140"
                    alt="value"
                  />
                  <div className={`${styles.contBox}`}>
                    <h4>Future-Focused</h4>
                    <p>
                      BASIK Academy is working for preparing their students for
                      coming years so they are not left behind.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section06;
