import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu ,CgClose} from "react-icons/cg";

export const Nav = () => {

const [menuIcon,setMenuIcon]=useState();



const Nav=styled.nav`

.cart-trolly--link{
    position:relative;
    font-size:3.2rem;
}
.cart-trolley{
    position:relative;
    font-size:3.2rem;
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
    .mobile-navbar-btn {
    display:inline-block;
    z-index:9999;
    border:${({theme})=> theme.colors.black}
  }
  .mobile-nav-icon{
     font-size:4.2rem;
     color:${({theme})=>theme.colors.black}
  }
        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            html {
           font-size: 50%;
         }
    }
    .active.mobile-nav-icon{
        display:none;
        font-size:4.2rem;
        position:absolute;
        top:30%;
        right:10%;
        color:${({theme})=>theme.colors.black};
        z-index:9999;
    }
    .active.close-outline{
        display=inline-blocks;
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

        visibility:hidden;
        opacity:0;
        transfrom:translateX(100%);
        // transform-origin:top;
        transition:all 3slinear;
    }
    .active.navbar-lists{
        visibility:visible;
        opacity:1;
        transform-origin:right;
        transition:all3s linear;

        .active.navbar-lists{
            visibility:visible;
            opacity:1;
            transfrom:translateX(0);
            z-index:999;
            transform-origin:right;
        transition:all3s linear;



        .navbar-link{
            font-size:4.2rem;
        }
    }
    .cart-trolley--link{
        position:relative;
    }
    &:hover,
    &:active{
        color:${({theme})=>theme.colors.helper};
    }
    .user-loging--name{
        text-transform:capitalize;
    }
    .user-logout,
    .user-login{
        font-size:2.2rem;
        padding:0.8rem 1.4rem;
    }
    
}`
return (
    <Nav>
        <div className={menuIcon?"navbar active":"navbar"}>
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
                <NavLink to="/contact" className="navbar-link contact-link">Contact </NavLink>
            </li><li>
                <NavLink to="/cart" className="navbar-link cart-trolley--link">
                <FiShoppingCart className="cart-trolley"/>
                <span className="cart-total--item">10</span>
                     </NavLink>
            </li>
            </ul>
        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
        <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={ ()=>setMenuIcon(true)}/>
        <CgClose name="close-outline" className="mobile-nav-icon close-outline"/>
        </div>
        </div>
    </Nav>
  )

 
}
