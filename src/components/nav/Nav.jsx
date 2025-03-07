// import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
// import { useState } from 'react';
import React, { useState, useEffect } from "react";



const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // 60% of the section must be visible
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div>
      <nav>
        <a href='#'  onClick={(e)=>{setActiveNav('#');e.currentTarget.blur(); }} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
        <a href='#about' onClick={(e)=>{setActiveNav('#about');e.currentTarget.blur(); }}  className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
        <a href='#experience' onClick={(e)=>{setActiveNav('#experience');e.currentTarget.blur(); }} className={activeNav==='#experience'?'active':''}><BiBook/></a>
        <a href='#services' onClick={(e)=>{setActiveNav('#services');e.currentTarget.blur(); }} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
        <a href='#contact' onClick={(e)=>{setActiveNav('#contact');e.currentTarget.blur(); }} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
      </nav>
    </div>
  )
}

export default Nav