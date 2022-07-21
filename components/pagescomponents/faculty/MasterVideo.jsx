import React from "react";
import { Modal } from "react-bootstrap";
import WebinarCustomCard from "../webinar/WebinarCustomCard";
import VideoModalContent from "./VideoModalContent";

export const MasterVideo = () => {

  const [showModal, setShowModal] = React.useState(false)
  const [modalContent, setModalContent] = React.useState(null)

  function VideoModal() {
    return (
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton />
        {modalContent}
      </Modal>
    )
  }

  function setupModal(key, eKey) {
    if(key === 'video-modal') {
      setModalContent(<VideoModalContent videoSRC={eKey}  />)
      setShowModal(true)
    }
  }

  return (
    <div className="container">
      <div className="row">

        <h1 className="heading-box">
          Meet Your <span>Masters</span>
        </h1>

        <WebinarCustomCard
          CardImg="/course/course-image-1.png"
          Title01="Webinar"
          Title02="Dr. Vivek Singh  "
          Pagragraph="University of Delhi as Guest Faculty"
          DateWebinar="1 June 2022"
          
          onClick={() => setupModal('video-modal', "/video/GstVideoFor.mp4")}
        />
        <WebinarCustomCard
          CardImg="/course/course-image-2.png"
          Title01="Webinar"
          Title02="Mr. Amir "
          Pagragraph="Associate Professor & Research"
          DateWebinar="1 June 2022"
          
          onClick={() => setupModal('video-modal', "/video/GstVideoFor.mp4")}
        />
        <WebinarCustomCard
          CardImg="/course/course-image-3.png"
          Title01="Webinar"
          Title02="Ms.Kanika Tuli Sharma "
          Pagragraph="CA Intermediate is specialised"
          DateWebinar="1 June 2022"
          
          onClick={() => setupModal('video-modal', "/video/GstVideoFor.mp4")}
        />
        <WebinarCustomCard
          CardImg="/course/course-image-4.png"
          Title01="Webinar"
          Title02="Mr. Atul Kr."
          Pagragraph="Associated with ICFE as Head"
          DateWebinar="1 June 2022"
          
          onClick={() => setupModal('video-modal', "/video/GstVideoFor.mp4")}
        />
      </div>
      <VideoModal />
    </div>

  );
};

export default MasterVideo;
