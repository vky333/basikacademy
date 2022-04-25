import React from 'react';
import Image from 'next/image';
import styles from '../../about/About.module.css'

export const CardGlobal = (props) => {
  return (
    <div className={`${styles.CardGlobal}`}>
        <Image width={226} height={228} src={props.ExportImage} alt="CardImage"/>       
        <h4>{props.Heading}</h4>
        <h5>{props.ExportProfile}</h5>
    </div>
  )
}


export default CardGlobal;