import React from "react";
import styles from "./Basik.module.css";
import Image from "next/image";
import { section, Carousel,Button } from "react-bootstrap";
import CandiateCard from "./CandiateCard";

export const BasikPrideSection = () => {
  return (
    <>
      <section className={`${styles.basikPrideSection}`}>
        <section className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="heading-box">
                <h1>Basik Pride</h1>
                <h4>
                  Every Student Matter to us and Basik Pride does is about
                  opening doors to students, graduates
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.basikMainfluid}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <section className="globalCarousel basikCarousel">
                  <Carousel>

                    <Carousel.Item indicators="false">
                      <div className="row">
                        <div className="col-sm-4 mb-3">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-01.png"
                            Name="Priyanka"
                            Designation="Account Executive"
                            Company="Edutra Consulting Services Pvt Ltd."
                          />
                        </div>
                        <div className="col-sm-4 mb-3 Carusla_mHide">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-02.png"
                            Name="Sachin Kumar"
                            Designation="Assistance Account Manager"
                            Company="Blackboard Education & Research Foundation"
                          />
                        </div>
                        <div className="col-sm-4 mb-3 Carusla_mHide">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-03.png"
                            Name="Nikhil Tiwari"
                            Designation="Assistance Account Executive"
                            Company="Edutra Consulting Services Pvt Ltd."
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item indicators="false">
                      <div className="row">
                        <div className="col-sm-4 mb-3 Carusla_mHide">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-01.png"
                            Name="Priyanka"
                            Designation="Account Executive"
                            Company="Edutra Consulting Services Pvt Ltd."
                          />
                        </div>
                        <div className="col-sm-4 mb-3">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-02.png"
                            Name="Sachin Kumar"
                            Designation="Assistance Account Manager"
                            Company="Blackboard Education & Research Foundation"
                          />
                        </div>
                        <div className="col-sm-4 mb-3 Carusla_mHide">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-03.png"
                            Name="Nikhil Tiwari"
                            Designation="Assistance Account Executive"
                            Company="Edutra Consulting Services Pvt Ltd."
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item indicators="false">
                      <div className="row">
                        <div className="col-sm-4 mb-3 Carusla_mHide">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-01.png"
                            Name="Priyanka"
                            Designation="Account Executive"
                            Company="Edutra Consulting Services Pvt Ltd."
                          />
                        </div>
                        <div className="col-sm-4 mb-3 Carusla_mHide">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-02.png"
                            Name="Sachin Kumar"
                            Designation="Assistance Account Manager"
                            Company="Blackboard Education & Research Foundation"
                          />
                        </div>
                        <div className="col-sm-4 mb-3 ">
                          <CandiateCard
                            Image="/Home/PlacementImage/candidate-03.png"
                            Name="Nikhil Tiwari"
                            Designation="Assistance Account Executive"
                            Company="Edutra Consulting Services Pvt Ltd."
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                   

                  </Carousel>
                </section>
              </div>
              <div className="col-sm-4 pt-5">
                <div className={`${styles.prideNumber}`}>
                  <h1>10,000</h1>
                  <h5>Trained</h5>
                </div>
                <div className={`${styles.prideNumber}`}>
                  <h1>8000</h1>
                  <h5>Placed</h5>
                </div>
              </div>

              <div className="col-md-12">
                  <div className={`${styles.basikRegisterContinaer}`}>
                      <h4 className={`${styles.txt01}`}>Register for placement, drop an email at info@basikacademy.com</h4>
                 
                      <Button variant="primary" size="lg" className="talkexpert-btn">Apply for a work Placements</Button>
              </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="studentCommentsSlider mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <Carousel.Caption>
                      <h5>
                        Found Everything I wanted and build my career in
                        accounting within on year from basik and my family are
                        really happy that am earning after 12th without spending
                        lot of money
                      </h5>
                      <Image
                        className="d-block"
                        src="/review-image-desktop.png"
                        alt="studentImage"
                        width={98}
                        height={98}
                      />
                      <p>Anushika sharma</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <h5>
                        Found Everything I wanted and build my career in
                        accounting within on year from basik and my family are
                        really happy that am earning after 12th without spending
                        lot of money
                      </h5>
                      <Image
                        className="d-block"
                        src="/review-image-desktop.png"
                        alt="studentImage"
                        width={98}
                        height={98}
                      />
                      <p>Anushika sharma</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <h5>
                        Found Everything I wanted and build my career in
                        accounting within on year from basik and my family are
                        really happy that am earning after 12th without spending
                        lot of money
                      </h5>
                      <Image
                        className="d-block"
                        src="/review-image-desktop.png"
                        alt="studentImage"
                        width={98}
                        height={98}
                      />
                      <p>Anushika sharma</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
};

export default BasikPrideSection;
