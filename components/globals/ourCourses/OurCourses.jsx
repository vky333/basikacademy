import React from 'react';
import styles from './OurCourses.module.css'; 
import {Tab, Row, Col, Nav,section,Button} from 'react-bootstrap';
import ProductsCarousel from '../productsCarousel/ProductsCarousel';
import HeadingContent from '../headingContent/HeadingContent';

const OurCourses = () => {
    return (        
        <>
        <section className={`${styles.skillsBasedCont}`} id="skillsBx">
        <section className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                            <div className={`${styles.hdingBox} mb-5`}>  
                <HeadingContent 
                    heading="India's Most Progressive Skill-Based Vocational
                    Education Academy" 
                    pagragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus ut quis earum provident. Neque, ipsa repudiandae! Voluptatem
                    iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, 
                    ad incidunt.India's Most Progressive Skill-Based Vocational Education AcademyLorem ipsum dolor, 
                    sit amet consectetur adipisicing elit.
                    Possimus ut quis earum provident. Neque, ipsa repudiandae! Voluptatem
                    iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, 
                    ad incidunt.India's Most Progressive Skill-Based Vocational Education Academ" 
                />
                </div>
                </div>
                </div>
                </section>
                <section className={`${styles.fulWidth}`}>
                    <div className='container'>
                <h2 className={`${styles.title_ourcourse}`}>Our Courses</h2>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col md={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first"><span><img className="d-block" width="35" src = "/course/icon-everything.png" alt = "Everything" /></span>Everything</Nav.Link>
                            <Nav.Link eventKey="second"><span><img className="d-block" width="35" src = "/course/icon-degree.png" alt = "DegreeCourses"/></span>Degree Courses</Nav.Link>
                            <Nav.Link eventKey="third"><span><img className="d-block" width="35" src = "/course/icon-diploma.png" alt = "DiplomaCourses"/></span>Diploma Courses</Nav.Link>
                            <Nav.Link eventKey="four"><span><img className="d-block" width="35" src = "/course/icon-short-term-certificate.png" alt = "ShortTermCertificate" /></span>Short Term Certificate Courses</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <div class="overCorsBx"><Button variant="outline-primary" size="lg" className="viewBorderBtn">Know More</Button></div>
                        
                        </Col>
                        <Col md={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <ProductsCarousel/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <ProductsCarousel/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <ProductsCarousel/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                            <ProductsCarousel/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                    </div>
                </section>





            </section>
        </>
    )
}

export default OurCourses