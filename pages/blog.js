import React from "react";
import Header from '../components/globals/header/Header';
import Footer from '../components/globals/footer/Footer';
import BlogSection01 from '../components/pagescomponents/blog/BlogSection01';
import StaticBanner from '../components/globals/banner/StaticBanner'

export default function blog(){
    return(
        <>
         <Header/>
         <StaticBanner BannerImage="/banner/blog/blogPage-01.png"/>        
         <BlogSection01/>
         <Footer/>
        </>
    )
}