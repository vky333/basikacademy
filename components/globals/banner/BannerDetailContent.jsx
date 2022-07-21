import React from "react";
import styles from "./Banner.module.css";

export const BannerDetailContent = (props) => {
  return (
    <>
      <div className={`${styles.progressBarContainer}`}>
        <div>
          <div className={`${styles.progressBar}`}>
            {props.activeSlide === 0 ? (
              <div className={`${styles.progAnimation}`}></div>
            ) : null}
          </div>
          {props.activeSlide === 0 ? 
            <p>Skills can determine your career path</p> : 
            <p style={{opacity: '.5'}}>Skills can determine your career path</p>
         }
          
        </div>
        <div>
          <div className={`${styles.progressBar}`}>
            {props.activeSlide === 1 ? (
              <div className={`${styles.progAnimation}`}></div>
            ) : null}
          </div>
          {props.activeSlide === 1 ? 
            <p>Get hands-on experience with the skills you just attained</p> : 
            <p style={{opacity: '.5'}}>Get hands-on experience with the skills you just attained</p>
         }
        </div>
        <div>
          <div className={`${styles.progressBar}`}>
            {props.activeSlide === 2 ? (
              <div className={`${styles.progAnimation}`}></div>
            ) : null}
          </div>
          {props.activeSlide === 2 ? 
            <p>Become future-ready with the Practical &amp; Digital learning in BFSI</p> : 
            <p style={{opacity: '.5'}}>Become future-ready with the Practical &amp; Digital learning in BFSI</p>
          }
        </div>
        
      </div>
    </>
  );
};

export default BannerDetailContent;
