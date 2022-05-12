import React from "react";
import Header from "../../globals/header/Header";
import Footer from "../../globals/footer/Footer";
import HeadingContent from "../../globals/headingContent/HeadingContent";
import StaticBanner from "../../globals/banner/StaticBanner";
import Card_Custom from "./Card_Custom";
import { Carousel, section } from "react-bootstrap";
import Image from "next/image";

export const Faculty = () => {
  return (
    <>
      <Header />
      <section className="Ban mb-5  ">
        <Carousel>
          <Carousel.Item>
            <StaticBanner
              BannerImage="/Banners/Home/Homepage-banner-05.png"
              Heading="Meet Our Faculty"
              Para="Every Student Matter to us and Basik Pride does is about opening doors to students, gradu"
            />
          </Carousel.Item>
          <Carousel.Item>
            <StaticBanner
              BannerImage="/Banners/Home/Homepage-banner-03.png"
              Heading="Meet Our Faculty"
              Para="Every Student Matter to us and Basik Pride does is about opening doors to students, gradu"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              Basik Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="col-md-12 mb-4">
              <HeadingContent
                heading="Our Academic Council"
                pagragraph="Basik Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="col-md-6 facultyCard01">
              <Card_Custom
                CardImage="/faculty/c1.png"
                CardTitle="MS.Preeti Gupta "
                CardText="M Com, MCA, MSW & M.ED
                Academic Head-Blackboard
                Group of Companies."
              />
            </div>
            <div className="col-md-6 facultyCard01">
              <Card_Custom
                CardImage="/faculty/c2.png"
                CardTitle="Dr.Shahabuddin Usmani "
                CardText="PHD (Commerce)
                Academic Advisory & Consultancy (Professor - Jamia Millia Islamia, University)"
              />
            </div>

            <div className="col-md-12 mb-4">
              <h1>Our Faculty Members</h1>
            </div>

            <div className="col-md-3 facultyCard02">
              <Card_Custom
                CardImage="/faculty/f1.png"
                CardTitle="Dr. Vivek Singh "
                CardText="Phd. Commerce
                Training Consultant"
              />
            </div>
            <div className="col-md-3 facultyCard02">
              <Card_Custom
                CardImage="/faculty/f2.png"
                CardTitle="Mr. Amir "
                CardText="M.Phil-English
                Freelance Trainer"
              />
            </div>
            <div className="col-md-3 facultyCard02">
              <Card_Custom
                CardImage="/faculty/f3.png"
                CardTitle="Ms.Kanika "
                CardText="M.Com,CA-Inter
                Trainer-Taxation"
              />
            </div>
            <div className="col-md-3 facultyCard02">
              <Card_Custom
                CardImage="/faculty/f4.png"
                CardTitle="Atul Agarwal "
                CardText="MBA Finance
                Trainer-Computer & Accounts"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faculty;
