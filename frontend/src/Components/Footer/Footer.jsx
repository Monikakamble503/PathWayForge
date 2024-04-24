import React from 'react'
import './Footer.css'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.png'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>LEARNER</p>
      </div>
      <ul className='footer-links'>
        <li>References</li>
        <a href="https://pict.edu/placement"><li>Companies</li></a>
        <a href="https://www.pict.edu"><li>Institute</li></a>
        <a href="https://www.proelevate.in/dsa-practice/arsh-dsa-sheet"><li>Practice</li></a>
      </ul>
      <div className="footer-socialicons">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
