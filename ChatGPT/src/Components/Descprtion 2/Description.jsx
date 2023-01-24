import React from 'react'
import {Desc} from "../../index"
import "./Description.css"
const Description = () => {

    const Arr=[
        { name:"Improving end distrusts instantly",data:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." },
        { name:"Become the tended active",data:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." },
        { name:"Message or am nothing",data:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address." },
        { name:"Really boy law county",data:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush." }]
  return (
    <div className='DescTwo'>
        <div className='DescRightPart'>
            <h1>
                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
            </h1>
            <p>
                Request Early Access to Get Started
            </p>
        </div>
        <div>
            {Arr.map(item=>(
                <div className='Data-container'>
                    <div className='Header-container'>
                        <div className='bord'></div>
                        <div>
                            <h4 className='section-title'>
                                {item.name}
                            </h4>
                        </div>
                    </div>
                    <div className='text-container'>
                        <p>
                            {item.data}
                        </p>
                    </div>
                </div>
                
            ))}
        </div>

    </div>
  )
}

export default Description