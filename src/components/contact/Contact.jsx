import React from 'react'
import './contact.css';
import {MdOutlineEmail, MdWhatsapp} from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_3zntqau','template_a25ws0m',form.current,'lt2NV-C37WFUKGyYS')
   e.target.reset();
  }
  return (
    <section style={{marginTop:"4rem"}} id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pradyumnsethmzp123@gmail.com</h5>
            <a href='mailto:pradyumnsethmzp123@gmail.com' target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pradyumn Tutorials</h5>
            <a href='https://www.instagram.com/pradyumn_seth_807' target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9696351968</h5>
            <a href="https://wa.me/919696351968" target="_blank" rel="noopener noreferrer">Send A Message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact