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
                                        <Image width={323} height={298} src="/Home/blog/Blog-01.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h5>Jobs</h5>
                                        <h4>11 Best Job Oriented Short Term Courses Which are In-Demand</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={380} src="/Home/blog/Blog-02.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h5>Career Advice</h5>
                                        <h4>How to Choose a Career After 12th? </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={175} src="/Home/blog/Blog-03.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h5>Did you know?</h5>
                                        <h4>Trending Shot Term Courses in 2022</h4>
                                    </div>
                                </div>
                                <div className="blog-card">
                                    <div className="blogImg">
                                        <Image width={323} height={373} src="/Home/blog/Blog-04.png" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h5>career</h5>
                                        <h4>Trending Shot Term Courses in 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 text-center mt-3">
                                <Button variant="outline-primary" size="lg" className="viewBorderBtn">View All</Button>
                            </div>
                        </div>
                    </div>
           </section>
        </>
    )
}

export default Blog;