import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddNewPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import UserPost from "./pages/UserPost";
function App() {
   
    const navigate=useNavigate();
     const id=localStorage.getItem("id");
     
  return (
     <>
        
        
           <Navbar/>
        <Routes>
     
             <Route path="/" element={<Home/>}/>
             <Route path="/userBlog" element={<UserPost/>}/>
         
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addNewPost" element={<AddNewPost/>}/>
           
        </Routes>
          
         
        
        
     </>
  );
}

export default App;
