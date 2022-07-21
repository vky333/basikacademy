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

export const Course_3 = () => {
  const contents = [
    {
      header: "Module-1",
      body: `
      <p><b>Computer Applications for Business-1</b></p>
      <div><b>Technology of Modern Computer System :</b></div>
      <p>Functionalities of a Computer, Usage of Computers, 
      Computer System Unit Descriptions & Types, Computer 
      Generations, Computer Components ( Input, Output, 
      Processing, Storage Devices), Data Measurements, 
      Computer Ports, Hardware, Software, Different Operating 
      Platforms, Mobile Operating Systems, Networking, Internet 
      & Intranet, Virus & Different Virus Protection Software.<br><b class="color1">Practical Assignment</b></p>

      <div><b>Microsoft Windows 10 (GUI Based Operating System)</b></div>
      <p>Introduction to Operating System, Graphical User Interface 
      OS, Windows 10 Screen Interface, Ribbon, Working with Files 
      & Folders (Create, Copy, Move, Delete), Virtual Desktop, 
      Tablet Mode, Add Remove Programs / Apps, Printer Setting, 
      System Date& Time Setting, Windows Snapping, Windows 
      Accessories ( Notepad, Calculator, Paint App, WordPad) Word Table / Excel Worksheet / Chart, Adding Clip Art 
      Pictures, Working with Colour, Creating Hyperlink in Slide, 
      Slides Setup, Adding Audio / Video, Setting of Animation, 
      Presentation of Slides, Transition, Slide Timings and 
      Printing of Slides.<br><b class="color1">Practical Assignment</b></p>

      <div><b>Microsoft Office 2019</b></div>
      <p><b>MS-Word 2019</b> - QAT & Its Options, File Setup, Creation & 
      Formatting, Working with Tabs & Columns, TOC, Hyperlink, 
      Bookmark, Tracking, Table, Invoice Format with Draw Table, 
      Formulas in Table, Mail Merge, File Protection, Macros, 
      Exporting Docs in PDF & Other Format, Converting PDF to 
      Doc, Printing of document.<br><b class="color1">Practical Assignment</b></p>

      <p><b>MS-Excel 2019</b> - Intro, Working with Row, Column, Worksheet, 
      Formatting Row, Column, Worksheet, Name Manager, 
      Formula Library, Different Types of Chart Formation, 
      Auditing, Math Functions, Statistical Functions, Text 
      Functions, Date & Time Functions, Logical Functions, 
      Lookup Functions 
      (Vlookup / Hlookup), Consolidate, Group / Ungroup, Data 
      Table, Goal Seek, Scenario, Sort & Filter, File Protection, 
      Printing of Row and Headings on Each Page, Printing of 
      Documents.<br><b class="color1">Practical Assignment</b></p>

      <div><b>S-PowerPoint 2019</b></div>
      <p>Creation of Presentation, Using Template, Inserting Deleting 
      /Moving Slides in a Presentation, Duplicate a SliInserting 
      Word Table / Excel Worksheet / Chart, Adding Clip Art 
      Pictures, Working with Colour, Creating Hyperlink in Slide, 
      Slides Setup, Adding Audio / Video, Setting of Animation, 
      Presentation of Slides, Transition, Slide Timings and 
      Printing of Slides.<br><b class="color1">Practical Assignment</b></p>

      <div><b>Internet and Email</b></div>
      <p>Introduction of Internet & E-mail, Local Area Network (LAN), 
      Wide Area Network (WAN), World Wide Web & Websites, Web 
      Browsing Software, Search Engines, Downloading from 
      Websites, Basics of E-Mail, Email Account Creation, 
      Composing, Sending, Receiving E-mail, Sending Softcopy as 
      Attachment, Forwarding of Mail, Deleting Mail, Handling 
      Trash, Spam and Printing of E-mail.
      <br>
      <b class="color1">Practical Assignment</b>
      <br>
      <b class="color1">Project work on Computer Applications</b></p>
      `,
    },
    {
      header: "Module-2",
      body: `
      <div><b>Financial Accounting - 1</b></div>
      <p>Introduction of Accounting, Accounting Principle, Process 
      of Accounting, Accounting Terminology, Business 
      Mathematics for Accounting, Accounting Standards, 
      Accounting Documents & Vouchers, Rules of Accounting – 
      Golden Rules – Modern Approach Rules, Method of 
      Accounting under Companies Act & Income Tax Act, Journal 
      Book, Ledgers, Trial Balance, Trading A/c, Profit & Loss A/c, 
      Accounting for Taxation – GST, TDS, Modern Approach to 
      Bank Reconciliation, Depreciation and Rectification of
      Errors.
      <br><b class="color1">Practical Assignment</b>
      <br><b class="color1">Project work on Financial Accounting</b>
      </p>
      `,
    },
    {
      header: "Module-3",
      body: `
      <div><b>Tally Prime (Accounts & Inventory)- VOL- 1</b></div>
      <p>Tally Prime- VOL.-1 (Accounts) (Update Version of Tally.ERP9 
        : History of Tally, Company Creation & Alteration, Voucher 
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
        Trading A/c, Profit & Loss, Balance Sheet.
      <br><b class="color1">Practical Assignment</b>
      <br><b class="color1">Project work on Tally Prime (Accounts Only)</b>
      </p>

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
      Balance Sheet.
      <br><b class="color1">Practical Assignment</b>
      <br><b class="color1">Project work on Tally prime (Accounts and Inventory)</b>
      </p>
      `,
    },
    {
      header: "Module-4",
      body: `
      <div><b>Indirect Tax – Goods & Service Tax (GST) - 1</b></div>
      <p>Introduction to GST, GST ACT- meaning, Terminologies, 
      Goods Included under GST, Services included under GST, 
      HSN/ SAC, Types of GST (IGST, CGST, SGST, UTGST), Cess 
      Under GST, Taxable event in GST, Registration, TRN and ARN 
      number, 15-digit GSTIN, GST Certificate, Composition 
      Scheme Under GST, Accounting Entries under GST, State 
      Codes and rates, Forms under GST, Reverse Charge 
      Mechanism, Tax Invoice, Sales Ledgers, purchase ledgers, 
      Bill of Supply, E-way Bill and movement of goods, E-way Bill 
      GST Portal, E-invoicing, Calculation of GST, Input Tax 
      Credit(ITC), Adjustments for CGST, SGST and UTGST.
      <br><b class="color1">Practical Assignment</b>
      <br><b class="color1">Project work on Goods and Service Tax-01</b>
      </p>
      `,
    },
    {
      header: "Module-5",
      body: `
      <div><b>Direct Tax - 1 </b></div>
      <p>Introduction to Direct Tax, Terminologies used in Income 
      Tax Act 1961, Type of Residential Status, Exempted Income, 
      PAN and TAN, How to apply PAN – TAN through NSDL Portal 
      ,Linking od PAN and Aadhaar, Income Tax – Tax Slab Rates, 
      Income from Salary (Part 1 to 6), Provident Fund, SPF, RPF, 
      URPF, PPF, Interest (under section 234A, 234B, 234C) and 
      Rebate, Tax Deduction at Sources(TDS), TDS under Salary, 
      Due dates (TDS deposit and returns) TDS Certificate / From 
      16,Deductions under Chapter VI ,Computation of Taxable 
      Income and Tax Liability, Online Income Tax Return portal 
      Registration and Income Tax return e-filing ( ITR-1).
      <br><b class="color1">Practical Assignment</b>
      <br><b class="color1">Project work on Goods and Service Tax-01</b>
      </p>
      `,
    },
    {
      header: "Module-6",
      body: `
      <div><b>English Communications & Personality Development </b></div>
      <p>What is communication? Types of communication, 
      Interpersonal communication, Process of communication, 
      Postulates and barriers of communication, Linkage between 
      communication and development. Probing verbal 
      communication, Becoming an effective speaker, Initiating 
      conversation, Learning kinesics, Role of the society, 
      Importance and Types of non-verbal communication, 
      Presenting yourself, Differentiating listening and hearing, 
      Understanding L-S-R-W, Misconceptions and barriers of 
      listening, Tools to improve communication skills and 
      Personality development.
      <br><b class="color1">Practical Assignment</b>      
      </p>
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
        banerImage="/banner/courses/6montCourse.jpg"
        title01="Workbench Integrated Certificate Program"
        title02="Certified Accounts Executive"
        title03="6 Months: Online"
        imgTitle="/course/staricon.png"
        title04="5000 Ratings"
        title05="2000+ Learners"
        title06="Focused on practical knowledge of core aspects of day-to-day business accounting"
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
                    pagragraph="<p>This is one of the Skill enhancement courses in Accounts, which provides organized, formal and practical training on Accounting and it’s software applications. The course focuses on the measurement and reporting of the asset side of the balance sheets as well as the measurement of revenues and expenses on income statements. The candidate also learns the practical aspects of accounts and becomes an accounts professional who makes the business transactions and statements effectively. The candidate also acquires the application knowledge of Tally Prime which is advanced accounting software that is used to keep track of accounts. It helps record all types of accounting including invoicing, receipt notes, inventory management, sale records, credit note, etc. </p>
                  
                    The candidate becomes ready to acquire a job as Account Professional. 

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
                <h1>What do you get out of this course</h1>
                <ul className={`${styles.getCoursList}`}>
                  <GetCourse
                    imageIcon="/course/6montCourse/01-icon.png"
                    textbox="Certificate by Basik Academy"
                  />
                  <GetCourse
                    imageIcon="/course/6montCourse/03-icon.png"
                    textbox="Ability to finalise Company Accounts"
                  />
                  <GetCourse
                    imageIcon="/course/6montCourse/02-icon.png"
                    textbox="Creation of Accurate Financial Report"
                  />
                  <GetCourse
                    imageIcon="/course/6montCourse/04-icon.png"
                    textbox="Hands on skills of Computer Application"
                  />
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="tab3" show={basicActive === "tab3"}>
        <section
          className={`${styles.acordanContaner} ${styles.Course03} sectionGlobal`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className={`${styles.lftBox}`}>
                <ButtonContainer courseName="Workbench Integrated Certificate Program" />
                  
                  <div>
                    <h3>CERTIFIED ACCOUNTS EXECUTIVE </h3>
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

export default Course_3;
