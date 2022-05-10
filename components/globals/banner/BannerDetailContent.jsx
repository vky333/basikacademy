import React from 'react';
import styles from './Banner.module.css';

export const BannerDetailContent = (props) => {

    return (
        <>
            <div className={`${styles.progressBarContainer}`}>
                <div>
                
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 0 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Your skills can determine your career path.</p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 1 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Your concepts are much clear when you pracically apply them.</p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 2 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Get hands on experience with the skill you just attained</p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 3 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>A practical and digital approach to learning BFSI so as to keep you future ready.</p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 4 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Culminating academic and intellectual experience for students make them . </p>
                </div>
            </div>
        </>
    )

}



export default BannerDetailContent;