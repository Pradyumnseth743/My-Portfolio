import React from 'react'
import './footer.css';
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {BsTelegram} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>PRADYUMN SETH</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Education</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pradyumn-seth-10a734326/"target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/pradyumn_seth_807" target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
        <a href='https://wa.me/919696351968' target='_blank' rel="noopener noreferrer"><BsWhatsapp/></a>
        <a href="https://github.com/Pradyumnseth743" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href='https://t.me/pradyumnseth123' target='_blank' rel="noopener noreferrer"><BsTelegram/></a>

      </div>

      <div className="footer__copyright">
        <small style={{fontSize:'0.9rem'}}> &copy; Developed by <span style={{color:'yellow'}}>Pradyumn Seth</span>. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer