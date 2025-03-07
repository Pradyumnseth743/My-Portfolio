import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/pradyumn-seth-10a734326/" rel="noopener noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Pradyumnseth743" rel="noopener noreferrer" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/pradyumn_seth_807" rel="noopener noreferrer" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials