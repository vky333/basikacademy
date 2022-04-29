import React from "react";
import Header from '../components/globals/header/Header';
import Footer from '../components/globals/footer/Footer';
import BlogSearchSecion01 from '../components/pagescomponents/blogSearch/BlogSearchSecion01'


export default function blog(){
    return(
        <>
         <Header/>
         <BlogSearchSecion01/>
         <Footer/>
        </>
    )
}