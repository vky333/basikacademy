import React, { useRef } from "react";

export const Video = (props) => {
  const videoPlayer = useRef(0);

  const play = () => {
    var videoBtn = document.getElementById("videoId");
    var videoShow = document.getElementById("video01");
    videoBtn.classList.toggle("videoBtnHide");
    videoShow.classList.toggle("videoOpacity");
    if (videoPlayer.current) {
      videoPlayer.current.play();
    }
  };

  const videoClose = () => {
    var closeVideo = document.getElementById("videoId");
    var videoShow = document.getElementById("video01");
    closeVideo.classList.toggle("videoBtnHide");
    videoShow.classList.toggle("videoOpacity");
    if (videoPlayer.current) {
      videoPlayer.current.pause();
    }
  };

  return (
    <>
      <div id="video01" className="videoSection videoHide">
        <div className="inerVideo">
          <div className="videoCloseBtn" onClick={videoClose}>
            X
          </div>
          <video ref={videoPlayer} width="100%" controls>
            <source src={props.videoSrc} />
          </video>
        </div>
      </div>
      <div id="videoId" className="playpause" onClick={play}>
        <div className="videoText">Watch Video</div>
      </div>
    </>
  );
};

export default Video;
