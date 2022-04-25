import React from 'react';
import styles from '../../about/About.module.css';
import CardGlobal from '../../../pagescomponents/about/section05/CardGlobal'

export const Section05 = () => {
  return (
    <section className={`${styles.aboutSection05} sectionGlobal`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>          
            <h1 className='text-center'>Masterminds Behind</h1>
            <div className={`${styles.cardBX}`}>
            <CardGlobal
            ExportImage="/m1.png"
            Heading="Lorem Heading"
            ExportProfile="CO-Founder, CEO"
            />
             <CardGlobal
            ExportImage="/m2.png"
            Heading="Lorem Heading"
            ExportProfile="CO-Founder, Head Product"
            />
            <CardGlobal
            ExportImage="/m3.png"
            Heading="Lorem Heading"
            ExportProfile="CO-Founder, Head Acedemics"
            />
            </div>
            
        </div>
        </div>
      </div>
    </section>
  )
}

export default Section05 ;
