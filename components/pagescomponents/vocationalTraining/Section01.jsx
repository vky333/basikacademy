import React from 'react';
import styles from '../vocationalTraining/VocationalTraining.module.css';
import Image from 'next/image';
import {section} from 'react-bootstrap'

export const Section01 = (props) => {
  return (
    <>
    <section className={`${styles.bannerSection}`}>      
    <Image width={1983} height={713} src={props.staticBancer} alt='Banner'/>
    </section>
    </>
  )
}


export default Section01