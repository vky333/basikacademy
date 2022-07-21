import React from "react";
import styles from "../vocationalTraining/VocationalTraining.module.css";
import Image from "next/image";
import { section, Form } from "react-bootstrap";
import Artical from "../blog/Artical";
import StayCard from "../blog/StayCard";
import Link from "next/link";

export const VocationalConttent_1 = () => {
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
                <h1>BFSI awareness and its importance for this generation</h1>
              </section>
              <section>
                <p>
                  In today’s world where everything is moving towards having a
                  digital presence, it becomes important for everyone to keep
                  learning how they can benefit from it in their lives. Every
                  industry nowadays is moving towards digitization of their
                  businesses which has given tremendous growth and job
                  opportunities to everyone around the world.
                </p>
                <p>
                  Among all the sectors, Banking, Finance, and Insurance is the
                  one which has shown some of the biggest signs of growth. The
                  reason why Banking, Financial Services, and Insurance
                  industries have shown a rise with digitization is because of
                  the fact that it has empowered the new generation to take
                  charge of their finances for the first time.
                </p>
                <p>
                  Banking, Financial Services, and Insurance (BFSI) today has
                  become a tool to make you financially stable. Whether you own
                  a business, work as an employee, or are a student, learning to
                  take care of your money is much easier and way quicker today.
                  Digitization of businesses has also helped a lot of small
                  businesses to begin and flourish. With so many online users,
                  the players in the BFSI industry have started offering many
                  services to make sure they acquire as many users as possible.
                  Moreover, with so many services available, service providers
                  will have to make them available through their employees only.
                  Hence, there is a requirement for more and more BFSI
                  professionals.
                </p>
              </section>

              <section>
                <h3>Is BFSI for beginners?</h3>
                <p>
                  In one word, ‘Definitely’. According to a survey by
                  ‘Teamlease’, 2022, we will see as many as 70 thousand BFSI job
                  opportunities for freshers. This is estimated to be more than
                  one-third of the total number of freshers getting absorbed. In
                  the past three years, an average of 38% of the total number of
                  freshers hired in the entire corporate industry were BFSI
                  professionals. Followed by the telecom and the manufacturing
                  sector at 20% and 13% respectively. According to a report by
                  The Economic Times, HDFC Bank aims to touch base with 200,000
                  villages in the next 24 months. And plans to offer more than
                  2500 jobs in the next six months. While the Shriram Group will
                  be hiring 5,000 banking professionals across their many
                  companies. ICICI Home Finance is planning to hire 600
                  employees before December 2022. The Kotak Mahindra Bank has
                  also resumed hiring professionals.
                </p>
              </section>
              <section>
                <h3>Where to begin? </h3>
                <p>
                  To begin learning in BFSI, numerous certifications are
                  available for students of any age, and qualifications above
                  the 12th standard. With such a high absorption rate, apart
                  from regular colleges, there are several open/online
                  certifications too that are available now. Among many others,
                  some of the unique and lucrative BFSI courses one can enroll
                  in are
                  <ul>
                    <li>Economics of Money and Banking.</li>
                    <li>Digital Transformation in Financial Services.</li>
                    <li>Financial Markets and Investment Strategy.</li>
                    <li>Central Banking Law.</li>
                    <li>Introduction to Insurance and Assets Management.</li>
                    <li>Direct and Indirect taxes.</li>
                    <li>International Banking and Finance, etc.</li>
                  </ul>
                </p>
              </section>
              <section className="mb-5">
                <h3>The opportunity is now! </h3>
                <p>
                  With so many jobs available and with a high penetration rate,
                  companies are actually struggling to find good BFSI
                  professionals. One reason is that there are many skills in
                  regular college courses like B.Com that are not taught to a
                  student to excel in the BFSI sector. Whereas some of the
                  unorthodox courses that are available these days are specially
                  designed to sharpen the skills that are required to succeed.
                </p>
                <p>
                  Whether for a business or oneself, with knowledge of Banking
                  and Financial services in their arsenal, you can earn and save
                  well. Insurance definitely protects your assets better.
                  Someone who is a student of all three is undoubtedly on the
                  path to financial freedom for their future.
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

export default VocationalConttent_1;
