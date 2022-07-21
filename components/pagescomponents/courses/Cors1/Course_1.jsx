import React, { useState, useEffect } from "react";
import Header from "../../../globals/header/Header";
import CustomBanner from "../courseBanner/CustomBanner";
import HeadingContent from "../../../globals/headingContent/HeadingContent";
import KeyHighLight from "../KeyHighLight";
import GetCourse from "../GetCourseSection/GetCourse";
import TalkComponentGlobal from "../../../globals/talkExpertLink/TalkComponentGlobal";
import Footer from "../../../globals/footer/Footer";
import styles from "../Course.module.css";
import Image from "next/image";
import CourseContent from "../CourseContent";
import MasterVideo from "../../faculty/MasterVideo";
import Certificate from "../../../globals/certificate/Certificate";
import BasikCustomTab from "../../../globals/basiksPride/BasikCustomTab";
import Fees from "../../../globals/fees/Fees";
import { Container } from "react-bootstrap";

export const Course_1 = () => {
  const contents = [
    {
      header: "Module 1: Computer Application for Business-2",
      body: "MS Windows 10, MS-Word 2019, MS-Excel 2019, MS-PowerPoint 2019, Internet & E-Mail",
    },
    {
      header: "Module 2: Financial Accounting-2",
      body: "Module 2 Body",
    },
    {
      header: "Module 3: Tally Prime",
      body: "Module 3 Body",
    },
    {
      header: "Module 4: Indirect Tax -2 Goods & Service Tax (GST)",
      body: "Module 3 Body",
    },
    {
      header: "Module 5: Direct Tax-2",
      body: "Module 3 Body",
    },
    {
      header: "Module 6: Banking Law & Practices ",
      body: "Module 3 Body",
    },
    {
      header: "Module 7: English Communications & Personality Development",
      body: "Module 3 Body",
    },
  ];
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const [basicActive, setBasicActive] = useState("tab1");
  const handleBasicClick = (id) => {
    const element = document.getElementById(id);
    if (element === basicActive) {
      return;    
         
    }
 
    setBasicActive(element);
    
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop - 80,
    });

   
  };
  return (
    <>
      <Header />
      <CustomBanner
        banerImage="/banner/courses/3-years-course-banner-img.jpg"
        title01="Work Integrated Degree
        Program"
        title02="B-Voc in Bussiness Accounting and Taxation "
        title03="3 Years : Online"
        imgTitle="/course/staricon.png"
        title04="7686 Ratings"
        title05="4500+ Learners"
        title06="A first-ever course that integrates academic learning with its workplace application"
        VideoPath="/video/DirectTax.mp4"
      />
      <section>
        <header
          className={`${styles.stickyMenuContainer} ${
            show && "SticyMenuActive"
          } hidden`}
        >
          <div variant="pills" className={`${styles.menuName} me-auto`}>
            <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              Overview
            </div>
            <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              Benefits
            </div>
            <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              Syllabus
            </div>
            <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
            >
              Instructor
            </div>
            <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
            >
              Placement &amp; Reviews
            </div>
            <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab6")}
              active={basicActive === "tab6"}
            >
              Faqs
            </div>
            {/* <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
            >
              Certificate
            </div> */}
           
            {/* <div
              className={`${styles.nvNme}`}
              onClick={() => handleBasicClick("tab7")}
              active={basicActive === "tab7"}
            >
              Fees
            </div> */}
            
          </div>
        </header>
        <div className="courseStickyMenu">
          <div id="tab1" show={basicActive === "tab1"}>
            <section className={`${styles.sectionContent01} sectionGlobal`}>
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className={`${styles.box01}`}>
                      <HeadingContent
                        heading="About the <span>Course</span>"
                        pagragraph="<p>This is the first-ever 3 years
                   work integrated degree program. First year is blend of theory & practical knowledge 
                  based learning and Second & Third year 
                  is paid Apprenticeship/OJT in the industry.
                  thus, this programme builds 
                    a perfect platform to launch a career or upgrade it to the next level. </p>
                  
                  This course will sharpen the learners analytical 
                  skills and shall build an in-depth practical knowledge 
                  on core subjects like Modern Business 
                  Organization | Corporate tax planning | Entrepreneurship & Managerial skills
                   | Industrial Law | and more.The learner will also have an opportunity to 
                   earn while he/she pursue this course. After successful completion of this
                    course, a learner will be awarded a
                  Certificate by BASIK Academy and a Bachelor's Degree
                   in Finance & Accounts by a partner university."
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <KeyHighLight />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="tab2" show={basicActive === "tab2"}>
            <section
              className={`${styles.getCourseCont} sectionGlobal`}
              
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1>What do you get out of this course</h1>
                    <ul className={`${styles.getCoursList}`}>
                      <GetCourse
                        imageIcon="/course/01-icon.png"
                        textbox="Work Integrated Bachelor’s Degree "
                      />
                      <GetCourse
                        imageIcon="/course/6montCourse/02-icon.png"
                        textbox="Certificate by Basik Academy on Completion of First Year"
                      />
                      <GetCourse
                        imageIcon="/course/02-icon.png"
                        textbox="Earn while you Learn"
                      />
                      <GetCourse
                        imageIcon="/course/6montCourse/04-icon.png"
                        textbox="Apprenticeship/ OJT in the Industry"
                      />
                      <GetCourse
                        imageIcon="/course/03-icon.png"
                        textbox="Remodeled Employment Driven Career
                  Opportunity"
                      />
                      <GetCourse
                        imageIcon="/course/04-icon.png"
                        textbox="Develop Entrepreneurial Skills related
                  Banking & Finance"
                      />

                      <GetCourse
                        imageIcon="/course/05-icon.png"
                        textbox="Exposure to Tax Planning, Accounts 
                  Management, Tax, GST, and Industrial Law"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="tab3" show={basicActive === "tab3"}>
            <section
              className={`${styles.acordanContaner} ${styles.acordanContaner1} sectionGlobal`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 mt-3">
                    <div className={`${styles.lftBox}`}>
                      
                      <div>
                        <Image
                          width={550}
                          height={330}
                          src="/course/comson.png"
                          alt="mentor"
                        />
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={`${styles.rghtBox}`}>
                      <CourseContent />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="tab4" show={basicActive === "tab4"}>
            <section className={`${styles.masterVideo} masterVideo`}>
              <MasterVideo />
            </section>
          </div>
          {/* <div id="tab5" show={basicActive === "tab5"}>
            <section className={`${styles.CertificateBox}`}>
              <Certificate />
            </section>
          </div> */}
          <div id="tab5" show={basicActive === "tab5"}>
            <section className="basikCont sectionGlobal">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <BasikCustomTab />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <div id="tab7" show={basicActive === "tab6"}>
            <section className="sectionGlobal">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <Fees />
                  </div>
                </div>
              </div>
            </section>
          </div> */}
          <div id="tab6" show={basicActive === "tab6"}>
            <section className="aboutEnrollSection">
              <TalkComponentGlobal
                Heading="Want to see yourself Job-Ready? "
                buttonName="Enroll Now"
              />
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Course_1;
