import React from "react";
import Image from "next/image";
import styles from "./Basik.module.css";
export const CandiateCard = (props) => {
  const candidateDetail = [
    {
      id: 1,
      profileImg: "/placement/01-Priyanka.png",
      name: "Priyanka",
      degination: "Account Executive",
      Company: "Edutra Consulting Services Pvt. Ltd.",
    },
    {
      id: 2,
      profileImg: "/placement/02-Sachin.png",
      name: "Sachin Kumar",
      degination: "Assistant Accounts Manager",
      Company: "Blackboard Education & Research Foundation",
    },
    {
      id: 3,
      profileImg: "/placement/03-Nikhil.png",
      name: "Nikhil Tiwari",
      degination: "Assistant Account Executive",
      Company: "Edutra Consulting Services Pvt Ltd.",
    },
    {
      id: 4,
      profileImg: "/placement/04-Harish.png",
      name: "Harish Bisht",
      degination: "Sr. Account Executive",
      Company: "Nirgul Infratech LLP",
    },
    {
      id: 5,
      profileImg: "/placement/05-Bhavika.png",
      name: "Bhavika Sood",
      degination: "MIS Executive",
      Company: "Sirus Buying Service ",
    },
    {
      id: 6,
      profileImg: "/placement/06-preet.png",
      name: "Preet Chauhan",
      degination: "Accounts Executive",
      Company: "AISC Infotech Pvt.Ltd.",
    },
    {
      id: 7,
      profileImg: "/placement/07-Dimple.png",
      name: "Dimple Rawat",
      degination: "Data Analyst ",
      Company: "School of Executive Education ",
    },
    {
      id: 8,
      profileImg: "/placement/08-Liza.png",
      name: "Liza Ojha",
      degination: "Backend Operations-Taxation",
      Company: "Revex Media ",
    },
    {
      id: 9,
      profileImg: "/placement/09-Madhu.png",
      name: "Madhu",
      degination: "Data Analytics & MIS",
      Company: "Nexgen ",
    },
    {
      id: 10,
      profileImg: "/placement/10-Tripti-Barua.png",
      name: "Tripti Barua",
      degination: "Accountant",
      Company: "MBR India",
    },
  ];
  return (
    <>
    
        <div className="col-sm-4 mb-4">
          <div className={`${styles.card01} card`}>
            <div>
            <Image
              className="d-block"
              width={339}
              height={349}
              src={props.profileImg}
              alt="Candidate"
            />
            <div className="card-body canditeCard">
              <div className="canditeName text-center">{props.name}</div>
              <div className="canditeDesignation text-center">
                {props.degination}
              </div>
              <div className="CandiateCompny text-center">
                {props.Company}
              </div>
            </div>
            </div>
            <div className={`${styles.HoverCard}`}>
              <div className={`${styles.HoverImg}`}>
              <Image
              className="d-block"
              width={100}
              height={100}
              src={props.hoverMg}
              alt="Candidate"
            />
              </div>
              <div>
              
              {props.hoverText}
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default CandiateCard;
