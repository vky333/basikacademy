import React from 'react';
import Image from 'next/dist/client/image';
import styles from '../blog/Blog.module.css';

export const Artical = () => {

  const articalDetails =[
      {
        id:1,
        Image:"/blog/artticleImg.png",
        text1:"11 Best Job-Oriented Short Term Courses Which are in-Demand",
        text2:"Basik Team 4 April,2022"
        
      },
      {
        id:2,
        Image:"/blog/artticleImg.png",
        text1:"11 Best Job-Oriented Short Term Courses Which are in-Demand",
        text2:"Basik Team 4 April,2022"
        
      },
      {
        id:3,
        Image:"/blog/artticleImg.png",
        text1:"11 Best Job-Oriented Short Term Courses Which are in-Demand",
        text2:"Basik Team 4 April,2022"
        
      },
      {
        id:4,
        Image:"/blog/artticleImg.png",
        text1:"11 Best Job-Oriented Short Term Courses Which are in-Demand",
        text2:"Basik Team 4 April,2022"
        
      }

  ]


  return (
    <>
     <div className={`${styles.articalContainer}`}>
                        <h5>Most Viewed Articles</h5>
        {articalDetails.map(iteamArtical =>
          <div className={`${styles.articalInnerBox}`} key={iteamArtical.id}>                        
          <Image width={130} height={130} src={iteamArtical.Image} className={`${styles.articleImg}`} alt="article"/>
          <div className={`${styles.articalTextBox}`}>
            <h6>{iteamArtical.text1}</h6>
            <p>{iteamArtical.text2}</p>
          </div>                       
        </div> 
        )}  
        </div>
    </>
  )
}


export default Artical