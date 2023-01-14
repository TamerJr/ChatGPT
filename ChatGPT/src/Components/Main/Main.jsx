import React from 'react'
import People from "../../assets/people.png"
import Ai from "../../assets/ai.png"
import "./Main.css"
const Main = () => {
  return (
    <div className='Main' id="Home">
      <div className="Left">
        <div className="Header">
          <h1>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </h1>
        </div>
        <div className="Description">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.
          </p>
        </div>
        <div className="Email">
          <input className='npt' type="text" placeholder='Enter Your Email'/>
          <input className='btn' type="button" value="Get Start"/>
        </div>
        <div className="People">
          <img src={People} alt="People"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="Right">
        <img src={Ai} alt="Ai Photo" />
      </div>
    </div>
  )
}

export default Main