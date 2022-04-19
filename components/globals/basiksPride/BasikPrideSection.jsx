import React from 'react';
import styles from './Basik.module.css'
import Image from 'next/image';
import{section,Carousel} from 'react-bootstrap';


export const BasikPrideSection = () => {
  return (
    <>
        <section className={`${styles.basikPrideSection}`}>
                <section className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="heading-box">
                                <h1>Basik Pride</h1>
                                <p>Every Student Matter	to us and Basik Pride does
                                     is about opening doors to students, graduates</p>
                            </div>
                        </div>
                    </div>
                </section>
            <section className={`${styles.basikMainfluid}`}>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={`${styles.basikMain}`}>
                            <ul>
                                <li className={`${styles.imgCont}`}>
                                    <Image src="/basiks-pride-accenture.png" alt="accenture" width={280} height={285}/>
                                    <Image src="/basiks-pride-airtel.png" alt="accenture" width={280} height={285}/>
                                    <Image src="/basiks-pride-jio.png" alt="accenture" width={280} height={285}/>
                                </li>
                                <li>
                                    <div className={`${styles.prideNumber}`}>
                                        <h1>20,0000</h1>
                                        <span>Registered</span>
                                    </div>
                                    <div className={`${styles.prideNumber}`}>
                                        <h1>5000</h1>
                                        <span>Placed</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className='studentCommentsSlider mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10 mx-auto'>
                        <Carousel variant="dark">
                            <Carousel.Item>                   
                                <Carousel.Caption>
                                <h5>Found Everything I wanted and build my career in
                                     accounting within on year from basik and my family
                                      are really happy that am earning after 12th without
                                       spending lot of money</h5>
                                <Image className="d-block" src = "/review-image-desktop.png" alt = "studentImage" width={98} height={98} />
                                <p>Anushika sharma</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>                    
                                <Carousel.Caption>
                                <h5>Found Everything I wanted and build my career in
                                     accounting within on year from basik and my family
                                      are really happy that am earning after 12th without
                                       spending lot of money</h5>
                                       <Image className="d-block" src = "/review-image-desktop.png" alt = "studentImage" width={98} height={98} />
                                <p>Anushika sharma</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>                   
                                <Carousel.Caption>
                                <h5>Found Everything I wanted and build my career in
                                     accounting within on year from basik and my family
                                      are really happy that am earning after 12th without
                                       spending lot of money</h5>
                                       <Image className="d-block" src = "/review-image-desktop.png" alt = "studentImage" width={98} height={98} />
                                <p>Anushika sharma</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>

                </div>
            
            </section>
        </section>
    </>
  )
}

export default BasikPrideSection