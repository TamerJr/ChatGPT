import React from 'react'
import {Desc} from "../../index"
import "./Fields.css"
const Data=[
    {name:"What is GPT-3",data:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."},
    {name:"Chatbots",data:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "},
    {name:"Knowledgebase",data:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"},
    {name:"Education",data:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}]
const Fields = () => {  
    const looperData=Data.slice(1,Data.length)
    const descCollection=()=>{
        return looperData.map(desc=>
            <div className='Desc-container'>

               <Desc key={desc.name} name={desc?.name} data={desc?.data}/>
            </div>
       )
    }
  return (
    <div className='Fields' id='Desc'>
        <div  className='Fields-first'>
            <Desc name={Data[0]?.name} data={Data[0]?.data}/>
        </div>
        <div className='fields-text'>
            <div className='header'>
                <h1>The possibilities are beyond your imagination</h1>
            </div>
            <div>
                <h5>
                    Explore The Library
                </h5>
            </div>
        </div>
        <div  className='Data-collection'>
            {descCollection()}
        </div>
    </div>
  )
}

export default Fields