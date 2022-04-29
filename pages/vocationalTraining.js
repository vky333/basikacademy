import React from "react";
import Header from '../components/globals/header/Header';
import Footer from '../components/globals/footer/Footer';
import Section01 from '../components/pagescomponents/vocationalTraining/Section01';
import Section02 from '../components/pagescomponents/vocationalTraining/Section02';

export default function vocationalTraining(){
    return(
        <>
         <Header/>
         <Section01 staticBancer="/Home/ban/ban4.png"/>
         <Section02/>     
         <Footer/>
        </>
    )
}