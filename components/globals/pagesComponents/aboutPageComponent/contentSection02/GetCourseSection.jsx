import React from 'react';
import styles from './GetCourseSection.module.css';
import {section} from 'react-bootstrap';
import Image from 'next/image';

export const GetCourseSection = (props) =>{
    
    return(
        <>
            <section className={`${styles.getCourseCont}`}>
                <h1>What you get out of this courses</h1>
                <ul className= {`${styles.getCoursList}`}>
                    <li><Image width={58} height={58} src='/aboutPage/inDepthKnowledgeSkills.png' alt='InDepthKnowledgeSkills' /><span>In-depth knowledge & skills</span></li>
                    <li><Image width={58} height={58} src='/aboutPage/accountsDTGST.png' alt='AccountsDTGST' /><span>Accounts | DT | GST | Tally | Excel & more</span></li>
                    <li><Image width={58} height={58} src='/aboutPage/entryLevelJobSuccess.png' alt='EntryLevelJobSuccess'/><span>Entry-level job success</span></li>
                    <li><Image width={58} height={58} src='/aboutPage/practicalComputeRisedApplications.png' alt='practicalComputeRisedApplications'/><span>Practical & computerised applications</span></li>
                    <li><Image width={58} height={58} src='/aboutPage/certificateDiploma.png' alt='certificateDiploma'/><span>Certificate & Diploma = 1st yr of Bachelor Degree</span></li>
                </ul>

            </section>
        </>

    )

}

export default GetCourseSection;


