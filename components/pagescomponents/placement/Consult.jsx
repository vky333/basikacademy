import React from "react";
import Header from "../../globals/header/Header";
import Footer from "../../globals/footer/Footer";
import StaticBanner from "../../globals/banner/StaticBanner";
import HeadingContent from "../../globals/headingContent/HeadingContent";
import styles from "../placement/Placement.module.css";
import Image from "next/image";
import { Form, Button, Row } from "react-bootstrap";
import PartnerCounter from "../../globals/partnerCounter/PartnerCounter";
import CustomFormControl from "../../globals/CustomFormControl";

export const Conssult = () => {
  return (
    <>
      <Header />
      <StaticBanner BannerImage="/banner/placement/consultant.jpg" />
      <section className={`${styles.ConsSection01} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <HeadingContent
                heading="Employers & <span>Consultants</span>"
                pagragraph="<p>Basik Academy has dedicated placement cell 
                to function throughout the year for generating suitable 
                employment opportunities for our trained candidates in the industry.
                 Our Placement team connects with the industry recruitment heads, potential partners to  
                 understand their manpower needs and match the profile
                  of our eligible candidates and place them at right place. 
                  If you are an employer looking for trained manpower for your organization you are at right place 
        
                </p>
                  "
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.formSection} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <h1>
              Fill the <span>form.</span>
            </h1>
            <Form className={`${styles.formBox}`}>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup01"
                    LabelName="Name of the Organisation*"
                    InputType="text"
                    placeholderName="Name of the Organisation*"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup02"
                    LabelName="Name of the Position*"
                    InputType="text"
                    placeholderName="Name of the Position*"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup03"
                    LabelName="No. of Openings*"
                    InputType="number"
                    placeholderName="No. of Openings*"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup04"
                    LabelName="Job Location"
                    InputType="text"
                    placeholderName="Job Location"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup05"
                    LabelName="Contact Person Name"
                    InputType="text"
                    placeholderName="Contact Person Name"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup06"
                    LabelName="Email Id"
                    InputType="email"
                    placeholderName="Email Id"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup07"
                    LabelName="Contact Number"
                    InputType="text"
                    placeholderName="Contact Number"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup08"
                    LabelName="Approximate Salary"
                    InputType="text"
                    placeholderName="Approximate Salary"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CustomFormControl
                    Id="formGroup09"
                    LabelName="Job Description"
                    InputType="text"
                    placeholderName="Job Description"
                  />
                </div>
              </div>

              <Button
                variant="primary"
                type="submit"
                className={`${styles.contactBtn} mt-3`}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>

      <PartnerCounter />

      <Footer />
    </>
  );
};

export default Conssult;
