import React from 'react';
import Header from '../components/globals/header/Header';
import CourseBanner from '../components/pagescomponents/courses/courseBanner/CourseBanner'
import Section01 from '../components/pagescomponents/courses/contentSection01/Section01';
import GetCourseSection from '../components/pagescomponents/courses/contentSection02/GetCourseSection';
import Footer from '../components/globals/footer/Footer';
import LogosSection from '../components/pagescomponents/courses/logosContainer/LogosSection';
import AccordianSection from '../components/pagescomponents/courses/acordianSection03/AccordianSection';
import EnrollSection from '../components/pagescomponents/courses/contentSection04/EnrollSection';
import StudentsReviewComents from '../components/pagescomponents/courses/studentsReviewComents/StudentsReviewComents'

export default function Course(){       
    return(
        <>
            <Header/>
            <CourseBanner/>
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