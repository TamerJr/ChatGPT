import React from 'react'
import "./Infos.css"
const Infos = () => {
  const Infos=[
    {title:"Improving end distrusts instantly ",data:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."},
    {title:"Become the tended active",data:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."},
    {title:"Message or am nothing",data:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."},
    {title:"Really boy law county",data:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."}]
  return (
    <div className='Infos'>
      <div className='left'>
        <h1>The Futer is Now and You Just Need To Realize It.Step into Future Today & Make it Happen</h1>
        <p> Request Early Access to Get Started</p>
      </div>
      <div className='right'>
        {Infos.map(Info=>
          <div className='Service'>
            <div className='Header'>             
              <div className='dash'></div>
              <div clasName="Title">
                <h4>
                  {Info.title}
                </h4>
              </div>
            </div>
            <div>
              {Info.details}
            </div>
          </div>
            )}
      </div>
    </div>
  )
}

export default Infos