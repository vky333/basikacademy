import React from "react";
import styles from '../Course.module.css'
import AnchorButton from "../../../globals/button/AnchorButton";

export const BannerBtnCont = () => {
  return (
    <>
      <div className={`${styles.banerBtnCont}`}>
        <AnchorButton anchorLink="/contact" buttonName="Enroll Now"/>
        {/* <AnchorButton anchorLink="/gallery" buttonName="Take a Trial Video"/> */}
        
      </div>
    </>
  );
};

export default BannerBtnCont;
