import React from 'react'
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"
import atlassian from "../../assets/atlassian.png"
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import "./Feed.css"
const Feeds = () => {
  return (
    <div className='Feeds'>
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
      <img src={atlassian} alt="atlassian" />
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
    </div>
  )
}

export default Feeds