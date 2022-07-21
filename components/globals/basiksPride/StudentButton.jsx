import React from "react";
import Image from "next/image";
import styles from "./Basik.module.css";
export const StudentButton = (props) => {
  return (
    <div className={`${styles.studentInfoBox}`}>
      <Image width={80} height={50} src={props.PlacementLogo} alt="PlaceMentLogo" className={`${styles.studentimg}`} />
      <div className={`${styles.studentNam}`}>{props.studentName}</div>
    </div>
  );
};

export default StudentButton;
