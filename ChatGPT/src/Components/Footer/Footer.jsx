import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.svg"
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
      <div className='Footer-container'>
        <div className='Footer-Top-part'>
          <h1>
            Do you want to step in to the future
          </h1>
          <button>
            Request Early Access
          </button>
        </div>
        <div className='Footer-bottom-part'>

          <div className='Footer-logo'>
            <div className='Footter-logo-img'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='CopyRights'>
              <p>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </p>
            </div>
          </div>
          
          <div className='Details'>
            <div >
              <p>
                Links
              </p>
              <ul>
                <li>Overons</li>
                <li>Socail Media</li>
                <li>Counter</li>
                <li> Contact</li>
              </ul>
            </div>
            <div>
              <p>
                Company
              </p>
              <ul>
                <li>Teamrs & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p>
                Get it touch
              </p>
              <ul>
                <li> 
                  <span>Crechterwoord K12</span>
                  <span>182 DK Alknjkcb</span>
                  </li>
                <li>085-132567</li>
                <li>info@payment.net</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Copy-Rights'>
          <p>
            &copy; Tamer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer