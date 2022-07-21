import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnchorButton from "../button/AnchorButton";

const Blog = () => {
  return (
    <>
      <section className="blog sectionGlobal">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-5">
              <div className="heading-box">
                <h1>
                  Knowledge <span>Center</span>
                </h1>
              </div>
            </div>
            <div className="col-sm-3">
              <Link href="/blog">
              <div className="blog-card">
                <div className="blogImg">
                  <Image
                    width={350}
                    height={350}
                    src="/blog/Blog-01.png"
                    alt="Blog"
                    className="w-100"
                  />
                </div>
                <div className="blog-content">
                  <h4>BFSI awareness and its importance for this generation</h4>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-sm-3">
            <Link href="/blog">
              <div className="blog-card">
                <div className="blogImg">
                  <Image
                    width={350}
                    height={350}
                    src="/blog/Blog-02.png"
                    alt="Blog"
                    className="w-100"
                  />
                </div>
                <div className="blog-content">
                  <h4>
                    Emerging Trends, role of technology is increasing &amp;
                    changing the face of Education?
                  </h4>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-sm-3">
            <Link href="/blog">
              <div className="blog-card">
                <div className="blogImg">
                  <Image
                    width={350}
                    height={350}
                    src="/blog/Blog-03.png"
                    alt="Blog"
                    className="w-100"
                  />
                </div>
                <div className="blog-content">
                  <h4>
                    Business Accounting &amp; Taxation... Aspiring Career
                    Opportunities
                  </h4>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-sm-3">
            <Link href="/blog">
              <div className="blog-card">
                <div className="blogImg">
                  <Image
                    width={350}
                    height={350}
                    src="/blog/Blog-04.png"
                    alt="Blog"
                    className="w-100"
                  />
                </div>
                <div className="blog-content">
                  <h4>
                    B-Voc Degree for Skills - Accelerate your career growth.
                  </h4>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-sm-12 text-center mt-3">
              <AnchorButton anchorLink="/blog" buttonName="View All" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
