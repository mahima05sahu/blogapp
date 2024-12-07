import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const logout=async()=>{
           localStorage.clear();
             
    }
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Blogger</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
          
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/addNewPost'>Add New Post</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>View All Post</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/userBlog'>My Posts</MDBNavbarLink>
             
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink href='/login' onClick={logout}>LogOut</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}