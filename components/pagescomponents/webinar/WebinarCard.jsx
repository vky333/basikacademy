import React from 'react'
import styles from "../webinar/Webinar.module.css";
import WebinarCustomCard from "./WebinarCustomCard";

export const WebinarCard = () => {
  return (
    
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Most Recent Webinars</h1>
            </div>
            <WebinarCustomCard
              CardImg="/course/course-image-1.png"
              Title01="Manoj Soni"
              Title02="BASIK Webinar "
              Pagragraph="Certified Finance Executive"
              DateWebinar="1 June 2022"
              videoSrc="/video/GstVideoFor.mp4"
            />
            <WebinarCustomCard
              CardImg="/course/course-image-2.png"
              Title01="Manoj Soni"
              Title02="BASIK Webinar "
              Pagragraph="Certified Finance Executive"
              DateWebinar="1 June 2022"
              videoSrc="/video/GstVideoFor.mp4"
            />
            <WebinarCustomCard
              CardImg="/course/course-image-3.png"
              Title01="Manoj Soni"
              Title02="BASIK Webinar "
              Pagragraph="Certified Finance Executive"
              DateWebinar="1 June 2022"
              videoSrc="/video/GstVideoFor.mp4"
            />
            <WebinarCustomCard
              CardImg="/course/course-image-4.png"
              Title01="Manoj Soni"
              Title02="BASIK Webinar "
              Pagragraph="Certified Finance Executive"
              DateWebinar="1 June 2022"
              videoSrc="/video/GstVideoFor.mp4"
            />
          </div>
        
        </div>
    
  )
}


export default WebinarCard