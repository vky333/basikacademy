import React from 'react';
import styles from '../blog/Blog.module.css';
import {Tabs, Tab, Nav,Row,Col} from 'react-bootstrap'
import BlogCard from '../blog/BlogCard';
import Image from 'next/image';
import Artical from "../blog/Artical";
import StayCard from "../blog/StayCard";
import Link from 'next/link';

export const BlogSection01 = () => {
  return (
    <section className={`${styles.blogSection01} blogSectionCon`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
                <Nav variant="pills" className="flex-row blogTab">
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
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>
                                      <BlogCard />                  
                                </div>
                            </div>                        
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab2">
                        <div className={`${styles.tbCont} container`}>
                                <div className='row'>    
                                    <BlogCard />                
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab3">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>        
                                    <BlogCard />                
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab4">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>         
                                    <BlogCard />                
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab5">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>         
                                    <BlogCard />                
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab6">
                            <div className={`${styles.tbCont} container`}>
                                <div className='row'>        
                                    <BlogCard />              
                                </div>
                            </div> 
                        </Tab.Pane>

                    </Tab.Content>  
                </Tab.Container>
                </div>
                <div className='col-md-3'>
                        <Artical/>
                        <StayCard/>                
                </div>
            </div>
        </div>

    </section>
  )
}

export default BlogSection01
