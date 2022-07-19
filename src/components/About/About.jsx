import React from 'react'
import "./About.css"
import faks from "../../assets/faks.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={faks} alt="about me" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Few months experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>some friends</small>
            </article>
            <article className='about__card'>
              <VscFolderActive className="about__icon"/>
              <h5>Projects</h5>
              <small>4+ completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni culpa harum quod sint recusandae consectetur expedita unde mollitia assumenda, asperiores facilis sit ratione iure, esse nobis suscipit consequuntur laboriosam.
          </p>

          <a href="Contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;