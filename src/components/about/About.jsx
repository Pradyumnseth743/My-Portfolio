import React from 'react'
import './about.css';
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/pd1.jpg'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section style={{marginTop:"0px"}} id='about'>
      <h5 style={{margin:"0px"}}>Get To Know</h5>
      <h2 style={{marginTop:"0px",marginBottom:"0px"}}>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>In Website/Software Development</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Profile</h5>
              <small>Software Developer</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p style={{ textAlign: "justify" }}>Greetings, I'm Pradyumn Seth, a recent Computer Science and Engineering 
            graduate of 2023. As a Computer Science Graduate and Software Developer, I'm immersed in the 
            world of coding intricacies and innovative solutions. My palette includes crafting 
            immersive web experiences and sculpting data structures for optimized performance. 
            Beyond the confines of my role, I'm driven by the thrill of exploring new challenges in the software industry and 
            contributing to open source projects, where every code snippet becomes a stroke of 
            artistry.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About