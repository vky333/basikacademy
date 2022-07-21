import React, { useState } from "react";
import Header from "../../globals/header/Header";
import Footer from "../../globals/footer/Footer";
import { Modal } from "react-bootstrap";
import HeadingContent from "../../globals/headingContent/HeadingContent";
import styles from "../placement/Placement.module.css";
import Image from "next/image";
import Employment from "../../../public/placement/placement1.png";
import Resume from "../../../public/placement/placement2.png";
import Enhancing from "../../../public/placement/placement3.png";
import Industry from "../../../public/placement/placement4.png";
import Studies from "../../../public/placement/placement5.png";
import { Form, Button, Row, Container, Col, Dropdown } from "react-bootstrap";
import CandiateCard from "../../globals/basiksPride/CandiateCard";
import CustomFormControl from "../../globals/CustomFormControl";

export const Student = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <section className={`${styles.studentBanner}`}>
        <Image
          className="d-block w-100"
          width={1983}
          height={700}
          src="/banner/placement/student.jpg"
          alt="First slide"
        />
        <div className={`${styles.bannerTextContainer}`}>
          <h2>Learn with Basik and Become Future Ready !</h2>
          <ul>
            <li>
              <b>100% Assistance</b> in Employment{" "}
            </li>
            <li>
              <b>Career Mentoring</b> &amp; Interview Preparation{" "}
            </li>
            <li>
              On <b>Job Mentoring</b> by Industry Players{" "}
            </li>
            <li>
              <b>Salary Packages</b> as per the Industry Standards
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.txtImageCont} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.boxContainer}`}>
                <div className={`${styles.lftContent}`}>
                  <HeadingContent
                    heading="Students"
                    pagragraph="
                    <p>
                      Our students have stints for themselves in various job
                      roles. The success of our placement assistance is quite
                      evident since 2005. We have got over 8000 students placed
                      in various BFSI industry roles.
                      </p>
                        "
                  />
                </div>
                <div className={`${styles.rgtImg}`}>
                  <Image
                    className="d-block w-100"
                    src="/placement/Students-img.png"
                    alt="mentor"
                    width={742}
                    height={531}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 py-sm-5" style={{ background: "#fbfbfb" }}>
        <Container>
          <Row>
            <Col sm={12}>
              <h1 className="mb-5">
                Our{" "}
                <span style={{ color: "#575de9" }}>Placement Assistance</span>
              </h1>
              <div className="d-flex flex-wrap">
                <div
                  className={`${styles.assis_main} position-relative d-flex align-items-center justify-content-center`}
                >
                  <div className="text-center">
                    <Image
                      src={Employment}
                      alt="Assistance in Employment"
                      height="65px"
                      width="65px"
                      style={{ filter: "brightness(0.3)" }}
                    />
                    <h5 className="mt-2">Assistance in Employment</h5>
                  </div>
                  <div
                    className={`${styles.assist_front} position-absolute p-3`}
                  >
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <Image
                        src={Employment}
                        alt="Assistance in Employment"
                        height="45px"
                        width="45px"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <h6 className="m-0">Assistance in Employment</h6>
                    </div>
                    <p>
                      {" "}
                      Basik Academy aims to provide industry relevant skill sets
                      which increase the chances of employment, candidates horns
                      their capabilities by adopting the validated skills from
                      industry experts. Our placement team continuously connects
                      with the potential employers for the employment of our
                      candidates
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.assis_main} position-relative d-flex align-items-center justify-content-center border-start-0`}
                >
                  <div className="text-center">
                    <Image
                      src={Resume}
                      alt="Resume Making Workshop"
                      height="65px"
                      width="65px"
                      style={{ filter: "brightness(0.3)" }}
                    />
                    <h5 className="mt-2">Resume Making Workshop</h5>
                  </div>
                  <div
                    className={`${styles.assist_front} position-absolute p-3`}
                  >
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <Image
                        src={Resume}
                        alt="Resume Making Workshop"
                        height="45px"
                        width="45px"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <h6 className="m-0">Resume Making Workshop</h6>
                    </div>
                    <p>
                      Resume gives first impression of the individual which
                      leaves lasting impression, we help our students to build
                      the synopsis of their experience to start their career
                      journey. We believe that good resume opens the doors of
                      opportunity{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.assis_main} position-relative d-flex align-items-center justify-content-center border-start-0`}
                >
                  <div className="text-center">
                    <Image
                      src={Enhancing}
                      alt="Enhancing Profile on Job Portals"
                      height="65px"
                      width="65px"
                      style={{ filter: "brightness(0.3)" }}
                    />
                    <h5 className="mt-2">Enhancing Profile on Job Portals</h5>
                  </div>
                  <div
                    className={`${styles.assist_front} position-absolute p-3`}
                  >
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <Image
                        src={Enhancing}
                        alt="Enhancing Profile on Job Portals"
                        height="45px"
                        width="45px"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <h6 className="m-0">Enhancing Profile on Job Portals</h6>
                    </div>
                    <p>
                      {" "}
                      We help our students to create remarkable impression and
                      leverage the social media to their benefit, it helps them
                      to create an endless pool of job opportunities and build
                      their network{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.assis_main} position-relative d-flex align-items-center justify-content-center border-start-0`}
                >
                  <div className="text-center">
                    <Image
                      src={Industry}
                      alt="On Job Mentoring by Industry Experts"
                      height="65px"
                      width="65px"
                      style={{ filter: "brightness(0.3)" }}
                    />
                    <h5 className="mt-2">
                      On Job Mentoring by Industry Experts
                    </h5>
                  </div>
                  <div
                    className={`${styles.assist_front} position-absolute p-3`}
                  >
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <Image
                        src={Industry}
                        alt="On Job Mentoring by Industry Experts"
                        height="45px"
                        width="45px"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <h6 className="m-0">
                        On Job Mentoring by Industry Experts
                      </h6>
                    </div>
                    <p>
                      Each student is unique, we provide personalized attention
                      and guidance to our students under the Industry Experts,
                      during the OJT students experience the learning and
                      practical learning with everyday work and fine tune it{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.assis_main} position-relative d-flex align-items-center justify-content-center border-start-0`}
                >
                  <div className="text-center">
                    <Image
                      src={Studies}
                      alt="Industry Projects &amp; Case Studies"
                      height="65px"
                      width="65px"
                      style={{ filter: "brightness(0.3)" }}
                    />
                    <h5 className="mt-2">
                      Industry Projects &amp; Case Studies
                    </h5>
                  </div>
                  <div
                    className={`${styles.assist_front} ${styles.after_delete} position-absolute p-3`}
                  >
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <Image
                        src={Studies}
                        alt="Industry Projects &amp; Case Studies"
                        height="45px"
                        width="45px"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <h6 className="m-0">
                        Industry Projects &amp; Case Studies
                      </h6>
                    </div>
                    <p>
                      We have learnt from our experience of two decades that
                      concepts are much clearer when you apply them, our learner
                      learns and trained on tools & practices that are actually
                      used in the industry
                    </p>
                  </div>
                </div>
                <div className={`${styles.registerBtn}`}>
                  <Button variant="primary" size="lg" onClick={handleShow}>
                    Register for Job
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles.studentPlacContainer} sectionGlobal`}>
        <div className="container">
          <div className="row studentpage">
            <h1 className="mb-5">
              Our <span>Alumni</span>
            </h1>
            <CandiateCard
              profileImg="/placement/01-Priyanka.png"
              name="Priyanka"
              degination="Account Executive"
              Company="Edutra Consulting Services Pvt. Ltd."
              hoverMg="/placement/01-Priyanka.png"
              hoverText="I belong to a middle class family
              my parents were worried about the expenses on 
              the professional degrees, I completed diploma 
              program which was pocket friendly. I learnt to 
              perform Tally Prime and other accounting soft wares. 
              I am very thankful to the team. "
            />

            <CandiateCard
              profileImg="/placement/02-Sachin.png"
              name="Sachin Kumar"
              degination="Assistant Accounts Manager"
              Company="Blackboard Education & Research Foundation"
              hoverMg="/placement/02-Sachin.png"
              hoverText="Basik Academy developed my professional skills 
              through Case studies, Capstone Projects & real world data sets.
               Today I am working as a Astt Manager Accounts with Blackboard 
               Education and Thanks to Basik Academy to making me
                attain this job position. "
            />

            <CandiateCard
              profileImg="/placement/03-Nikhil.png"
              name="Nikhil Tiwari"
              degination="Assistant Account Executive"
              Company="Edutra Consulting Services Pvt Ltd."
              hoverMg="/placement/03-Nikhil.png"
              hoverText="I was unaware about the career opportunities 
              after my XII result, I was from a Non Commerce and unsure 
              to pursue my career in accounts and finance. I joined the
               foundation program and gained the fundamental concept
                knowledge of accounts. "
            />
            <CandiateCard
              profileImg="/placement/04-Harish.png"
              name="Harish Bisht"
              degination="Sr. Account Executive"
              Company="Nirgul Infratech LLP"
              hoverMg="/placement/04-Harish.png"
              hoverText="I am really happy to learn from the expert 
              faculties of Basik Academy, they taught me so well 
              that all my concepts are clear and I am able to apply
               it at my workplace. Today I am proudly working as
                accounts professional with Nirgul. "
            />
            <CandiateCard
              profileImg="/placement/05-Bhavika.png"
              name="Bhavika Sood"
              degination="MIS Executive"
              Company="Sirus Buying Service "
              hoverMg="/placement/05-Bhavika.png"
              hoverText="Basik Academy was recommended by my friend,
               I opted for short-term course and found it helpful in 
               gaining my practical skills further I upgraded and 
               complete the Diploma Program, which was really helpful
                in boosting my career opportunities. "
            />
            <CandiateCard
              profileImg="/placement/07-Dimple.png"
              name="Dimple Rawat"
              degination="Data Analyst "
              Company="School of Executive Education "
              hoverMg="/placement/07-Dimple.png"
              hoverText="I choose Basik Academy with a dream to work
               with Big Companies as Accounts Professional and they 
               made my dream come true. I was guided by the counsellor
                to enrol under Diploma Program in Accounts & e-Taxation.
                 After course completion I got the job."
            />
            <CandiateCard
              profileImg="/placement/08-Liza.png"
              name="Liza Ojha"
              degination="Backend Operations-Taxation"
              Company="Revex Media "
              hoverMg="/placement/08-Liza.png"
              hoverText="I am so happy to share my experience.
               I enjoyed my career journey, I got full support
                from the team during my learning I have learnt
                 the concept of taxation and accounting software
                  from the expert faculties."
            />
            <CandiateCard
              profileImg="/placement/09-Madhu.png"
              name="Madhu"
              degination="Data Analytics & MIS"
              Company="Nexgen "
              hoverMg="/placement/09-Madhu.png"
              hoverText="Basik Academy is a best place for learning,
               through out my journey with the academy I was mentored 
               by the Industry Experts, I am thankful for the quality
                delivery and for the job placement at Nexgen."
            />
          </div>
        </div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen={fullscreen}
      >
        <Modal.Header closeButton>
          <Modal.Title className={`${styles.modalTitle}`}>
            Fill up form to get a placement.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#eee" }}>
          <div className="container">
            <div className="row">
              <Form className={`${styles.formBox}`}>
                <div className="row">
                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup01"
                      LabelName="First Name*"
                      InputType="text"
                      placeholderName="First Name"
                    />
                  </div>
                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup02"
                      LabelName="Last Name*"
                      InputType="text"
                      placeholderName="Last Name"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup03"
                      LabelName="Center Name*"
                      InputType="text"
                      placeholderName="Center Name*"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">
                        Course Completed*
                      </Form.Label>
                      <Form.Select id="disabledSelect" className="form-control">
                        <option>Select the Course</option>
                        <option>Certified Finance Executive</option>
                        <option>Diploma in Accounts &amp; e-Taxation</option>
                        <option>Computerized Accounts Executice</option>
                        <option>Tally Prime</option>
                        <option>Microsoft Office</option>
                        <option>Advance Excel &amp;amp; MIS </option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup05"
                      LabelName="Student ID"
                      InputType="text"
                      placeholderName="Student ID"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup06"
                      LabelName="Email ID"
                      InputType="email"
                      placeholderName="Email ID"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup07"
                      LabelName="Mobile Number"
                      InputType="text"
                      placeholderName="Mobile No"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup08"
                      LabelName="Course Completion Date"
                      InputType="date"
                      placeholderName="Course Completion Date"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">
                        Qualification
                      </Form.Label>
                      <Form.Select id="disabledSelect" className="form-control">
                        <option>Select the Qualification</option>
                        <option>XII Pass </option>
                        <option>Graduate </option>
                        <option>Post Graduate </option>
                        <option>Other Qualification</option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className="col-lg-4 mb-3">
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">
                        Subject Stream
                      </Form.Label>
                      <Form.Select id="disabledSelect" className="form-control">
                        <option>Select the Subject</option>
                        <option>Commerce</option>
                        <option>Non Commerce </option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup12"
                      LabelName="Experience if any"
                      InputType="text"
                      placeholderName="Experience if any"
                    />
                  </div>

                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup13"
                      LabelName="Preference Location"
                      InputType="text"
                      placeholderName="Preference Location"
                    />
                  </div>
                  <div className="col-lg-4 mb-3">
                    <CustomFormControl
                      Id="formGroup14"
                      LabelName="Address"
                      InputType="text"
                      placeholderName="Address"
                    />
                  </div>

                  <div className="col-md-8">
                    <Form.Group controlId="formGroup15">
                      <Form.Label>Message (If Any)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Type your message here."
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className={`${styles.contactBtn} text-left`}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
};

export default Student;
