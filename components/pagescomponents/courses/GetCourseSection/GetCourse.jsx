import React from "react";
import styles from '../Course.module.css'
import Image from "next/image";

export const GetCourse = (props) => {
  return (
    <>
      
        <li>
          <Image
            width={58}
            height={58}
            src={props.imageIcon}
            alt="CoursesImage"
          />
          <div className={`${styles.textbox}`}>{props.textbox}</div>
        </li>
        
     
    </>
  );
};

export default GetCourse;
