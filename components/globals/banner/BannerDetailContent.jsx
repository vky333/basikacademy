import React from 'react';
import styles from './Banner.module.css';

export const BannerDetailContent = () =>{
    return(
        <>
         <div className={`${styles.progressBarContainer}`}>
                        <div>
                            <span className={`${styles.progressBar}`}></span>
                            <p>Your skills can determine your career path.</p>
                        </div>
                        <div>
                            <span className={`${styles.progressBar}`}></span>
                            <p>Your concepts are much clear when you pracically apply them.</p>
                        </div>
                        <div>
                            <span className={`${styles.progressBar}`}></span>
                            <p>Get hands on experience with the skill you just attained</p>
                        </div>
                        <div>
                            <span className={`${styles.progressBar}`}></span>
                            <p>A practical and digital approach to learning BFSI so as to keep you future ready.</p>
                        </div>
                        <div>
                            <span className={`${styles.progressBar}`}></span>
                            <p>Culminating academic and intellectual experience for students make them . </p>
                        </div>
            </div>
        </>
    )
}

export default BannerDetailContent ;