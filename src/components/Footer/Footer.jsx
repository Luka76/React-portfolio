import React from 'react'
import "./Footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Batman</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Batman. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer