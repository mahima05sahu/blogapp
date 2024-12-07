// LoginForm.js
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import '../pages/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddNewPost() {
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [url,setUrl]=useState('');
    const navigate=useNavigate();
     const handleSubmit=async()=>{
         const user=localStorage.getItem("id");
                   
         const {data}=await axios.post('http://localhost:8080/api/v1/blog/create-blog',{user,name,description,url});
         console.log(data);
      navigate("/");         
     } 
  return (
    <MDBContainer className="my-5 ">

      <MDBCard className='con'>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt="login form" className='rounded-start w-100 con'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Blogger</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Add New Post</h5>

                <MDBInput wrapperClass='mb-2' label='Name' id='formControlLg' type='text' size="lg" onChange={(e)=>setName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Description' id='formControlLg' type='text' size="lg" onChange={(e)=>setDescription(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='URL' id='formControlLg' type='text' size="lg" onChange={(e)=>setUrl(e.target.value)}/>
    
              <MDBBtn className="mb-4 px-5" onClick={handleSubmit} color='dark' size='lg'>Add New Post</MDBBtn>
              
             

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default AddNewPost;