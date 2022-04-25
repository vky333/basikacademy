import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
const Blog = () =>{
    return(
        <>
           <section className='blog'>
           <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <div className="heading-box">
                                    <h1>Our Blog & Videos</h1>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={298} src="/blog/blog-1.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h4>Jobs</h4>
                                        <h5>11 Best Job Oriented Short Term Courses Which are In-Demand</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={380} src="/blog/blog-2.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h4>Career Advice</h4>
                                        <h5>How to Choose a Career After 12th? </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={175} src="/blog/blog-3.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h4>Did you know?</h4>
                                        <h5>Trending Shot Term Courses in 2022</h5>
                                    </div>
                                </div>
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={373} src="/blog/blog-4.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h4>career</h4>
                                        <h5>Trending Shot Term Courses in 2022</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 text-center mt-3">
                                <Button variant="outline-primary" size="lg" className="viewBorderBtn">Know More</Button>
                            </div>
                        </div>
                    </div>
           </section>
        </>
    )
}

export default Blog;