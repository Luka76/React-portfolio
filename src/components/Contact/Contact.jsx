import React, { useRef } from 'react';
// import emailjs from 'emailjs-com'
import "./Contact.css"
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("this is just a practice for emailjs");

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

    e.target.reset();
  };
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className= "contact__option-icon"/>
            <h4>Email</h4>
            <h5>vargaluka76@gmail.com</h5>
            <a href="mailto:vargaluka76@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className= "contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Luka Varga</h5>
            <a href="https://web.facebook.com/luka.varga.75/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className= "contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+385994155837</h5>
            <a href="https://api.whatsapp.com/send?phone=+385994155837" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact