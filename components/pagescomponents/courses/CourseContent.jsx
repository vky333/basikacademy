import React from "react";
import styles from "../courses/Course.module.css";

export const CourseContent = () => {
  return (
    <>
      <ul>
        <li>
          <span className={`${styles.circleBox}`}>4k+</span>
          <span>Placements Students</span>
        </li>
        <li>
          <span className={`${styles.circleBox}`}>1k+</span>
          <span>Live Sessions</span>
        </li>
        
        <li>
          <span className={`${styles.circleBox}`}>5k+</span>
          <span>Learners</span>
        </li>
        <li>
          <span className={`${styles.circleBox}`}>7k+</span>
          <span>Ratings</span>
        </li>
        <li>
          <span className={`${styles.circleBox}`}>1.5k+</span>
          <span>Live Sessions</span>
        </li>
      </ul>
    </>
  );
};

export default CourseContent;
