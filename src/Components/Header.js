import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FiCornerUpLeft } from "react-icons/fi";
import { FiCornerUpRight } from "react-icons/fi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { CiViewList } from "react-icons/ci";
import { BsEraser } from "react-icons/bs";
import { BsUiRadios } from "react-icons/bs";
import './header.css'
export default function Header() {



  return (

    <>
      <div className="nav">
        <div className="main-nav">
          <ul>
            <div className='nav-div1 focus'>
            <li><NavLink className='nav1 py-2 px-2' to='/' style={{ textDecoration: 'none', color: '#000', }}>Designer</NavLink></li>
            </div>
            <div className="nav-div1">
            <li><NavLink className='nav2' to='/preview' style={{ textDecoration: 'none', color: '#000' }} >preview</NavLink></li>
            </div>
            <div className="nav-div1">
            <li><NavLink className='nav3' to='/logic' style={{ textDecoration: 'none', color: '#000' }}>logic</NavLink></li>
            </div>
            <div className="nav-div1">
            <li><NavLink className='nav4' to='/json' style={{ textDecoration: 'none', color: '#000' }}>JSON Editor</NavLink></li>
            </div>
            <div className="nav-div1">
            <li><NavLink className='nav5' to='/embed' style={{ textDecoration: 'none', color: '#000' }}>Embed Survey</NavLink></li>
            </div>
            <div className="nav-div1">
            <li><NavLink className='nav6' to='/translation' style={{ textDecoration: 'none', color: '#000' }}>Translation</NavLink></li>
            </div>
            <div className="nav-div1">
            <li><NavLink className='nav7' to='/about' style={{ textDecoration: 'none', color: '#000' }}>About</NavLink></li>
            </div>

          </ul>
         
        </div>
        <div className='arrow-section'>
          <div className="arrow-items">
          <div className="icons">
            <button><FiCornerUpLeft /></button>
            <button><FiCornerUpRight/></button>
          </div>  
            {/* <div className='action-bar' style={{height:'15px;'}}>
              <span style={{fontSize:'30px'}}><RxDividerVertical/></span>
            </div> */}
            <div className="radio mx-2 ">
          <button className='btn'><BsUiRadios/></button>
          <button className='btn btnfocus' style={{color:'#909090'}}><BsEraser/></button>

            </div>
          </div>
          </div>
      </div>
      <Outlet />
    </>
  )
}
