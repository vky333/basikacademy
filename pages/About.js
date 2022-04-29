import React from "react";
import Header from '../components/globals/header/Header';
import CourseBanner from '../components/pagescomponents/courses/courseBanner/CourseBanner';
import EnrollSection from '../components/pagescomponents/courses/contentSection04/EnrollSection';
import Footer from '../components/globals/footer/Footer';
import Section02 from '../components/pagescomponents/about/Section02';
import Section03 from '../components/pagescomponents/about/Section03';
import Section04 from '../components/pagescomponents/about/Section04';
import Section05 from '../components/pagescomponents/about/section05/Section05';
import Section01 from '../components/pagescomponents/vocationalTraining/Section01'




export default function about(){       
    return(
        <>
            <Header/>
            <Section01 staticBancer="/Home/ban/ban3.png"/>
            <Section02/> 
            <Section03/>
            <Section04/>
            <Section05/>
            <EnrollSection/>
            <Footer/>
        </>
    )
}