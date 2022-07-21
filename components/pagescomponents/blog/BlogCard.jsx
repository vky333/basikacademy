import React from "react";
import styles from "../blog/Blog.module.css";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export const BlogCard = (props) => {
  const blogCardDetail = [
    {
      id: 1,
      cardImage: "/blog/Blog-01.png",
      manHeading: "BFSI awareness and its importance for this generation",
      teamDate: "4 April, 2022",
      descriptn: `In today’s world where everything is moving towards having a digital presence, it becomes
      important for everyone to keep learning how they can benefit from it in their lives.
      `,
      anchorLink: "/vocationalTraining_1",
      buttonName: "Read More",
    },
    {
      id: 2,
      cardImage: "/blog/Blog-02.png",
      manHeading: "Emerging Trends, role of technology is increasing & changing the face of Education?",
      teamDate: "1 May, 2022",
      descriptn: `The world is changing at a rapid pace. Role of technology is increasing also the development and
      advancement of technology have brought in so many changes.
      `,
      anchorLink: "/vocationalTraining_2",
      buttonName: "Read More",
    },
    {
      id: 3,
      cardImage: "/blog/Blog-03.png",
      cardTitle: "Career Advice",
      manHeading: "Business Accounting & Taxation... Aspiring Career Opportunities",
      teamDate: "8 June, 2022",
      descriptn: `Taxes – The foremost way of any government for their revenues. They are also the backbone of all
      the development that takes place in a country.  `,
      anchorLink: "/vocationalTraining_3",
      buttonName: "Read More",
    },

    {
      id: 4,
      cardImage: "/blog/Blog-04.png",
      manHeading: "B-Voc Degree for Skills - Accelerate your career growth.  ",
      teamDate: "2 July, 2022",
      descriptn: `Bvoc: A Bachelor of Vocation (BVoc) is an industry-integrated 
      course that trains aspirants to get the skills they need for a job. 
      The differentiating factor would be the way this program is carried out. `,
      anchorLink: "/vocationalTraining_4",
      buttonName: "Read More",
    },
  ];
  return (
    <>
      {blogCardDetail.map((blogCardV) => (
        <div className={`${styles.cardBox} cardContainer`} key={blogCardV.id}>
          <Card className={`${styles.CustomCard}`}>
            <Card.Img
              variant="top"
              src={blogCardV.cardImage}
              className={`${styles.cardImg}`}
            />
            <Card.Body className={`${styles.cardBody}`}>
              <h5>{blogCardV.manHeading}</h5>
              <div className={`${styles.teamsBox}`}>
                <span>{blogCardV.teamDate}</span>
              </div>
              <div className={`${styles.blogDescription}`}>
                {blogCardV.descriptn}
              </div>

              <Link href={blogCardV.anchorLink}>
                <a className={`${styles.readMoreBtn} anchorbtnStyle`}>
                  {blogCardV.buttonName}
                </a>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
