import React, { useState } from "react";
import styles from "./OurCourses.module.css";
import { Tab, Row, Col, Nav, section } from "react-bootstrap";
import HeadingContent from "../headingContent/HeadingContent";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProductsCard from "../../globals/ourCourses/ProductsCard";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

export const OurCourses = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section
        className={`${styles.skillsBasedCont} sectionGlobal`}
        id="skillsBx"
      >
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.hdingBox} mb-5`}>
                <h1>India’s Most Progressive Skill Academy</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.fulWidth}`}>
          <div className="container">
            <div className={`${styles.hdingsection}`}>
              <h1 className={`${styles.title_ourcourse} text-center`}>
                Our <span>Courses</span>
              </h1>
              <h5>Get Certified, Get Ahead with Our Programs</h5>
              <ul>
                <li>
                  <Image
                    className="d-block"
                    width={15}
                    height={15}
                    src="/icons/icon1.png"
                    alt="Career"
                  />
                  <span>Master Classes from University</span>
                </li>
                <li>
                  <Image
                    className="d-block"
                    width={15}
                    height={15}
                    src="/icons/icon1.png"
                    alt="Career"
                  />
                  <span>Career Support</span>
                </li>
              </ul>
            </div>
            <Tab.Container defaultActiveKey="second">
              <Row>
                <Col md={3}>
                  <Nav
                    variant="pills"
                    className="flex-column mb-3 tabOverCourse"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <Image
                          className="d-block"
                          width={35}
                          height={35}
                          src="/Home/icon-degree.png"
                          alt="Career"
                        />
                        <span>Career Courses</span>
                      </Nav.Link>
                      <Nav.Link eventKey="third">
                        <Image
                          className="d-block"
                          width={35}
                          height={35}
                          src="/Home/icon-diploma.png"
                          alt="ShortTerm"
                        />
                        <span>Short Term Courses</span>
                      </Nav.Link>
                      <Nav.Link eventKey="forthTbx">
                        <Image
                          className="d-block"
                          width={35}
                          height={35}
                          src="/Home/nC.png"
                          alt="ShortTerm"
                        />
                        <span>Bridge Course </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="second">
                      <div className="row">
                        <div className="col-md-4 mb-3 position-relative">
                          <ProductsCard
                            CardImg="/course/course-image-1.png"
                            Title01="Work Integrated Degree Program"
                            Title02="B-Voc in Bussiness Accounting and Taxation"
                            Pagragraph="A first-ever course that integrates academic
                            learning with its workplace application "
                            title04="7686 Ratings"
                            title05="4500+ Learners"
                            NoYear="3 Years: Online"
                            ALink="/course01"
                            AncrName="Know More"
                          />
                          <div
                            className={`${styles.infoButton}`}
                            variant="primary"
                            onClick={handleShow}
                          >
                            <Image
                              className="d-block"
                              width={20}
                              height={20}
                              src="/ibutton.png"
                              alt="ShortTerm"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 position-relative">
                          <ProductsCard
                            CardImg="/course/course-image-2.png"
                            Title01="Career Advancing Diploma"
                            Title02="Accounts & e-Taxation"
                            Pagragraph="An in-depth conceptual knowledge and
                            application skills in the field of
                            Accounting & Finance "
                            title04="6996 Ratings"
                            title05="3500+ Learners"
                            NoYear="1 Year: Online"
                            ALink="/course02"
                            AncrName="Know More"
                          />
                          <div
                            className={`${styles.infoButton}`}
                            variant="primary"
                            onClick={handleShow}
                          >
                            <Image
                              className="d-block"
                              width={20}
                              height={20}
                              src="/ibutton.png"
                              alt="ShortTerm"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 position-relative">
                          <ProductsCard
                            CardImg="/course/course-image-3.png"
                            Title01=" Workbench integrated Certificate Program"
                            Title02="Certified Computerized Accounts Executive"
                            Pagragraph="Focused on practical knowledge of core
                            aspects of day to day business accounting"
                            title04="5000 Ratings"
                            title05="2000+ Learners"
                            NoYear="6 Months: Online"
                            ALink="/course03"
                            AncrName="Know More"
                          />
                          <div
                            className={`${styles.infoButton}`}
                            variant="primary"
                            onClick={handleShow}
                          >
                            <Image
                              className="d-block"
                              width={20}
                              height={20}
                              src="/ibutton.png"
                              alt="ShortTerm"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <ProductsCard
                            CardImg="/course/course-image-4.png"
                            Title01="Skill Enhancement Program"
                            Title02="MICROSOFT OFFICE"
                            Pagragraph="An in-depth knowledge of MS Office, 
                            means you can make better presentations, use more 
                            features in Word & Excel and thus make your mark 
                            on work in your style."
                            title04="6590 Ratings"
                            title05="3900+ Learners"
                            NoYear="Duration 2 Months"
                            ALink="/course04"
                            AncrName="Know More"
                          />
                          <div
                            className={`${styles.infoButton}`}
                            variant="primary"
                            onClick={handleShow}
                          >
                            <Image
                              className="d-block"
                              width={20}
                              height={20}
                              src="/ibutton.png"
                              alt="ShortTerm"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <ProductsCard
                            CardImg="/course/course-image-5.png"
                            Title01="Skill Enhancement Program"
                            Title02="ADVANCE EXCEL & MIS"
                            Pagragraph="Advance Excel allows one to organise the gathered data, 
                            analyse, interpret, and present the information in an easily 
                            understandable form. Thus, for Employability perspective it
                             sharpens skills sets, improve efficiency & Productivity"
                            title04="5890 Ratings"
                            title05="2900+ Learners"
                            NoYear="Duration 2 Months"
                            ALink="/course04"
                            AncrName="Know More"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <ProductsCard
                            CardImg="/course/course-image-6.png"
                            Title01="Skill Enhancement Program"
                            Title02="TALLY PRIME"
                            Pagragraph="Tally Prime is considered to be a Reliable, 
                            Efficient, Secure & Future Ready Accounting Software & is most 
                            popular Accounting Software in Business Industry for doing 
                            all Accounting works, Banking Transactions & Auditing."
                            title04="4980 Ratings"
                            title05="2499+ Learners"
                            NoYear="Duration 2 Months"
                            ALink="/course04"
                            AncrName="Know More"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="forthTbx"
                      className={`${styles.highliterContent}`}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <Image
                            className={`${styles.invatedComaLeft}`}
                            width={80}
                            height={44}
                            src="/CLM_1.png"
                            alt="Career"
                          />
                          Fundamentals of Business & Accounting sessions are
                          applicable for students from Non Commerce background
                          to build their foundation in Business & Accounting,
                          thus makes them ready to study the main curriculum
                          viz. Accounts , Finance & Taxation
                          <div className={`${styles.invatedComaRgt}`}>
                            <Image
                              width={80}
                              height={44}
                              src="/CLM_2.png"
                              alt="Career"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Bridge Course </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Fundamentals of Business & Accounting sessions are applicable for
            students from Non Commerce background to build their foundation in
            Business & Accounting, thus makes them ready to study the main
            curriculum viz. Accounts , Finance & Taxation
          </Modal.Body>
          
        </Modal>
      </section>
    </>
  );
};

export default OurCourses;
