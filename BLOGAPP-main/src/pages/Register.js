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
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate=useNavigate();
     const[name,setName]=useState('');
     const[email,setEmail]=useState('');
     const[password,setPassword]=useState('');
  const handleSubmit=async()=>{
                 try {
                     
                     
                  const {data}=await axios.post('http://localhost:8080/api/v1/user/register',{name,email,password});
                      console.log(data);
                      localStorage.setItem("id",data.user._id);
                   navigate("/");
                  } catch (error) {
                     console.log(error);
                  
                 }
  }

  return (
    <MDBContainer className="my-5 ">

      <MDBCard className='con'>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100 con'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Blogger</span>
              </div>

              <h5 className="fw-normal my-2 pb-1" style={{letterSpacing: '1px'}}>Register Now!</h5>
              <MDBInput wrapperClass='mb-2' label='Name' id='formControlLg' type='text' size="lg"  onChange={(e)=>setName(e.target.value)} required />
               <MDBInput wrapperClass='mb-2' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e)=>setEmail(e.target.value)} required />
                <MDBInput wrapperClass='mb-2' label='Password' id='formControlLg' type='password' size="lg"  onChange={(e)=>setPassword(e.target.value)} required/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Register</MDBBtn>
              
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="/login" style={{color: '#393f81'}}>Login</a></p>

             

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;