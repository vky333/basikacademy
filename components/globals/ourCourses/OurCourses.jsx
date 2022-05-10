import React from "react";
import styles from "./OurCourses.module.css";
import { Tab, Row, Col, Nav, section, Button } from "react-bootstrap";
import ProductsCarousel from "../productsCarousel/ProductsCarousel";
import HeadingContent from "../headingContent/HeadingContent";
import Image from "next/image";

const OurCourses = () => {
  return (
    <>
      <section className={`${styles.skillsBasedCont}`} id="skillsBx">
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.hdingBox} mb-5`}>
                <HeadingContent
                  heading="India's Most Progressive Skill-Based Vocational
                    Education Academy"
                  pagragraph="Dedicated to forming a fleible and opportunities-oriented education system for all."
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.fulWidth}`}>
          <div className="container">
            <h2 className={`${styles.title_ourcourse}`}>Our Courses</h2>
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col md={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <Image
                          className="d-block"
                          width={30}
                          height={30}
                          src="/course/icon-everything.png"
                          alt="Everything"
                        />
                        <span>Everything</span>
                      </Nav.Link>
                      <Nav.Link eventKey="second">
                        <Image
                          className="d-block"
                          width={35}
                          height={35}
                          src="/course/icon-degree.png"
                          alt="Career"
                        />
                        <span>Career Courses</span>
                      </Nav.Link>
                      <Nav.Link eventKey="third">
                        <Image
                          className="d-block"
                          width={35}
                          height={35}
                          src="/course/icon-diploma.png"
                          alt="ShortTerm"
                        />
                        <span>Short Term Certificfate Course</span>
                      </Nav.Link>                      
                    </Nav.Item>
                  </Nav>
                  <div className="overCorsBx">
                    <Button
                      variant="outline-primary"
                      size="lg"
                      className="viewBorderBtn"
                    >
                      Know More
                    </Button>
                  </div>
                </Col>
                <Col md={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <ProductsCarousel />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ProductsCarousel />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ProductsCarousel />
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
      </section>
    </>
  );
};

export default OurCourses;
