import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = () => {
const Nav=styled.nav`
.navbar-lists{
    display:flex;
    gap:4.8rem;
    aling-items:center;
    .navbar-link{
        &:link,
        &:visited{
            display:inline-block;
            text-decoration:none;
            font-size:1.8rem;
            font-weight:500;
            text-transfrom:uppercase;
            color:${({theme})=>theme.colors.black};
            transition:color0.3sliner;
        }
&:hover,
&:active{
    color:${({theme})=>theme.colors.helper};
}

.mobile-navbar-btn{
    display:none;
    background-color:transparent;
    cursor:pointer;
    border:none;
  }
  .mobile-nav-icon[name="close-outline]{
    display:none;
  }
  .close-outline{
    display:none;
  }
        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            html {
           font-size: 50%;
         }
    }
    .navbar-lists{
        width:100vw;
        height:100vh;
        position:absolute;
        top:0;
        left:0;
        background-color:#fff;
        display:flex;
        justify-content:center;
        aling-items:center;
        flex-direction:column;
    }
    .cart-trolley--link{
        position:relative;
        .cart-trolley{
            position:relative;
            font-size:5.2rem;
        }
    }
    .cart-total--items{
        width:4.2rem;
        height:4.2rem;
        font-size:2rem;
        position:absolute;
        background-color:#000;
        color:#000;
        border-radius:50%;
        display:grid;
        place-items:center;
        top:-20;
        left:70%;
        background-color:${({theme})=>theme.colors.helper}
    }
    .user-loging--name{
        text-transform:capitalize;
    }
    .user-logout,
    .user-login{
        font-size:2.2rem;
        padding:0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
       .mobile-navbar-btn {
       display:inline-block;
       z-index:9999;
       border:${({theme})=> theme.colors.black}
     }
     .mobile-nav-icon{
        font-size:4.2rem;
        color:${({theme})=>theme.colors.black}
     }
}`

  return (
    <Nav>
        <div className="navbar">
        <ul className="navbar-lists">
            <li>
                <NavLink to="/home" className="navbar-link home-link">Home </NavLink>
            </li>
        
            <li>
                <NavLink to="/about" className="navbar-link about-link">About </NavLink>
            </li>
            <li>
                <NavLink to="/products" className="navbar-link products-link">Products </NavLink>
            </li>
            <li>
                <NavLink to="/singleproduct" className="navbar-link singleproduct-link">singleproduct </NavLink>
                
            </li>
            </ul>
        
        </div>
    </Nav>
  )
}
