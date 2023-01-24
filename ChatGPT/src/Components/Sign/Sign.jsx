import React from 'react'
import "./Sign.css"
const Sign = () => {
  return (
    <div className='sign'>
      <div className='sign-text'>
        <p>
          Request Early Access to Get Started
        </p>
        <h4>
          Register today & start exploring the endless possiblities.
        </h4>
      </div>
      <div className='btn-container'>
        <input type="submit" value="Get Started"/>
      </div>
    </div>
  )
}

export default Sign