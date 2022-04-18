import React from 'react';
import Header from '../components/globals/header/Header';
import AboutBanner from '../components/globals/pagesComponents/aboutPageComponent/aboutBanner/AboutBanner'
import Section01 from '../components/globals/pagesComponents/aboutPageComponent/contentSection01/Section01';
import GetCourseSection from '../components/globals/pagesComponents/aboutPageComponent/contentSection02/GetCourseSection';
import Footer from '../components/globals/footer/Footer';
import LogosSection from '../components/globals/pagesComponents/aboutPageComponent/logosContainer/LogosSection';
import AccordianSection from '../components/globals/pagesComponents/aboutPageComponent/acordianSection03/AccordianSection';
import EnrollSection from '../components/globals/pagesComponents/aboutPageComponent/contentSection04/EnrollSection';
import StudentsReviewComents from '../components/globals/pagesComponents/aboutPageComponent/studentsReviewComents/StudentsReviewComents'

export default function About(){       
    return(
        <>
            <Header/>
            <AboutBanner/>
            <Section01/>
            <GetCourseSection/> 
            <AccordianSection/>
            <LogosSection/>
            <StudentsReviewComents/>
            <EnrollSection/>
            <Footer/>
        </>
    )
}