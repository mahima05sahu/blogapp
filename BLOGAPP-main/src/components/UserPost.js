import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({blog,user}) => {
    console.log(blog);
  return (
    <div className='center'>
    <Card className='mx-5 mt-4' style={{ width: '28rem' ,height:"30rem" }}>
    <Card.Img variant="top" src={blog.image}/>
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
      {
        blog.description
      }
      </Card.Text>
       <Card.Text>Created By:{user.username} </Card.Text>
    </Card.Body>
  </Card>
      
    </div>
  )
}

export default UserCard
