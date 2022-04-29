import React from 'react';
import styles from '../vocationalTraining/VocationalTraining.module.css';
import Image from 'next/image';
import {section,Form} from 'react-bootstrap';
import Artical from '../blog/Artical';
import StayCard from '../blog/StayCard'
import Link from 'next/link';


export const Section02 = () => {
  return (
    <> 
    <section className={`${styles.Vocational02Section02}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                   
                        
                        <ul className={`${styles.pageNavigations}`}>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/blog'>Blog </Link></li>
                            <li><Link href='#'>Vocational Training </Link></li>
                            <li><Link href='#'>Benfits of Vactional Training</Link></li>                            
                        </ul>

                            <section className={`${styles.hdingSection}`}>
                                <h1>Benefits of Vocational Training</h1>
                                <p>Basik Team 4 April,2022</p>
                            </section>
                            <section>
                                <h3>Overview</h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a
                                  type specimen book. It has survived not only five centuries, but also the
                                   leap into electronic typesetting, remaining essentially unchanged. 
                                   It was popularised in the 1960s with the release of Letraset sheets 
                                   containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>                           
                        </section>
                        <section>
                                <h3>Need Scope</h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a
                                  type specimen book. It has survived not only five centuries, but also the
                                   leap into electronic typesetting, remaining essentially unchanged. 
                                   It was popularised in the 1960s with the release of Letraset sheets 
                                   containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>                           
                        </section>
                        <section className='mb-5'>
                                <h3>Need for offering and aligning the Vocational Training </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a
                                  type specimen book. It has survived not only five centuries, but also the
                                   leap into electronic typesetting, remaining essentially unchanged. 
                                   It was popularised in the 1960s with the release of Letraset sheets 
                                   containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p> 
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a
                                  type specimen book. It has survived not only five centuries, but also the
                                   leap into electronic typesetting, remaining essentially unchanged. 
                                   It was popularised in the 1960s with the release of Letraset sheets 
                                   containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p> 
                                <h5>Further, it will add a few more benefits to VTPs as follows : </h5>
                                <ul className={`${styles.courseDetail}`}>
                                    <li>Unique selling Point (USP)-thus Courses selling becomes simpler and easier.</li>
                                    <li>Approaching industries for placement tie-ups is eased out.</li>
                                    <li>VTP with university collaboration stands apart in a horcde of competition selling alike courses.</li>
                                    <li>Institue becomes a facilitator for vertical mobility 10+2 pass out.</li>
                                    <li>Unique selling Point (USP)-thus Courses selling becomes simpler and easier.</li>
                                    <li>Approaching industries for placement tie-ups is eased out.</li>
                                    <li>VTP with university collaboration stands apart in a horcde of competition selling alike courses.</li>
                                    <li>Institue becomes a facilitator for vertical mobility 10+2 pass out.</li>
                                </ul>                          
                        </section>                        
                   
                
                </div>
                <div className='col-md-3'> 
                <div className={`${styles.searchContainer}`}>
                    <Form>
                        <Form.Group className={`${styles.sechBox} mb-4`}  controlId="formBasicSearch">      
                            <Form.Control type="text" placeholder="Search by Keywords" /> 
                            <div className={`${styles.serchIcon}`}><Image width={22} height={22} src="/icons/searchIcon.png" alt='searchIcon'/></div>                   
                        </Form.Group>  
                    </Form>                
            </div>
            <div className={`${styles.allTagsCont}`}>
            <h5>Most Viewed Articles</h5>
            <ul className={`${styles.allTags}`}>
                <li> <Link href='/blogSearch'>All </Link></li>
                <li> <Link href='/blogSearch'>Accounting & Taxation </Link></li>               
                <li> <Link href='/blogSearch'>Arts </Link></li> 
                <li> <Link href='/blogSearch'>Computer Application  </Link></li>
                <li> <Link href='/blogSearch'>Vocational Training </Link></li>
                <li> <Link href='/blogSearch'>Financial Accounting </Link></li>
                <li> <Link href='/blogSearch'>Business </Link></li>
                <li> <Link href='/blogSearch'>Banking Law & Practices </Link></li>
                <li> <Link href='/blogSearch'>More+ </Link></li>
            </ul>
            </div>
            
                <div className={`${styles.articalContainerGlobal}`}>                  
                        <Artical/> 
                </div> 
                        <StayCard/>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Section02