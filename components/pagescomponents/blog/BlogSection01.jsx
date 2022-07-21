import React from 'react';
import styles from '../blog/Blog.module.css';
import {Tabs, Tab, Nav,Row,Col} from 'react-bootstrap'
import BlogCard from '../blog/BlogCard';
import Image from 'next/image';
import Artical from "../blog/Artical";
import StayCard from "../blog/StayCard";
import Link from "next/link";

export const BlogSection01 = () => {
  return (
    <section className={`${styles.blogSection01} blogSectionCon sectionGlobal`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
              
                    <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                            <BlogCard />                     
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab2">
                            <BlogCard />  
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab3">
                        <BlogCard />  
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab4">
                        <BlogCard />  
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab5">
                        <BlogCard />  
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab6">
                        <BlogCard />  
                        </Tab.Pane>

                    </Tab.Content>  
                </Tab.Container>
                </div>
                <div className='col-md-3'>                        
                        <StayCard/>                
                </div>
            </div>
        </div>

    </section>
  )
}

export default BlogSection01
