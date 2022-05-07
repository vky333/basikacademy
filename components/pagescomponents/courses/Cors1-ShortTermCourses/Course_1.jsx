import React from "react";
import Header from "../../../globals/header/Header";
import CourseBanner from "../courseBanner/CustomBanner";
import HeadingContent from "../../../globals/headingContent/HeadingContent";
import KeyHighLight from "../KeyHighLight";
import GetCourse from "../GetCourseSection/GetCourse";
import ButtonContainer from "../acordianSection/ButtonContainer";
import CustomAccordian from "../acordianSection/CustomAccordian";
import LogosSection from "../logosContainer/LogosSection";
import StudentsReviewComents from "../studentsReviewComents/StudentsReviewComents";
import TalkComponentGlobal from "../../../globals/talkExpertLink/TalkComponentGlobal";
import Footer from "../../../globals/footer/Footer";
import styles from "../Course.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";


export const Course_1 = () => {
  const contents = [
    {
      header: "1. Certificate in Perfect Office (Duration 2 Months)",
      body: "MS Windows 10, MS-Word 2019, MS-Excel 2019, MS-PowerPoint 2019, Internet & E-Mail",
    },
    {
      header: "2. Certified MIS Executive (Duration 2 Months)",
      body: "Module 2 Body",
    },
    {
      header: "3. Certified Tally Prime Expert (Duration 2.5 Months)",
      body: "Module 3 Body",
    }
  ];
  return (
    <>    
      <Header />

      <CourseBanner
        banerImage="/Home/ban/shrtterm.png"
        title01="Short Term Professional Courses"
        title02="For Enhanced Practical
        Skill Development
        "
        title03="2-2.5 Months: Online & Offline "
        imgTitle="/aboutPage/staricon.png"
        title04="7686 Ratings"
        title05="268755 Learners"
        title06="Focused on tracking a vocation on a specialized subject."
      />


      <section className={`${styles.sectionContent01}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className={`${styles.box01}`}>
                <HeadingContent
                  heading="About Course"
                  pagragraph="
                  This is one of the Best Skill Fulfilment Courses in Finance which provides organized, formal and practical training on Accounting, Finance & Taxation. The course focuses on the measurement and reporting of the asset side of the
balance sheets as well as the measurement of revenues and expenses on income statements. The candidate also receives professional knowledge of Tally Prime which is advanced accounting software that is used to keep track of accounts. It helps records all types of accounting
including invoicing, receipt notes, inventory management, sale records, credit note, etc. 

The candidate also acquires an extensive understanding of all practical aspects of taxation. Last but not least, with the MS Office knowledge, the candidate can work in Office as Computer Operator, Computer Office
Administrator, etc.

                  "
                />
                <Button variant="primary" size="lg" className={`${styles.viewCourseBtn} mt-3`}>
                  View Course Semester
                </Button>
              </div>
            </div>
            <div className="col-md-5">
              <KeyHighLight />
            </div>
          </div>
        </div>
      </section>


      <section className={`${styles.getCourseCont}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>What you get out of this course</h1>
              <ul className={`${styles.getCoursList}`}>
                <GetCourse
                  imageIcon="/aboutPage/inDepthKnowledgeSkills.png"
                  textbox="In-depth knowledge & skills"
                />
                <GetCourse
                  imageIcon="/aboutPage/accountsDTGST.png"
                  textbox="Accounts | DT | GST | Tally | Excel & more"
                />
                <GetCourse
                  imageIcon="/aboutPage/entryLevelJobSuccess.png"
                  textbox="Entry-Level job success"
                />
                <GetCourse
                  imageIcon="/aboutPage/practicalComputeRisedApplications.png"
                  textbox="Practical & computerised applications"
                />
                <GetCourse
                  imageIcon="/aboutPage/certificateDiploma.png"
                  textbox="Certificate & Diploma = 2 Months
                  of Diploma Course"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.acordanContaner}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.lftBox}`}>
                <ButtonContainer />
                <h5 className={`${styles.hedingAcordian}`}>
                  <span>Short Term Professional Courses</span>
                  <span>Expand alll sections</span>
                </h5>
                <div className="mt-4">
                  <CustomAccordian contents={contents} />
                </div>
              </div>
              <div className={`${styles.rghtBox}`}>
                <Image
                  width={336}
                  height={671}
                  src="/aboutPage/image-02.png"
                  alt="mentor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogosSection />

      <StudentsReviewComents />

      <section className="aboutEnrollSection">
        <TalkComponentGlobal
          Heading="Want to see yourself Job-Ready"
          Button="Enroll Now"
        />
      </section>

      <Footer />
    </>
  );
};

export default Course_1;
