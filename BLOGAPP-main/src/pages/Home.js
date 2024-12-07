import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Post from '../components/Post';

const Home = () => {
   const [blogs,setBlogs]=useState([]);
     useEffect(()=>{
                const loadAllBlogs=async()=>{
                  try {
                    const {data}=await  axios.get('http://localhost:8080/api/v1/blog/all-blog');
                    
                      setBlogs(data.blogs);       
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
            blogs ? blogs.map((blog)=><Post  blog={blog}/>):<h1>No Blogs Present</h1>
         }
       </div>


  )
}

export default Home
