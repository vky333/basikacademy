import React from "react";
import styles from "../vocationalTraining/VocationalTraining.module.css";
import Image from "next/image";
import { section, Form } from "react-bootstrap";
import Artical from "../blog/Artical";
import StayCard from "../blog/StayCard";
import Link from "next/link";

export const VocationalConttent_2 = () => {
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
                  Emerging Trends, role of technology is increasing &amp;
                  changing the face of Education?
                </h1>
              </section>
              <section>
                <p>
                  The world is changing at a rapid pace. Role of technology is
                  increasing also the development and advancement of technology
                  have brought in so many changes. We have come a long way with
                  respect to education and specifically technology in education.
                  With technology, classrooms are more inclusive than ever
                  before and teachers have found new ways to connect with their
                  students and increased students’ engagement. Technology has
                  made the learning experience easier, simpler and interesting.
                  Schools and educational institutions have been transforming
                  digitally over the past few years. The onset of the global
                  pandemic catalysed the process.
                </p>
                <p>
                  With the pandemic, education has become even more redefined.
                  Online virtual classes have become the new normal. With this
                  growing pace we have realized that technology is the future of
                  the education system. Education includes vocational training
                  that prepares learners to gain relevant skills and join modern
                  workforce, educational institutions have to constantly update
                  and adapt the technology to help their learner’s future proof
                  their career prospects.
                </p>
                <p>
                  By adapting the technology in this modern era Vocational
                  Educational Institutions are creating a workforce for the
                  machine age, digitalization could create up to 6 million jobs
                  worldwide between 2016 and 2025. The impact of digitalization
                  has also acted as a catalyst for employment growth in the
                  wider economy. In India, for example, it is estimated that
                  three to four jobs are created for every job within the
                  business process outsourcing and IT-enabled services sectors.
                </p>
                <p>
                  Technology assisted vocational training provides amazing
                  opportunities to the learners to learn new skills or upskill.
                  It also gives an interesting courseware and
                </p>
              </section>

              <section>
                <h3>Multimedia in Education</h3>
                <p>
                  Multimedia provides teachers and students with endless
                  possibilities and opportunities. Before we set on to discuss
                  multimedia in education let’s take a look at what is
                  multimedia. Videos, infographics, music, audio, gifs, and
                  likewise fall under multimedia. Multimedia in education helps
                  teachers to increase the quality of their teaching and helps
                  students understand concepts better. From small clipart in
                  your PowerPoint presentation to intense animation, everything
                  is multimedia. Multimedia in education can help to increase
                  participation, instruct in better ways, and simplify
                  communication. With online classes and online teaching on the
                  rise, multimedia has helped to bring in a lifelike experience.
                  Education is a social institution and multimedia in education
                  has helped to strengthen its roots and make it better.
                </p>
              </section>
              <section>
                <h3>E- Study Material </h3>
                <p>
                  Online study materials and online resources are a great
                  advantage of technology in education. One of the main benefits
                  of e study materials is that students can access the
                  information anytime they want from anywhere and it is a huge
                  repository of knowledge that they can access from the comfort
                  of their homes. No knowledge is small in education. There is
                  so much more outside the textbook and curriculum and
                  technology helps students to explore this and expand their
                  horizons. Students can pace their learning and be more
                  self-disciplined. As mentioned, e-learning materials also help
                  to give a larger and broader perspective. It has the ability
                  to increase critical thinking skills and problem-solving
                  skills. In a way, online study materials and resources have
                  made students independent and able.
                </p>
              </section>
              <section className="mb-5">
                <h3>Learning Management System </h3>
                <p>
                  Technology is changing the face of education in ways more than
                  imaginable. If you were to tell someone 10 years ago that they
                  would attend trainings from their home, no one would have
                  believed. That is the pace at which technology has developed.
                  We have brilliant options for online teaching. Learning
                  Management systems have features that facilitate real-time
                  student-teacher interaction, live class recording, online
                  whiteboard, and more. Education as an institution has changed
                  drastically and it is for the best. It saves time, learner
                  have option to learn while they earn. Learning for working
                  professionals are much easier, they can attend the training
                  sessions at their convenience from their office or home. We
                  can make use of the resources optimally. While technology is
                  changing the face of education, it is important to alter the
                  methods and strategies and adapt to the change.
                </p>
                <p>
                  If any XII Pass/ Undergraduate is looking for a Job Oriented
                  training online which will help them to gain industry relevant
                  skills and enhance their employability Basik Academy is the
                  best option. With this one-stop solution, you can opt Diploma,
                  Degree and Certificate courses in accounts &amp; finance with
                  live classes, real-time learner-teacher interaction, case
                  studies &amp; real-world data set to practise, E learning
                  courseware, accounting software application skills and more
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

export default VocationalConttent_2;
