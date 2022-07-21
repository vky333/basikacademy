import React, { useRef } from "react";
import styles from "./Basik.module.css";

export const Video = (props) => {
  const videoPlayer = useRef();
  const play = () => {
    var videoBtn = document.getElementById("videoId");   
    videoBtn.classList.toggle("videoBtnHide");

    if (videoPlayer.current) {
      videoPlayer.current.play();
    }
  };

  return (
    <div className={`${styles.videoBox}`}>
      <video ref={videoPlayer} width="100%" controls >
        <source src={props.videoSrc} />
      </video>
      {/* <div id="videoId" className={`${styles.playpause} basikplyBtn`} onClick={play}></div> */}
    </div>
  );
};

export default Video;
