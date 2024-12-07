import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Post = ({blog}) => {
    console.log(blog);
  return (
    <div className='center'>
    <Card className='mx-5 mt-4' style={{ width: '28rem' ,maxHeight:'30rem' }}>
    <Card.Img variant="top" src={blog.image}/>
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
      {
        blog.description
      }
      </Card.Text>
       <Card.Text>Created By:{blog.user.username} </Card.Text>
    </Card.Body>
  </Card>
      
    </div>
  )
}

export default Post
