import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../assets/Me.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luka Varga</h1>
        <h5 className="text-light">Junior Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact"className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header