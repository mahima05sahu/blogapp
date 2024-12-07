import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Post from '../components/Post';
import UserCard from '../components/UserPost';

const UserPost = () => {
   const [blogs,setBlogs]=useState([]);
   const [user,setUser]=useState({});
     useEffect(()=>{
                const loadAllBlogs=async()=>{
                  try {
                      const id=localStorage.getItem('id');
                    const {data}=await  axios.get(`http://localhost:8080/api/v1/blog/getUserBlog/${id}`);
                        console.log(data);
                       setBlogs(data.post.blogs);
                        setUser(data.user);       
                  } catch (error) 
                  {

                        console.log(error);  
                  }
                       
                } 
                 loadAllBlogs();
     },[]);
             
  return (
       <div>
         {
            blogs ? blogs.map((blog)=><UserCard  blog={blog} user={user}/>):<h1>No Blogs Present</h1>
         }
       </div>


  )
}

export default UserPost
