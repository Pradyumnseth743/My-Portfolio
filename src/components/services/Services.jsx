import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
    <section id='services'>
      <h5>Academic Journey</h5>
      <h2>Education</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>10th(Science) and 12th(PCM)</h3>
          </div>
          <ul className='service__list'>
            <li>
              
<p>My scholastic journey commenced at <span>St.Mary's School, Mirzapur, Uttar Pradesh</span>, 
              culminating in my intermediate accomplishments in 2019. With determination as my 
              compass, I achieved a commendable aggregate of 80.2% in class 10th and further pursued 
              excellence, securing a notable 73.8% in class 12th.
<br></br><br></br>
These formative years not only enriched my academic foundation but also ignited my passion 
for continuous growth, paving the path for my subsequent ventures into the realm of technology 
and innovation.
  </p>          
  </li>
              
              
          </ul>
        </article>
        {/* End of Schooling */}
        <article className="service">
          <div className="service__head">
            <h3>Graduation</h3>
          </div>
          <ul className='service__list'>
            <li>
              
              <p>I studied at <span>United College of Engineering and Research, Prayagraj, </span> 
                completing my <span>Bachelor of Technology</span> in <span>Computer Science and Engineering. </span> 
                I worked hard and graduated with a strong 83% overall score. Completed my 
                Graduation in 2023.
<br></br><br></br>
This learning journey sharpened my technical skills and fueled my passion for innovation. 
It's the foundation that drives me to take on new challenges in the tech world, always pushing 
for new possibilities.
<br></br><br></br>
It laid the foundation for my unwavering commitment to embracing new challenges in the world of 
technology.</p>
              </li>
             
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Certifications</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Innovate India Coding Championship (IICC):[22/07/2022] [CODING NINJAS(AICTE & Chandigarh University)]</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>The Ninth International Conference on Big Data Analytics (BDA 2021), Indian Institute of Information Technology, Allahabad(IITA), Prayagraj, India</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Competitive Coding (United Global Infoservice Pvt. Ltd., UCER, Prayagraj)</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Stack Development using MEAN (United Global Infoservice Pvt. Ltd., UCER, Prayagraj)</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Crash Course on Python(Google)</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Programming for Everybody(University of Michigan)</p>
              </li>            
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>

    </section>
  )
}

export default Services