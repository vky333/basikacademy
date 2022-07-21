import React from 'react';
import styles from '../../about/About.module.css';
import CardGlobal from '../../../pagescomponents/about/section05/CardGlobal'

export const Section05 = () => {
  return (
    <section className={`${styles.aboutSection05} sectionGlobal`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>          
            <h1 className='text-center'>Our Core Team</h1>
            <div className={`${styles.cardBX}`}>
            <CardGlobal
            ExportImage="/about/c1.png"
            Heading="Mayank Gupta"
            ExportProfile="Chief Executive Officer"
            />
             <CardGlobal
            ExportImage="/about/c2.png"
            Heading="Rohit Gupta"
            ExportProfile="Chief Operating Officer"
            />
            <CardGlobal
            ExportImage="/about/c3.png"
            Heading="Ashok Joshi"
            ExportProfile="AVP-Skill Development"
            />
            
            <CardGlobal
            ExportImage="/about/Sarthak.jpg"
            Heading="Sarthak Garg"
            ExportProfile="Head-Digital Marketing "
            />

            <CardGlobal
            ExportImage="/about/c4.png"
            Heading="Vini Mathew"
            ExportProfile="AVP HR"
            />
            <CardGlobal
            ExportImage="/about/c5.png"
            Heading="Kriti Bhalla"
            ExportProfile="Sr. Manager- Sales & Operations"
            />
            </div>
            
        </div>
        </div>
      </div>
    </section>
  )
}

export default Section05 ;
