import React from 'react';
import styles from './GetCourseSection.module.css';
import {section} from 'react-bootstrap';

export const GetCourseSection = (props) =>{
    
    return(
        <>
            <section className={`${styles.getCourseCont}`}>
                <h1>What you get out of this courses</h1>
                <ul className= {`${styles.getCoursList}`}>
                    <li><span><img src='/aboutPage/inDepthKnowledgeSkills.png' alt='InDepthKnowledgeSkills' /></span>In-depth knowledge & skills</li>
                    <li><span><img src='/aboutPage/accountsDTGST.png' alt='AccountsDTGST' /></span>Accounts | DT | GST | Tally | Excel & more</li>
                    <li><span><img src='/aboutPage/entryLevelJobSuccess.png' alt='EntryLevelJobSuccess'/></span>Entry-level job success</li>
                    <li><span><img src='/aboutPage/practicalComputeRisedApplications.png' alt='practicalComputeRisedApplications'/></span>Practical & computerised applications</li>
                    <li><span><img src='/aboutPage/certificateDiploma.png' alt='certificateDiploma'/></span>Certificate & Diploma = 1st yr of Bachelor's Degree</li>
                </ul>

            </section>
        </>

    )

}

export default GetCourseSection;


