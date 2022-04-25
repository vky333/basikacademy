import React from 'react';
import styles from './Banner.module.css';

export const BannerDetailContent = () =>{
    
    return(
        <>
         <div className={`${styles.progressBarContainer}`}>
                        <div>
                            <div className={`${styles.progressBar}`}>
                                <div className={`${styles.progAnimation}`}></div>
                            </div>
                            <p>Your skills can determine your career path.</p>
                        </div>
                        <div>
                            <div className={`${styles.progressBar}`}>
                                <div className={`${styles.progAnimation}`}></div>
                            </div>
                            <p>Your concepts are much clear when you pracically apply them.</p>
                        </div>
                        <div>
                            <div className={`${styles.progressBar}`}>
                                <div className={`${styles.progAnimation}`}></div>
                            </div>
                            <p>Get hands on experience with the skill you just attained</p>
                        </div>
                        <div>
                            <div className={`${styles.progressBar}`}>
                                <div className={`${styles.progAnimation}`}></div>
                            </div>
                            <p>A practical and digital approach to learning BFSI so as to keep you future ready.</p>
                        </div>
                        <div>
                            <div className={`${styles.progressBar}`}>
                                <div className={`${styles.progAnimation}`}></div>
                            </div>
                            <p>Culminating academic and intellectual experience for students make them . </p>
                        </div>
            </div>
        </>
    )
    
}


function _visiableOnSelect(active){
    alert("dfs")
    console.log(`visiable onSelect active=${active}`);
  };

export default BannerDetailContent ;