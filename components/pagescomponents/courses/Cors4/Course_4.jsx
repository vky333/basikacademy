import React, { useState, useEffect } from "react";
import Header from "../../../globals/header/Header";
import CourseBanner from "../courseBanner/CustomBanner";
import HeadingContent from "../../../globals/headingContent/HeadingContent";
import KeyHighLight from "../KeyHighLight";
import GetCourse from "../GetCourseSection/GetCourse";
import ButtonContainer from "../acordianSection/ButtonContainer";
import CustomAccordian from "../acordianSection/CustomAccordian";
import TalkComponentGlobal from "../../../globals/talkExpertLink/TalkComponentGlobal";
import Footer from "../../../globals/footer/Footer";
import styles from "../Course.module.css";
import CourseContent from "../CourseContent";
import MasterVideo from "../../faculty/MasterVideo";
import Certificate from "../../../globals/certificate/Certificate";
import BasikCustomTab from "../../../globals/basiksPride/BasikCustomTab";
import Fees from "../../../globals/fees/Fees";
import { Container } from "react-bootstrap";

export const Course_4 = () => {
  const contents = [
    {
      header: "Computer Applications - (Duration- 02 months)",
      body: `
      <p><b>Microsoft Office 2019</b></p> 
      <div><b>MS-Word 2019</b></div>
      <p>QAT & Its Options, File Setup, Creation & Formatting, 
      Working with Tabs & Columns, TOC, Hyperlink, Bookmark, 
      Tracking, Table, Invoice Format with Draw Table, Formulas 
      in Table, Mail Merge, File Protection, Macros, Exporting 
      Docs in PDF & Other Format, Converting PDF to Doc, 
      Printing of document.<br><b class="color1">Practical Assignment</b></p>

      <div><b>MS-Excel 2019</b></div>
      <p>ntro, Working with Row, Column, Worksheet, Formatting 
      Row, Column, Worksheet, Name Manager, Formula Library, 
      Different Types of Chart Formation, Auditing, Math 
      Functions, Statistical Functions, Text Functions, Date & 
      Time Functions, Logical Functions, Lookup Functions 
      (Vlookup / Hlookup), Consolidate, Group / Ungroup, Data 
      Table, Goal Seek, Scenario, Sort & Filter, File Protection, 
      Printing of Row Headings on Each Page, Printing of 
      Documents.<br><b class="color1">Practical Assignment</b></p>     
      <div><b>MS-PowerPoint 2019</b></div>
      <p>Creation of Presentation, UsingTemplate, Inserting 
      /Deleting /Moving Slides in a Presentation, Duplicate a Slide, 
      Inserting Word Table / Excel Worksheet / Chart, Adding Clip 
      Art Pictures, Working with Colour, Creating Hyperlink Slide, Slides Setup, Adding Audio / Video, Setting of 
      Animation, Presentation of Slides, Transition, Slide Timings
      and Printing of Slides.<br> <b class="color1">Practical Assignment</b></p>

      <div><b>Internet & E-Mail</b></div>
      <p>Introduction of Internet & E-mail, Local Area Network (LAN), 
      Wide Area Network (WAN), World Wide Web & Websites, Web 
      Browsing Software, Search Engines, Downloading from 
      Websites, Basics of E-Mail, Email Account Creation, 
      Composing, Sending, Receiving E-mail, Sending Softcopy as 
      Attachment, Forwarding of Mail, Deleting Mail, Handling 
      Trash, Spam and Printing of E-mail.<br><b class="color1">Practical Assignment</b></p>
      `,
    },
    {
      header: "Certificate In Tally Prime Expert - (Duration- 02 months)",
      body: `      
      <div><b>Tally Prime- VOL-1 (Accounts) </b></div>
      <p>History of Tally, Company Creation & Alteration,Voucher
      Creation & Alteration, Deletion, Primary Group, Secondary 
      Group, Creation of Secondary Group, Alteration of Group, 
      Voucher Transactions, Report Generation Day Book, 
      Ledgers, Bank Book, Trial Balance, Trading & Profit & Loss 
      A/c, Day Book Functions, Budget and Control, Cost Category 
      and Cost Center, Security Maintain different Types, Banking 
      (Cheque Entry) Reconciliation, Backup of Data, Restore of 
      Data, Exporting Different Reports in Excel Format, PDF 
      Format, Printing of Tally Accounting Reports i.e. Day Book, 
      Vouchers, Ledgers, Cash Book, Bank Book, Trial Balance, 
      Trading A/c, Profit & Loss, Balance Sheet.<br><b class="color1">Practical Assignment</b></p>
      `,
    },
    {
      header: "Ms-Excel With Advance Functions & MIS - (Duration- 02 months)",
      body: `
      <p><b>Microsoft Office 2019</b></p> 
      <div><b>MS-Excel 2019 </b></div>
      <p>Intro, Working with Row, Column, Worksheet, Formatting 
      Row, Column, Worksheet, Name Manager, Formula Library, 
      Different Types of Chart Formation, Auditing, Math 
      Functions, Statistical Functions, Text Functions, Date & 
      Time Functions, Logical Functions, Lookup Functions 
      (Vlookup / Hlookup), Consolidate, Group / Ungroup, Data 
      Table, Goal Seek, Scenario, Sort & Filter, File Protection, 
      Printing of Row Headings on Each Page, Printing of 
      Documents.<br><b class="color1">Practical Assignment</b></p>
      
      <div><b>Tally Prime- VOL-2 (Accounts & Inventory)</b></div>
      <p>Company Creation with Accounts & Inventory Features, 
      Voucher Creation, Alteration & Deletion, Day Book 
      Functions, Process of Maintaining Inventory, Maintaining 
      Multiple Godowns, Actual & Bill QTY, Batch-wise Stock 
      Maintain, Transfer of Material, Order Processing, Multiple 
      Price Level, Currency Creation (Export – Country), Physical 
      Voucher, Manufacture Voucher, Bill of Material, Job Costing, 
      Interest Calculation, POS, Backup Restore, Exporting Tally 
      Inventory Reports in Different Formats (Excel, PDF, JPEG), 
      Printing of Tally Inventory Reports - Day Book, Invoice, 
      Godown Report, Party Ledgers, Trial Balance, Profit & Loss, 
      Balance Sheet.<br><b class="color1">Practical Assignment</b></p>
      
      <div><b>Advance Excel with MIS</b></div>
      <p>Data Protection, Macro (Without VBA), Group/Ungroup, 
      Conditional Formatting, Financial Functions – PV, FV, PMT, 
      PPMT, IPMT, DB, SLN, SYD, CUMPRINC, Database Functions, 
      Statistical Functions, Maths Functions, Advance Date & 
      Time Functions, Array Formula, Advance Vlookup & Hlookup, 
      Data Table, Working with Form, Flash Fill, Advance Filter, 
      Data Validation, Subtotal, Pivot Table & Chart – MIS Report 
      and Excel Templates.<br><b class="color1">Practical Assignment</b></p>

      <div><b>Tally Prime- VOL-3 (Taxation & Payroll)</b></div>
      <p>Tally Statutory & Taxation, Activation of GST, GST Ledgers, 
      CGST, SGST, IGST, Item Creation GST with HSN, Purchase 
      with GST, Sales with GST, Purchase Return, Sales Return, 
      E-Invoicing, GST Calculation, Input & Output Adjustment, 
      Input Tax Credit, Stock Calculation, GST Payable / 
      Refundable Adjustment Entry, GST Return - GST-1, GSTR 
      2A/2B GSTR 3B, GST Challan, Capital Goods in GST, Export in 
      GST, RCM Entry, E Way Bill, Challan Reconciliation, GSTR9, 
      GSTR9A/9C, TDS & TCS in Tally Prime, TDS Report, Form 
      24Q, 26Q, 27Q, Form 16, 16A, 26AS Reconciliation, Payroll in 
      Tally Prime, Creation of Unit, Attendance Creation, Creation 
      of Employee, Creation of Pay heads, Deduction, PF, ESI, 
      Calculation on Attendance & Production, Statement of 
      Payroll, Payslip, Gratuity Report, PF/ESI Report, Tally Shop, 
      Tally TDL, Data Configuration, Tally.Net Server, Tally Rental
      and Tally Audit.<br><b class="color1">Practical Assignment</b></p>
      

      
      `,
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

      <CourseBanner
        banerImage="/banner/courses/short-term-course-banner.jpg"
        title01="Skill Enhancement Program"
        title02="Accounting Software Applications"
        title03="2.5 Months: Online"
        imgTitle="/course/staricon.png"
        title04="6590 Ratings"
        title05="3900+ Learners"
        title06="Focused on tracking a vocation on a specialized subject"
        VideoPath="/video/GstVideoFor.mp4"
      />
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
                    pagragraph="<p> These short term courses are best for skill enhancement, candidates perform 
                  and applies advance formulas and use the software applications effectively to perform day to
                   day accounting.
                   The course focuses on the measurement and reporting of the asset side of the
                  balance sheets as well as the measurement of revenues and expenses on income statements.
                   The candidate also receives professional knowledge of Tally Prime which is advanced 
                   accounting software that is used to keep track of accounts. It helps records all 
                   types of accounting including invoicing, receipt notes, inventory management, 
                   sale records, credit note, etc. </p>
                  
                  The candidate also acquires an extensive understanding of all practical aspects
                   of taxation. Last but not least, with the MS Office knowledge, the candidate
                    can work in Office as Computer Operator, Computer Office
                  Administrator, etc.
                  "
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
        <section className={`${styles.getCourseCont} sectionGlobal`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>What you get out of this course</h1>
                <ul className={`${styles.getCoursList}`}>
                  <GetCourse
                    imageIcon="/course/shorterm/01-icon.png"
                    textbox="Skill Enhancement"
                  />
                  <GetCourse
                    imageIcon="/course/shorterm/03-icon.png"
                    textbox="Work Bench Skill Certification"
                  />
                  <GetCourse
                    imageIcon="/course/shorterm/02-icon.png"
                    textbox="Entry - level job success"
                  />
                  <GetCourse
                    imageIcon="/course/shorterm/04-icon.png"
                    textbox="Hands on Practical & Computerised Applications"
                  />
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="tab3" show={basicActive === "tab3"}>
        <section
          className={`${styles.acordanContaner} ${styles.Course04} sectionGlobal`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className={`${styles.lftBox}`}>
                 
                  <ButtonContainer courseName="Skill Enhancement Program" />
                  
                  <div>
                    <h3>Certified Account Executive</h3>
                    <CustomAccordian contents={contents} />
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
    
      <div id="tab6" show={basicActive === "tab6"}>
        <section className="aboutEnrollSection">
          <TalkComponentGlobal
            Heading="Want to see yourself Job-Ready? "
            buttonName="Enroll Now"
          />
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Course_4;
