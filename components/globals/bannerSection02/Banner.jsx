import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../bannerSection02/Banner.module.css'

export const Banner = () => {

    const [slideIndex, setSlideIndex] = useState(1);
    let n = 3;

    useEffect(() => {
        var i;
        var slides = document.getElementsByClassName(styles.mySlides);

        if (n > slides.length) { setSlideIndex(1) }
        if (n < 1) { setSlideIndex(slides.length) }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

    }, [slideIndex]);
    
    function plusSlides(n) {
        setSlideIndex(n);
    }

  return (
    <>
        <div className={`${styles.slideshowContainer}`}>
            <div className={`${styles.mySlides} ${styles.fade}`}>
                <div className={`${styles.numbertext}`}>1 / 3</div>
                <Image className="d-block w-100" src="/Home/ban/ban1.png" width={2000} height={831}/>
                <div className={`${styles.text}`}>Caption Text</div>
            </div>
            <div className={`${styles.mySlides} ${styles.fade}`}>
                <div className={`${styles.numbertext}`}>2 / 3</div>
                <Image className="d-block w-100" src="/Home/ban/ban2.png" width={2000} height={831}/>
                <div className={`${styles.text}`}>Caption Two</div>
            </div>
            <div className={`${styles.mySlides} ${styles.fade}`}>
                <div className={`${styles.numbertext}`}>3 / 3</div>
                <Image className="d-block w-100" src="/Home/ban/ban3.png" width={2000} height={831}/>
                <div className={`${styles.text}`}>Caption Three</div>
            </div>
            <a className={`${styles.prev}`} onClick={() => plusSlides(-1)}></a>
            <a className={`${styles.next}`} onClick={() => plusSlides(1)}></a>
            <div className={`${styles.progressBarContainer}`}>
                <div>
                    <div data-slick-index="0" className={`${styles.progressBar}`}>
                        <div className={`${styles.progAnimation}`}></div>
                    </div>
                    <p>Your skills can determine your career path.</p>
                </div>
                <div>
                    <div data-slick-index="1" className={`${styles.progressBar}`}>
                        <div className={`${styles.progAnimation}`}></div>
                    </div>
                    <p>Your concepts are much clear when you pracically apply them.</p>
                </div>
                <div>
                    <div data-slick-index="2" className={`${styles.progressBar}`}>
                        <div className={`${styles.progAnimation}`}></div>
                    </div>
                    <p>Get hands on experience with the skill you just attained</p>
                </div>
                <div>
                    <div data-slick-index="3" className={`${styles.progressBar}`}>
                        <div className={`${styles.progAnimation}`}></div>
                    </div>
                    <p>A practical and digital approach to learning BFSI so as to keep you future ready.</p>
                </div>
                <div>
                    <div data-slick-index="4" className={`${styles.progressBar}`}>
                        <div className={`${styles.progAnimation}`}></div>
                    </div>
                    <p>Culminating academic and intellectual experience for students make them 'feild-ready'. </p>
                </div>
            </div>
        </div>
        
        
    </>

  )
}


export default Banner;