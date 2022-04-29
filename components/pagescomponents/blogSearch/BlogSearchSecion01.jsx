import React from 'react';
import styles from '../blogSearch/BlogSearch.module.css';
import Image from 'next/image';
import {sectopm, Form,Nav, Tab} from 'react-bootstrap';
import Artical from "../blog/Artical";
import BlogSearchCard from '../blogSearch/BlogSearchCard'


export const BlogSearchSecion01 = () => {
  return (
    <>
    <section className={`${styles.BlogSearchSecion01}`}>
        <div className='container'>
            <div className='row'>
                <div  className='col-md-12'>
                    <h1>Blog</h1>
                    <Form>
                        <Form.Group className={`${styles.sechBox} mb-4`}  controlId="formBasicSearch">      
                            <Form.Control className={`${styles.serchInput}`} type="text" placeholder="Search by Keywords" /> 
                            <div className={`${styles.serchIcon}`}>
                            <Image width={22} height={22} src="/icons/searchIcon.png" alt='searchIcon'/>
                            </div>                   
                        </Form.Group>  
                    </Form>   
                </div>                
            </div>
        </div>
    </section>
    <section className={`${styles.tabContainer}`}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
                <Nav variant="pills" className={`${styles.blogSearchTab} flex-row SearchTab`}>
                            <Nav.Item>
                            <Nav.Link eventKey="tab1">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="tab2">Accounting & Taxation </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="tab3">Computer Application</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="tab4">Vocational Training</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="tab5">Financial Accounting</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="tab6">Banking Law & Practices</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="tab7">More +</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                                  
                                </div>
                            </div>                        
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab2">
                        <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                              
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab3">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                                
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab4">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                                  
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab5">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                                    
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab6">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                                   
                                </div>
                            </div>
                             
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab7">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>                                    
                                <BlogSearchCard/>                                  
                                </div>
                            </div>
                             
                        </Tab.Pane>

                    </Tab.Content>  
                </Tab.Container>
                </div>
                <div className='col-md-3'>
                <div className={`${styles.articalContainerGlobal}`}>  
                  <Artical/>
                 </div> 

                <aside className={`${styles.popularCourseBox}`}>
                <h5>Popular Courses</h5>
               <ul>
                   <li>Computer Application for Business</li>
                   <li>Introduction of Goods & Services Tax</li>
                   <li>Tally Prime for Accounts & Inventory</li>
                   <li>General English & Soft Skill</li>
               </ul>
               <div className={`${styles.viewAllBtn}`}>View All</div>

                </aside>
                                                                  
                   
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}


export default BlogSearchSecion01