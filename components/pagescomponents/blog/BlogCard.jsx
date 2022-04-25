import React from 'react';
import styles from '../blog/Blog.module.css';
import {Card} from 'react-bootstrap'

export const BlogCard = (props) => {
    const blogCardDetail=[
      {
        id:1,
        cardImage:"/blog/blog-7.png",
        cardTitle:"Card Title1",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:2,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Card Title2",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:3,
        cardImage:"/blog/blog-5.png",
        cardTitle:"Card Title3",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:4,
        cardImage:"/blog/blog-7.png",
        cardTitle:"Card Title4",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:5,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Card Title5",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:6,
        cardImage:"/blog/blog-5.png",
        cardTitle:"Card Title6",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:7,
        cardImage:"/blog/blog-7.png",
        cardTitle:"Card Title7",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:8,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Card Title8",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      },
      {
        id:9,
        cardImage:"/blog/blog-6.png",
        cardTitle:"Card Title9",
        teamHeading:"Team Basik",
        teamDate:"4 April, 2022",
        manHeading:"How to choose a career after 12th?"
      }
    ]
  return (
    <>
    {blogCardDetail.map(blogCardV =>      
    <div className='col-md-4 mb-5'>      
      <div className={`${styles.cardBox} cardContainer`}>            
            <Card key={blogCardV.id}>
                <Card.Img variant="top" src={blogCardV.cardImage} />
                <Card.Body>
                  <Card.Title>{blogCardV.cardTitle}</Card.Title>
                  <div className={`${styles.teamsBox}`}>
                      <span>{blogCardV.teamHeading}</span>
                      <span>{blogCardV.teamDate}</span>
                  </div>
                  <h5>{blogCardV.manHeading}</h5>                
              </Card.Body>              
            </Card> 
      </div>
    </div>
    )}
    </>
  )
}

export default BlogCard

