import React from 'react';
import styles from '../blog/Blog.module.css';
import {Tabs, Tab, Nav,Row,Col} from 'react-bootstrap'
import BlogCard from '../blog/BlogCard';
import Image from 'next/image';

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
                            <div className='container'>
                                <div className='row'>                                    
                                    <BlogCard />                                    
                                </div>
                            </div>                        
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab2">
                            <div className='container'>
                                <div className='row'>                                    
                                    <BlogCard />                                    
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab3">
                            <div className='container'>
                                <div className='row'>                                    
                                    <BlogCard />                                    
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab4">
                            <div className='container'>
                                <div className='row'>                                    
                                    <BlogCard />                                    
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab5">
                            <div className='container'>
                                <div className='row'>                                    
                                    <BlogCard />                                    
                                </div>
                            </div> 
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab6">
                            <div className='container'>
                                <div className='row'>                                    
                                    <BlogCard />                                    
                                </div>
                            </div> 
                        </Tab.Pane>

                    </Tab.Content>  
                </Tab.Container>
                </div>
                <div className='col-md-3'>
                    <div className={`${styles.articalContainer}`}>
                        <h5>Most Viewed Articles</h5>
                        <div className={`${styles.articalInnerBox}`}>                        
                                <Image width={130} height={130} src="/blog/blog-7.png" alt="article"/>
                                <div className={`${styles.articalTextBox}`}>
                                    <h6>11 Best Job-Oriented Short Term Courses Which are in-Demand</h6>
                                    <p>Basik Team 4 April,2022</p>
                                </div>                       
                        </div>                    
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default BlogSection01
