import { useState } from "react";
import { Tab, Tabs, Carousel } from "react-bootstrap";
import styles from "./Basik.module.css";
import CustomVideoTab from "./CustomVideoTab";
import Custom_card from "./Custom_card";


export const BasikCustomTab = () => {
  const [key, setKey] = useState("home");
  return (
    <section className={`${styles.basikTabs}`}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-4"
      >
        <Tab
          eventKey="home"
          title="Our Alumni"
          className="globalCarousel basikCarousel"
        >
          <Carousel>
            <Carousel.Item indicators="false">
              <div className="row">
                <div className="col-md-3 mt-3">
                  <Custom_card
                    profileImg="/placement/01-Priyanka.png"
                    StudewntInfoText="I belong to a middle class family, my parents were worried about the expenses on
                    the professional degrees, I completed diploma program which was pocket friendly. I learnt
                    to perform Tally Prime and other accounting soft wares. I am very thankful to the team."
                    PlacementLogo="/logos/PlacementLogo/EDUTRA.png"
                    Name="Priyanka"
                    Designation="Account Executive Edutra Consulting Services"
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                    profileImg="/placement/04-Harish.png"
                    StudewntInfoText="I am really happy to learn from the expert faculties of Basik Academy, they taught
                    me so well that all my concepts are clear and I am able to apply it at my workplace. Today I
                    am proudly working as accounts professional with Nirgul."
                    PlacementLogo="/logos/PlacementLogo/NIRGUL.png"
                    Name="Harish Bisht"
                    Designation="Sr. Account Executive Nirgul Infratech"
                  />
                </div>

                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/03-Nikhil.png"
                    StudewntInfoText="I was unaware about the career opportunities after my XII result, I was from a
                    Non Commerce and unsure to pursue my career in accounts and finance. I joined the
                    foundation program and gained the fundamental concept knowledge of accounts. "
                    PlacementLogo="/logos/PlacementLogo/EDUTRA.png"
                    Name="Nikhil Tiwari"
                    Designation="Assistant Account Executive Edutra Consulting Services Pvt Ltd."
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/05-Bhavika.png"
                    StudewntInfoText="Basik Academy was recommended by my friend, I opted for short-term course
                    and found it helpful in gaining my practical skills further I upgraded and complete the
                    Diploma Program, which was really helpful in boosting my career opportunities."
                    PlacementLogo="/logos/PlacementLogo/MBR-INDIA.png"
                    Name="Bhavika Sood"
                    Designation="MIS Executive Sirus Buying Service"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item indicators="false">
              <div className="row">
                <div className="col-md-3 mt-3">
                  <Custom_card
                  profileImg="/placement/07-Dimple.png"
                    StudewntInfoText="I choose Basik Academy with a dream to work with Big Companies as Accounts
                    Professional and they made my dream come true. I was guided by the counsellor to enrol
                    under Diploma Program in Accounts & e-Taxation. After course completion I got the job."
                    PlacementLogo="/logos/PlacementLogo/BSEE.png"
                    Name="Dimple Rawat"
                    Designation="Data Analyst School of Executive Education"
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/08-Liza.png"
                    StudewntInfoText="I am so happy to share my experience. I enjoyed my career journey, I got full support
                    from the team during my learning I have learnt the concept of taxation and accounting
                    software from the expert faculties."
                    PlacementLogo="/logos/PlacementLogo/REVEXMEDIA.png"
                    Name="Liza Ojha"
                    Designation="Backend Operations-Taxation Revex Media"
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/09-Madhu.png"
                    StudewntInfoText="Basik Academy is a best place for learning, through out my journey with the
                    academy I was mentored by the Industry Experts, I am thankful for the quality delivery and
                    for the job placement at Nexgen."
                    PlacementLogo="/logos/PlacementLogo/NEXGEN.png"
                    Name="Madhu"
                    Designation= 'Data Analytics & MIS Nexgen'
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/02-Sachin.png"
                    StudewntInfoText="Basik Academy developed my professional skills through Case studies, Capstone
                    Projects & real world data sets. Today I am working as a Astt Manager Accounts with
                    Blackboard Education and Thanks to Basik Academy to making me attain this job position."
                    PlacementLogo="/logos/PlacementLogo/BLACKBOARD.png"
                    Name="Sachin Kumar"
                    Designation="Assistant Accounts Manager Blackboard Education & Research 
                    Foundation"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item indicators="false">
              <div className="row">
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/01-Priyanka.png"
                    StudewntInfoText="I belong to a middle class family, my parents were worried about the expenses on
                    the professional degrees, I completed diploma program which was pocket friendly. I learnt
                    to perform Tally Prime and other accounting soft wares. I am very thankful to the team."
                    PlacementLogo="/logos/PlacementLogo/EDUTRA.png"
                    Name="Priyanka"
                    Designation="Account Executive Edutra Consulting Services"
                  />
                </div>
                <div className="col-md-3 mt-3">
                  <Custom_card
                   profileImg="/placement/04-Harish.png"
                    StudewntInfoText="I am really happy to learn from the expert faculties of Basik Academy, they taught
                    me so well that all my concepts are clear and I am able to apply it at my workplace. Today I
                    am proudly working as accounts professional with Nirgul."
                    PlacementLogo="/logos/PlacementLogo/NIRGUL.png"
                    Name="Harish Bisht"
                    Designation="Sr. Account Executive Nirgul Infratech"
                  />
                </div>

                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/03-Nikhil.png"
                    StudewntInfoText="I was unaware about the career opportunities after my XII result, I was from a
                    Non Commerce and unsure to pursue my career in accounts and finance. I joined the
                    foundation program and gained the fundamental concept knowledge of accounts. "
                    PlacementLogo="/logos/PlacementLogo/EDUTRA.png"
                    Name="Nikhil Tiwari"
                    Designation="Assistant Account Executive Edutra Consulting Services Pvt Ltd."
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/05-Bhavika.png"
                    StudewntInfoText="Basik Academy was recommended by my friend, I opted for short-term course
                    and found it helpful in gaining my practical skills further I upgraded and complete the
                    Diploma Program, which was really helpful in boosting my career opportunities."
                    PlacementLogo="/logos/PlacementLogo/MBR-INDIA.png"
                    Name="Bhavika Sood"
                    Designation="MIS Executive Sirus Buying Service"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item indicators="false">
              <div className="row">
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/07-Dimple.png"
                    StudewntInfoText="I choose Basik Academy with a dream to work with Big Companies as Accounts
                    Professional and they made my dream come true. I was guided by the counsellor to enrol
                    under Diploma Program in Accounts & e-Taxation. After course completion I got the job."
                    PlacementLogo="/logos/PlacementLogo/BSEE.png"
                    Name="Dimple Rawat"
                    Designation="Data Analyst School of Executive Education"
                  />
                </div>
                <div className="col-md-3 mt-3 ">
                  <Custom_card
                  profileImg="/placement/08-Liza.png"
                    StudewntInfoText="I am so happy to share my experience. I enjoyed my career journey, I got full support
                    from the team during my learning I have learnt the concept of taxation and accounting
                    software from the expert faculties."
                    PlacementLogo="/logos/PlacementLogo/REVEXMEDIA.png"
                    Name="Liza Ojha"
                    Designation="Backend Operations-Taxation Revex Media"
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/09-Madhu.png"
                    StudewntInfoText="Basik Academy is a best place for learning, through out my journey with the
                    academy I was mentored by the Industry Experts, I am thankful for the quality delivery and
                    for the job placement at Nexgen."
                    PlacementLogo="/logos/PlacementLogo/NEXGEN.png"
                    Name="Madhu"
                    Designation="Data Analytics & MIS Nexgen  "
                  />
                </div>
                <div className="col-md-3 mt-3 Carusla_mHide">
                  <Custom_card
                  profileImg="/placement/02-Sachin.png"
                    StudewntInfoText="Basik Academy developed my professional skills through Case studies, Capstone
                    Projects & real world data sets. Today I am working as a Astt Manager Accounts with
                    Blackboard Education and Thanks to Basik Academy to making me attain this job position."
                    PlacementLogo="/logos/PlacementLogo/BLACKBOARD.png"
                    Name="Sachin Kumar"
                    Designation="Assistant Accounts Manager Blackboard Education & Research 
                    Foundation"
                  />
                </div>
              </div>
            </Carousel.Item>
          
          </Carousel>
        </Tab>
        <Tab eventKey="profile" title="Our Alumni Speaks">
          <CustomVideoTab />
        </Tab>
      </Tabs>
    </section>
  );
};

export default BasikCustomTab;
