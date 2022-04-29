import React from 'react';
import styles from '../blog/Blog.module.css';
import Image from 'next/image';


export const BlogBanner = () => {
  return (
    <>
    <section className={`${styles.blogBanner}`}> 
      <div className={`${styles.banImg}`}>
        <Image width={2000} height={469} src="/Home/ban/ban5.png" alt='Banner'/>
        </div>
          <div className={`${styles.bannerCont} container`}>
            <div className='row'>
              <div className='col-md-12'>
                <h1>Your Skills Can Determine Your Career Path.</h1>              
          </div>
        </div>
      </div>
    </section>
    </>
  )

}

export default BlogBanner;
