import React from 'react'
import CV from "../../assets/Luka-CV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA