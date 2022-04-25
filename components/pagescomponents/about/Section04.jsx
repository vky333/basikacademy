import React from "react";
import styles from '../about/About.module.css'
import Image from 'next/image';

export const Section04 = () =>{
    return(

        <section className={`${styles.aboutSection04} sectionGlobal`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className={`${styles.lftImg}`}>
                        <Image class="d-block w-100" src='/aboutPage/image-03.png' alt='mentor' width={940} height={565}/>
                        </div>
                        <div className={`${styles.rightContent}`}>
                            <h4>Lorem <span>ipsum dolor</span>, sit consectetur.</h4>
                            <ul>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                     Possimus ut quis earum provident.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                     Possimus ut quis earum provident.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                     Possimus ut quis earum provident.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                     Possimus ut quis earum provident.</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                     Possimus ut quis earum provident.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

    )

}

export default Section04;