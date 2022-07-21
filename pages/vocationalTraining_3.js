import React from "react";
import Header from '../components/globals/header/Header';
import Footer from '../components/globals/footer/Footer';
import VocationalConttent_3 from '../components/pagescomponents/vocationalTraining/VocationalConttent_3';
import StaticBanner from "../components/globals/banner/StaticBanner";

export default function vocationalTraining(){
    return(
        <>
         <Header/>
         <StaticBanner BannerImage="/banner/blog/ban4.jpg"/> 
         <VocationalConttent_3/>     
         <Footer/>
        </>
    )
}