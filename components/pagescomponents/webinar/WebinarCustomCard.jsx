import React, { useRef } from "react";
import styles from "./Webinar.module.css";
import Image from "next/image";
import Video from "../../globals/Video";

const WebinarCustomCard = (props) => {
  return (
    <>
      {/* <div id="video01" className={`${styles.df} videoHide`}>
        <div className={`${styles.inrSection}`}>
          <div className="videoCloseBtn" onClick={videoClose}>
            X
          </div>
          <video ref={videoPlayer} width="100%" controls>
            <source src={props.videoSrc} />
          </video>
        </div>
      </div> */}

      <div className={`${styles.CardContainer} ${styles.mobileMbtm} col-md-3`}>
        <div className="card">
          <div className={`${styles.topSction}`}>
            <div className={`${styles.videoTopSection} vidoIcon`}>
              <div id="videoId" className="playpause" onClick={() => props.onClick()}></div>
            </div>
            <Image
              className="d-block"
              width={499}
              height={283}
              src={props.CardImg}
              alt="CardImage"
            />
          </div>
          <div className="card-body">
            <h5 className={`${styles.cardTitl}`}>{props.Title02}</h5>
            <h6 className="cardParagraph">{props.Pagragraph}</h6>
            <h6 className={`${styles.aboutCourse}`}>{props.Title01}</h6>
            <div className={`${styles.cardFooter}`}>
              <span className={`${styles.aboutCourse}`}>
                {props.DateWebinar}
              </span>
              <div className={`${styles.vidoIcon} videoBtom`}>
                <div id="videoId" className="playpause" onClick={() => props.onClick()}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default WebinarCustomCard;
