import express from 'express'
import cors from 'cors'
import connectDb from './config/config.js';
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
 const app=express();

 app.use(express.json());
 app.use(cors());

const  PORT=8080;
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
   //connect to db  
  connectDb();
   //start server
 app.listen(PORT,(req,resp)=>{  

    console.log("Connected to server on Port:",PORT);

 })