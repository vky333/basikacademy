import React from "react";
import Card_Custom from "./Card_Custom";
export const FacultySection = () => {
  return (
    <>
      <div className="col-md-12">
        <h1 className="heading-box">
          Learn from the <span>Masters</span>
        </h1>
      </div>
      <div className="col-lg-3 facultyCard02">
        <Card_Custom
          CardImage="/faculty/f1.png"
          CardTitle="Dr. Vivek Singh "
          CardText="Phd. Commerce
                <div>Training Consultant</div>"
          facultyName="Dr. Vivek Singh "
          facultyHistory="Dr. Vivek Singh is working with University of Delhi as Guest Faculty;
                 Associated with JMI as faculty; Subject Specialisation includes Retail Marketing &
                  Management Accounting "
        />
      </div>
      <div className="col-lg-3 facultyCard02">
        <Card_Custom
          CardImage="/faculty/f2.png"
          CardTitle="Amir "
          CardText="M.Phil-English
                <div>Freelance Trainer</div>"
          facultyName="Amir "
          facultyHistory="Associate Professor & Research Assistant in Al.
                 Falah University & University of Western Australia. 
                 He has stint in translation & academic events compering. "
        />
      </div>
      <div className="col-lg-3 facultyCard02">
        <Card_Custom
          CardImage="/faculty/f3.png"
          CardTitle="Kanika Sharma  "
          CardText="M.Com,CA-Inter
                <div>Trainer-Taxation</div>"
          facultyName="Kanika Sharma  "
          facultyHistory="CA Intermediate is specialised in Companies’ Financial Monitoring,
                 Return Filing, & GST Reconciliation; 3 years out of 10 years of her 
                 job experience in BFSI Sector pertains to Training. She is Certified Trainer from BFSI SSC. "
        />
      </div>
      <div className="col-lg-3 facultyCard02">
        <Card_Custom
          CardImage="/faculty/f4.png"
          CardTitle="Atul Kr. Agrawal  "
          CardText="MBA Finance
                <div>Trainer-Computer & Accounts</div>"
          facultyName="Atul Kr. Agrawal  "
          facultyHistory="Associated with ICFE as Head-Academics; As R & D Head,
                 he has been instrumental in development of Course Curriculum; has 
                 imparted training on BFSI domain for almost 2.5 decades. "
        />
      </div>
    </>
  );
};

export default FacultySection;
