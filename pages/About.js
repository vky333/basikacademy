import React from "react";
import Header from "../components/globals/header/Header";
import Footer from "../components/globals/footer/Footer";
import styles from "../components/pagescomponents/about/About.module.css"
import HeadingContent from "../components/globals/headingContent/HeadingContent";
import Section03 from "../components/pagescomponents/about/Section03";

import Section06 from "../components/pagescomponents/about/Section06";
import Section05 from "../components/pagescomponents/about/section05/Section05";
import Section07 from "../components/pagescomponents/about/Section07";
import { Section } from "react-bootstrap";

export default function about() {
  return (
    <>
      <Header />
      <section className={`${styles.aboutBanr}`}>
        <h1><b>BASIK ACADEMY</b></h1>
        <h5><b>Kare aapne sapno ko sakar</b></h5>
        </section>
      <section className="sectionGlobal aboutHding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <HeadingContent
                heading="We are <span>Basik Academy</span>"
                pagragraph="<p>
                Basik Academy is India’s most progressive vocational skill academy founded in Yr. 2019 by the founders of Institute of Computer & Finance Executives (ICFe) which was founded in Yr.2005, imparted Vocational Training to aspirants looking for aspiring career in the field of Accounts & Finance. Over 10000 Learner were trained and 8000 Learners were employed in mid and large size companies.
                </p>
                <p>
                Basik Academy observed a striking disparity between the required professional
                 skill sets & the existing academic skill sets & strived to seamlessly bridge the gap.
                  We help students develop industry-relevant skill sets through experiential 
                  learning – with programs designed & delivered by industry experts.
                </p>
                <p>
                    <h4><b>Why Us ?</b> </h4>
                    <p>
                      With over 2 decades of professional experience BASIK
                      Academy has designed it’s training methodology aiming
                      toward equipping the students with domain & platform
                      skills thus enabling them to become employment ready.
                      Student learns the subject, through case studies & real
                      time projects & on job training candidate translates his
                      learning to application skill which is assessed by the
                      subject matter expert and finally candidate is certified.
                    </p>
                  </p>
                  <p> <h4><b>And You know this</b> </h4>
                  <p>
                    Experiential learning is the key to transforming careers.
                    Ever Since the goal has been to bridge the gap between the
                    Industry demand and Existing skill set, by using
                    experiential learning to train candidates & help them
                    become competent leaders
                  </p></p>
                  <p><h4><b>We are the Change Makers</b> </h4>
                  <p>
                    BASIK’s key aim is the Vocationalisation of the Education
                    system with an objective to enhance skills of the youth
                    across the country and empower them with livelihood linked
                    vocational and skilling programs. We Create, Provide &
                    Foster Inspiring Career for Learners... BASIK believes
                    bridging the skill gap as required by Industries.
                  </p></p>
                  
                  "
              />
            </div>
          </div>
        </div>
      </section>
      <Section03 />
  
      <Section06 />
      <Section07 />
      <Section05 />
     
      <Footer />
    </>
  );
}
