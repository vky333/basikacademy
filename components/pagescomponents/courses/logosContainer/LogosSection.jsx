import React from 'react';
import styles from '../logosContainer/LogosSection.module.css';
import LogoImage from '../logosContainer/LogoImage';


export const LogosSection = () => {
    const universityLogos = [{
            id: 0,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 1,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 2,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 3,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 4,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 5,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 6,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 7,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 8,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 9,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 10,
            logoImg: "/logos/01nmims-University.png"
        },
        {
            id: 11,
            logoImg: "/logos/01nmims-University.png"
        }
    ]

    return (
        <>
        <section className={`${styles.logoContainers}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Companies where the skills are in demand</h1>
                        <ul className={`${styles.logList}`}>
                            {universityLogos.map(logosvar =>
                                <li key={logosvar.id}><LogoImage logoCard={logosvar} /> </li>
                            )};                            
                        </ul>           
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default LogosSection;