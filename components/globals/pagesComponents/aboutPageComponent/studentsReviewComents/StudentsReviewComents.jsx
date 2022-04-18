import React from 'react';
import styles from '../studentsReviewComents/StudentsReview.module.css';
import {section,Carousel} from 'react-bootstrap';

export const StudentsReviewComents = () => {
    return(
        <>
            <section className='sliderSection06'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text'>Testimonials</h1>
                            <h6>How that Course helped their career grow  or get a job</h6>
                            <Carousel>
                                    <Carousel.Item interval={1000}>
                                        <div className={`${styles.studentInfo01}`}>
                                                <img
                                                className="d-block"
                                                src="/review-image-desktop.png"
                                                alt="FirstSlide"
                                                />
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                                    distinctio nemo quis pariatur, ad incidunt. Lorem ipsum dolor,
                                                    sit amet consectetur adipisicing elit.</p>
                                                    <h4>Megha</h4>
                                                <h5>From Delhi</h5>
                                        </div>
                                        <div className={`${styles.studentInfo01}`}>
                                                <img
                                                className="d-block"
                                                src="/review-image-desktop.png"
                                                alt="FirstSlide"
                                                />
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                                    distinctio nemo quis pariatur, ad incidunt. Lorem ipsum dolor,
                                                    sit amet consectetur adipisicing elit.</p>
                                                    <h4>Naina Singh</h4>
                                                <h5>From Delhi</h5>
                                        </div>
                                    
                                       
                                       
                                    </Carousel.Item>
                                    <Carousel.Item interval={500}>
                                    <div className={`${styles.studentInfo01}`}>
                                                <img
                                                className="d-block"
                                                src="/review-image-desktop.png"
                                                alt="FirstSlide"
                                                />
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                                    distinctio nemo quis pariatur, ad incidunt. Lorem ipsum dolor,
                                                    sit amet consectetur adipisicing elit.</p>
                                                    <h4>Megha</h4>
                                                <h5>From Delhi</h5>
                                        </div>
                                        <div className={`${styles.studentInfo01}`}>
                                                <img
                                                className="d-block"
                                                src="/review-image-desktop.png"
                                                alt="FirstSlide"
                                                />
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                                    distinctio nemo quis pariatur, ad incidunt. Lorem ipsum dolor,
                                                    sit amet consectetur adipisicing elit.</p>
                                                    <h4>Naina Singh</h4>
                                                <h5>From Delhi</h5>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className={`${styles.studentInfo01}`}>
                                                <img
                                                className="d-block"
                                                src="/review-image-desktop.png"
                                                alt="FirstSlide"
                                                />
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                                    distinctio nemo quis pariatur, ad incidunt. Lorem ipsum dolor,
                                                    sit amet consectetur adipisicing elit.</p>
                                                    <h4>Megha</h4>
                                                <h5>From Delhi</h5>
                                        </div>
                                        <div className={`${styles.studentInfo01}`}>
                                                <img
                                                className="d-block"
                                                src="/review-image-desktop.png"
                                                alt="FirstSlide"
                                                />
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                    Possimus ut quis earum provident. Neque, ipsa repudiandae!
                                                    Voluptatem iusto laudantium, ab a ratione optio molestias 
                                                    distinctio nemo quis pariatur, ad incidunt. Lorem ipsum dolor,
                                                    sit amet consectetur adipisicing elit.</p>
                                                    <h4>Naina Singh</h4>
                                                <h5>From Delhi</h5>
                                        </div>
                                    </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
               
            </section>
        </>

    )
}

export default StudentsReviewComents;