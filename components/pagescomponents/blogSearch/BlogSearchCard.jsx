import React from 'react';
import styles from '../blogSearch/BlogSearch.module.css';
import Image from 'next/image';
import {sectopm} from 'react-bootstrap';

export const BlogSearchCard = () => {

    const blogSearchCardDetails =[
        {
            cardMg:"/blog/blog-5.png",
            cardTitle01:"Jobs",
            cardH5:"11 Best Job-Oriented Short Term Courses Which are In-Deman",
            span1:"Team Basik",
            span2:"4 April, 2022",
            Parag:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. Neque, ipsa repudiandae!    Voluptatem iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, ad incidunt.",
            readMButton:"Read More>>"
        },
        {
            cardMg:"/blog/blog-6.png",
            cardTitle01:"Jobs",
            cardH5:"11 Best Job-Oriented Short Term Courses Which are In-Deman",
            span1:"Team Basik",
            span2:"4 April, 2022",
            Parag:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. Neque, ipsa repudiandae!    Voluptatem iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, ad incidunt.",
            readMButton:"Read More>>"
        },
        {
            cardMg:"/blog/blog-7.png",
            cardTitle01:"Jobs",
            cardH5:"11 Best Job-Oriented Short Term Courses Which are In-Deman",
            span1:"Team Basik",
            span2:"4 April, 2022",
            Parag:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. Neque, ipsa repudiandae!    Voluptatem iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, ad incidunt.",
            readMButton:"Read More>>"
        },
        {
            cardMg:"/blog/blog-5.png",
            cardTitle01:"Jobs",
            cardH5:"11 Best Job-Oriented Short Term Courses Which are In-Deman",
            span1:"Team Basik",
            span2:"4 April, 2022",
            Parag:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quis earum provident. Neque, ipsa repudiandae!    Voluptatem iusto laudantium, ab a ratione optio molestias distinctio nemo quis pariatur, ad incidunt.",
            readMButton:"Read More"
        }
    ]
    
  return (
    <>
        {blogSearchCardDetails.map(serchCrd =>
        <section className={`${styles.blogSearchCard} mb-5`} key={serchCrd.id}>
            <Image className={`${styles.cardMg}`} width={324} height={234} src={serchCrd.cardMg} alt="cardImage"/>
            <div className={`${styles.cardContentBox}`}>
                <div className={`${styles.cardTitle01}`}>{serchCrd.cardTitle01}</div>
                <h5>{serchCrd.cardH5}</h5>
                <div className={`${styles.cardTitle02}`}>
                    <span>{serchCrd.span1}</span>
                    <span>{serchCrd.span2}</span>
                </div>
                <p>{serchCrd.Parag}</p>
                <div className={`${styles.readMButton}`}>{serchCrd.readMButton}</div>
            </div>
        </section>
        )}

    </>
  )
}

export default BlogSearchCard
