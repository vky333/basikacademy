import React from "react";
import HeadingContent from "../../globals/headingContent/HeadingContent";
import styles from "../contact/Contact.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import Custom_Form from "./Custom_Form";

export const Contact = () => {
  return (
    <>
      <section className={`${styles.contactContainer} contactPage sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className={`${styles.contLeft}`}>
                <HeadingContent
                  heading="We’d love to <span>hear from you</span>"
                  pagragraph="If you are interested to shape your career in the field of Accounts &
                    Finance, we are here to train you with our expert team of Industry. Leave your details/query
                    in the form."
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className={`${styles.contactContainer01}`}>
        <div className="container">
          <div className="row">
         
            <div className="col-md-6">
              <h3>
                Contact <span>Us</span>
              </h3>
              <div className={`${styles.groupCont}`}>
                <FiPhoneCall />
                <div>
                  <div>Phone</div>
                  <b>0120-4850800</b>
                </div>
              </div>
              <div className={`${styles.groupCont}`}>
                <GoMail />
                <div>
                  <div>Email</div>
                  <b>info@basikacademy</b>
                </div>
              </div>
              <h3>
                Visit <span>Us</span>
              </h3>
              <div className={`${styles.groupCont}`}>
                <GoLocation />
                <div>
                  <div>Address</div>
                  <b>B-136, Sector 2, Noida, Uttar Pardesh 201301</b>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={`${styles.formContainer}`}>
                <Custom_Form />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
