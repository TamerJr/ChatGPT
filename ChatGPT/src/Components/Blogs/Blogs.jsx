import React from 'react'
import "./Blogs.css"
import FirstBlog from "../../assets/blog01.png"
import SecondBlog from "../../assets/blog02.png"
import ThirdBlog from "../../assets/blog03.png"
import ForthBlog from "../../assets/blog04.png"
import FifthBlog from "../../assets/blog05.png"

const Bolgs = () => {
  const collection=[
    {src :SecondBlog ,title:"GPT-3 and Open  AI is the future. Let us exlore how it is?"},
    {src :ThirdBlog ,title:"GPT-3 and Open  AI is the future. Let us exlore how it is?"},
    {src : ForthBlog,title:"GPT-3 and Open  AI is the future. Let us exlore how it is?"},
    {src :FifthBlog ,title:"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
  ]
  return (
    <div className='Blogs' id='Info'>
      <div className='first Article'>
        <div className='photo'>
        <img src={FirstBlog} alt="Photo"/>
        </div>
        <div className='some-text'>
          <div className='some-header'>
            <p>
              Sep 26, 2021
            </p>
            <h4>
              GPT-3 and Open  AI is the future. Let us exlore how it is?
            </h4>
          </div>
          <div className='some-domy-text'>
            <p>
              Read Full Artical
            </p>
          </div>
        </div>
      </div>
      <div className='second'>
        <div className='PhotoGroup'>
         {collection.map(data=>
            <div className='Blog-img-container Article'>
              <div className='photo'>
                <img src={data.src}/>
              </div>
                <div className='some-text'>
                  <div className='some-header' >
                    <p>
                      Sep 26, 2021
                    </p>
                    <h4>
                      {data.title}
                    </h4>
                  </div>
                  <div className="some-domy-text">
                    <p>
                      Read Full Artical
                    </p>
                  </div>
                </div>
            </div>
            )
          }
        </div>      
      </div>
    </div>
  )
}

export default Bolgs