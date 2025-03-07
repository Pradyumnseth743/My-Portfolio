import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';
import IMG9 from '../../assets/portfolio9.png';
const data=[
  {
    id:1,
    image:IMG8,
    title:"Pradyumn's Advanced Portfolio Application",
    github:'https://github.com/Pradyumnseth743/Advanced-Web-Portfolio-Application',
    demo:'https://github.com/Pradyumnseth743/Advanced-Web-Portfolio-Application'
  },
  {
    id:2,
    image:IMG7,
    title:'Potato Leaf Disease Detection System',
    github:'https://github.com/Pradyumnseth743/Potato-Leaf-Disease-Detection-System',
    demo:'https://github.com/Pradyumnseth743/Potato-Leaf-Disease-Detection-System'
  },
  {
  id:3,
  image:IMG1,
  title:'Contact Management System : Python(Tkinter), SQLite3',
  github:'https://github.com/Pradyumnseth743/Contact-Management-System',
  demo:'https://github.com/Pradyumnseth743/Contact-Management-System'
},
{
  id:4,
  image:IMG2,
  title:'Competitive Coding - Stack Simulator(Stack)',
  github:'https://github.com/Pradyumnseth743/Stack-Simulator',
  demo:'https://github.com/Pradyumnseth743/Stack-Simulator'
},
{
  id:5,
  image:IMG3,
  title:'Task Manager Web Application(Web Development - MEAN)',
  github:'https://github.com/Pradyumnseth743/Task-Manager-Web-App',
  demo:'https://github.com/Pradyumnseth743/Task-Manager-Web-App'
},
{
  id:6,
  image:IMG4,
  title:'Text To Voice Converter : Python Application',
  github:'https://github.com/Pradyumnseth743/Text-To-Voice-Converter',
  demo:'https://github.com/Pradyumnseth743/Text-To-Voice-Converter'
},
{
  id:7,
  image:IMG5,
  title:'Portfolio-Basic-Web-App : HTML, CSS, JavaScript',
  github:'https://github.com/Pradyumnseth743/Portfolio-Basic-Web-App',
  demo:'https://pradyumnseth-123.github.io/'
},
{
  id:8,
  image:IMG6,
  title:'Filter And Billing Restaurant Web Application',
  github:'https://github.com/Pradyumnseth743/Filter-And-Billing-Restaurant-Web-Application',
  demo:'https://github.com/Pradyumnseth743/Filter-And-Billing-Restaurant-Web-Application'
},
{
  id:9,
  image:IMG9,
  title:'Basic Python(Tkinter) Quiz Application',
  github:'https://github.com/Pradyumnseth743/Python-Quiz-Application',
  demo:'https://github.com/Pradyumnseth743/Python-Quiz-Application'
},

]
const Portfolio = () => {
  return (
    <section style={{marginTop:"4rem"}} id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt=''></img>
          </div>
          
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

            )
          })
        }

        
      </div>
    </section>
  )
}

export default Portfolio