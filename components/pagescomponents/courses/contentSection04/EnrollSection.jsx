import React from 'react'
import {section} from 'react-bootstrap';
import TalkComponentGlobal from '../../../globals/talkExpertLink/TalkComponentGlobal';

export const EnrollSection = () => {
  return (
      <>
    <section className='aboutEnrollSection'>
        <TalkComponentGlobal 
                Heading="Want to see yourself Job-Ready" 
                Button="Enroll Now"                  
            />
    </section>
    </>
  )
}

export default EnrollSection;
