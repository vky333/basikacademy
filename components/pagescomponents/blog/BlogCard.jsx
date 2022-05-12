import React from 'react';
import styles from '../blog/Blog.module.css';
import {Card,Button} from 'react-bootstrap';
import Link from 'next/link';

export const BlogCard = (props) => {
    const blogCardDetail=[
      {
        id:1,
        cardImage:"/blog/blog-7.png",
        cardTitle:"Career Advice",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:2,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Vocational Training",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:3,
        cardImage:"/blog/blog-5.png",
        cardTitle:"Jobs",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:4,
        cardImage:"/blog/blog-7.png",
        cardTitle:"Career Advice",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:5,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Vocational Training",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:6,
        cardImage:"/blog/blog-5.png",
        cardTitle:"Jobs",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:7,
        cardImage:"/blog/blog-7.png",
        cardTitle:"Career Advice",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:8,
        cardImage:"/blog/blog-5.png",
        cardTitle:"Jobs",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:9,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Vocational Training",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      }
    ]
  return (
    <>
      {blogCardDetail.map(blogCardV =>      
      <div className='col-md-12 mb-5' key={blogCardV.id}>      
        <div className={`${styles.cardBox} cardContainer`}>  
          <Link href='/vocationalTraining' passHref>
                <Card className={`${styles.CustomCard}`}>              
                    <Card.Img variant="top" src={blogCardV.cardImage}  className={`${styles.cardImg}`}/>
                    <Card.Body>                    
                      <Card.Title className={`${styles.cardTitle}`}>{blogCardV.cardTitle}</Card.Title>
                      <h5>{blogCardV.manHeading}</h5> 
                      <div className={`${styles.teamsBox}`}>
                          <span>{blogCardV.teamHeading}</span>
                          <span>{blogCardV.teamDate}</span>
                      </div>
                      <p>This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                        <Button variant="primary" type="submit" className={`${styles.readMoreBtn}`}>Read More</Button>
                                     
                  </Card.Body> 
                </Card>
          </Link> 
        </div>
      </div>
      )}
    </>
  )
}

export default BlogCard

