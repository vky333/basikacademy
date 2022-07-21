import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./OurCourses.module.css";
import Image from "next/image";
import AnchorButton from "../button/AnchorButton";

const ProductsCard = (props) => {
  return (
    <>
      <section
        className={`${styles.productsSection}  typeCourse globalCarousel homeCarousel`}
      >
        <div className="card">
          <Image
            className="d-block"
            width={499}
            height={283}
            src={props.CardImg}
            alt="CardImage"
          />
          <div className="card-body">
            <p className={`${styles.aboutCourse}`}>{props.Title01}</p>
            <h5 className="card-title">{props.Title02}</h5>
            <div className="cardParagraph">{props.Pagragraph}</div>
            <div className={`${styles.starCont}`}>
              <ul className={`${styles.iconStarCont}`}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>                
              </ul>
              <div className={`${styles.ratingBox}`}>
              <span>{props.title04}</span>  {props.title05}
              </div>
            </div>
            <div className={`${styles.cardFooter}`}>
              <span className={`${styles.aboutCourse}`}>{props.NoYear}</span>
              <AnchorButton
                anchorLink={props.ALink}
                buttonName={props.AncrName}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsCard;
