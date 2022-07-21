import React from "react";
import Header from "../../globals/header/Header";
import Footer from "../../globals/footer/Footer";
import HeadingContent from "../../globals/headingContent/HeadingContent";
import StaticBanner from "../../globals/banner/StaticBanner";
import Card_Custom from "./Card_Custom";
import styles from "../../pagescomponents/faculty/Faculty.module.css";
import Image from "next/image";
import FacultySection from "./FacultySection";
import MasterVideo from "./MasterVideo";

export const Faculty = () => {
  return (
    <>
      <Header />

      <StaticBanner
        BannerImage="/banner/faculty/faculty-banner-img.jpg"
        Heading="Meet Our Faculty"
        Para="Experiential learning is the key to transforming careers... Learn by Doing with the Industry Experts..."
      />

      <section className={`${styles.facultySection} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              Basik Academy houses highly educated and well experienced council
              members and faculties from the field of banking, accounts &
              finance, they impart best of the knowledge, skills and training to
              the learners and make them industry relevant professionals from
              the beginning of their career journey
            </div>
            <div className="col-md-12 mb-4">
              <HeadingContent
                heading="Our <span>Academic Council</span>"
                pagragraph="The Academic Council of BASIK Academy has control over and is responsible for the maintenance of standards of education,
                teaching and training, inter-departmental coordination, research, examinations, and tests within the Academy."
              />
            </div>
            <div className="col-lg-6 facultyCard01">
              <Card_Custom
                CardImage="/faculty/c1.png"
                CardTitle="Preeti Gupta "
                CardText="M Com, MCA, MSW & M.ED
                Academic Head-Blackboard
                Group of Companies."
                facultyName="Preeti Gupta "
                facultyHistory="Erstwhile Assistant Director – Swami Vivekanand
                 Subharti University, Assistant Prof. SIBM, Pune(yr.2007-09),
                  Academic Council Member-Lingayas Vidyapeeth since yr.2019.
                  She has stint in Design & Development of Curriculum & Content 
                  and also has expertise on Students’ Career Counselling "
              />
            </div>
            <div className="col-lg-6 facultyCard01">
              <Card_Custom
                CardImage="/faculty/c2.png"
                CardTitle="Dr.Shahabuddin Usmani "
                CardText="PHD (Commerce)
                Academic Advisory & Consultancy (Professor - Jamia Millia Islamia, University)"
                facultyName="Dr.Shahabuddin Usmani "
                facultyHistory="Dr. Usmani is Visiting Faculty in IGNOU (Dept. Of Commerce);
                 Assistant Prof. in Al. Falah University (Dept. Of Management Studies); 
                 Author of ‘Industrial Relations in India ‘published by Sonali 
                 Publication in the Yr.2010 "
              />
            </div>

            <FacultySection />
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5 sectionGlobal">
        <MasterVideo/>
      </section>
      <Footer />
    </>
  );
};

export default Faculty;
