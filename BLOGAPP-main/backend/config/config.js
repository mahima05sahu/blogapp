import mongoose from "mongoose";
const URL = 'mongodb://0.0.0.0:27017/blogger';
const connectDb=async()=>{
    try {
          await mongoose.connect(URL);
        console.log('====================================');
        console.log("Connected to database succesfully");
        console.log('====================================');
    } catch (error) 
    {
             console.log(error);
    }

}
export default connectDb