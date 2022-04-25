import React from "react";
import Header from '../components/globals/header/Header';
import Footer from '../components/globals/footer/Footer';
import BlogBanner from '../components/pagescomponents/blog/BlogBanner';
import BlogSection01 from '../components/pagescomponents/blog/BlogSection01'

export default function blog(){
    return(
        <>
         <Header/>
         <BlogBanner/>
         <BlogSection01/>
         <Footer/>
        </>
    )
}