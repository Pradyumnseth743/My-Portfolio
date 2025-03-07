import React from 'react'
import './header.css';
import CTA from './CTA'
import ME from '../../assets/pd3_edited.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5 style={{ margin:"0px" }}>Hello I'm</h5>
        <h1 style={{fontFamily:"Copperplate Gothic",margin:"0px"}}>Pradyumn Seth</h1>
        <h5 style={{ margin:"0px" }} className="text-light">Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
        <img id='main' src={ME} alt='ME' />
        </div>
   
         <a href='#contact' className='scroll__down'>Scroll Down</a>
   
        </div>
        
    </header>
    
  )
}

export default Header