import React from "react";
import styles from "../vocationalTraining/VocationalTraining.module.css";
import Image from "next/image";
import { section, Form } from "react-bootstrap";
import Artical from "../blog/Artical";
import StayCard from "../blog/StayCard";
import Link from "next/link";

export const VocationalConttent_3 = () => {
  return (
    <>
      <section className={`${styles.Vocational02Section02} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <ul className={`${styles.pageNavigations}`}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog </Link>
                </li>
                <li>
                  <Link href="#">Vocational Training </Link>
                </li>
              </ul>

              <section className={`${styles.hdingSection}`}>
                <h1>
                  Business Accounting &amp; Taxation... Aspiring Career
                  Opportunities
                </h1>
              </section>
              <section>
                <p>
                  Taxes – The foremost way of any government for their revenues.
                  They are also the backbone of all the development that takes
                  place in a country. Public constructions, Military, National
                  Parks, and payment transfers for public reforms are just a few
                  examples of the activities that a government undertakes from
                  the taxes collected. Every individual or business entities
                  those are spending on a product or a service is a contributor
                  to a Nation’s tax revenue. And since taxes are a part of our
                  lives to this extent, in this age of a rapidly developing
                  economy combining itself with digital interphases and
                  solutions every day, it becomes all the more important for us
                  to learn the intricacies of it as a part of our education.
                </p>
                <p>
                  Under ‘The Masters’ Column’ we ask an expert of trade to
                  answer some of the questions that come across an aspiring
                  student to give them an understanding of the said topic. Well,
                  no prize for the guessing, today we are here to talk about
                  Taxation. So let’s dive into some of the questions that a
                  student might be interested in knowing the answers to.
                </p>
              </section>

              <section>
                <h3>What is Direct Tax, how will it help to study those?</h3>
                <p>
                  Direct tax is a tax that is paid directly by an individual or
                  organization to the imposing entity (generally the
                  government). It is progressive in nature, meaning one who
                  earns more pays more.
                </p>
                <p>
                  The importance of these taxes is that they are paid directly
                  to the government and make up a significant portion of
                  India&#39;s tax generated revenue which is further utilized
                  for the wellbeing of the citizens such as in providing free
                  medical aid, free education, construction of roads, etc.
                </p>
                <p>
                  Often, people and organizations look for experts who can help
                  them in assessing how much tax they need to pay, filing their
                  tax returns, and finding ways to legally save their tax money.
                  Hence opening up periodic employment opportunities for those
                  experts.
                </p>
              </section>
              <section>
                <h3>
                  Is B.COM conventional degree makes you Job ready? What are the
                  other courses available to enhance the employability skills of
                  the candidates?
                </h3>
                <p>
                  Bachelor of commerce (B.Com) is among the most popular
                  conventional degree program that student pursue post
                  completion of XII. It certainly develops the foundation of the
                  candidates, with the emerging trends where the role of
                  technology is increasing, it is also important for the
                  candidates to enhance their employability skills and to become
                  a tax professional, they should learn &amp; adapt new skills
                  and keep themselves up-dated. There are several other
                  certifications and courses that one can opt for. Such as MBA,
                  M.Com, B.Ed, Certificate in Investment Banking, Financial Risk
                  Manager, Diploma in Accounting &amp; Taxation, Diploma in GST,
                  Diploma in Taxation Law, Advanced Diploma in Taxation,
                  Bachelor of Commerce in Taxation, Bachelor of Commerce in Tax
                  Procedure &amp; Practices, Master of Commerce in Finance and
                  Taxation, Master of Commerce in Accounting and Taxation, Post
                  Graduate Diploma in Taxation, B.Voc in Business Accounting
                  &amp; Taxation, Post Graduate Diploma in Tax Management and
                  Tax Administration.
                </p>
              </section>
              <section className="mb-5">
                <h3>
                  How beneficial is it to learn Tally? What are the career
                  opportunities for Tally experts?
                </h3>
                <p>
                  Such soft wares like Tally is used by the accounts
                  professionals which makes the business transactions and
                  statements effectively. It reduces the energy and time of an
                  individual and also increase the productivity. The demand of
                  Tally experts is increasing. Tally is the name of the software
                  that is preferred widely by small, mid-sized, and enormous
                  enterprises for accounting and inventory management. This is
                  often the foremost demanding software in today’s time because
                  it provides complete business solutions to all. From filling
                  GST to cheque printing, from ratio analysis to comparative
                  analysis, cash and fund flow statements do the maximum amount
                  of accounting- related work. Tally Prime is the latest version
                  which is used by the individuals, business corporates, a
                  majority of the Industries to take care of their account
                  transactions &amp; statements. Therefore, Accountants must
                  learn to perform Tally Prime, Tally Experts could be an
                  Inventory Manager, a Bookkeeper, Accountant, Billing
                  Executive, and Tally freelancers.
                </p>
              </section>
              <section className="mb-5">
                <h3>What are the career options in Accounts &amp; Finance?</h3>
                <p>
                  Students may get jobs after conventional B.com degree but to
                  be an expert student has to pursue some specialised skill
                  training program, with the increase in demand of computerised
                  account professionals B.Com degree is not sufficient, degree
                  of skills opens the doors of job opportunities students can
                  develop a successful career in BFSI sector post completion of
                  skill training on Business Accounting &amp; Taxation. Tax
                  professionals work at several levels, such as tax accountants,
                  tax analysts, tax advisors, tax recruiters, tax examiners, tax
                  managers, tax collectors, revenue managers, business/
                  Corporate tax consultants, income tax consultants, property
                  tax consultants, Financial advisors, Auditor, Wealth Manager,
                  etc. etc.
                </p>
              </section>
            </div>
            <div className="col-md-3">
              <div className={`${styles.searchContainer}`}>
                <StayCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VocationalConttent_3;
