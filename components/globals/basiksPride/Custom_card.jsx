import React from "react";
import styles from "./Basik.module.css";
import Image from "next/image";


export const Custom_card = (props) => {
  return (
    <div className={`${styles.cutomCard} mb-3`}>
      
        <Image src={props.profileImg} width="90" height="93" className={`${styles.studentProfile}`} />
      
      <div className={`${styles.studInformation}`}>

        {props.StudewntInfoText}
      </div>
      <div className={`${styles.btmSection}`}>
        <Image src={props.PlacementLogo} alt="logo" width="100" height="70" />
        <div className={`${styles.studentProf}`}>
          <h5>{props.Name}</h5>
          <p>{props.Designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Custom_card;
