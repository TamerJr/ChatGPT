import React from 'react'
import "./Desc.css"
const Desc = ({name,data}) => {
  return (
    <div className='Desc' >
      <div className='Title'>
        <div className='Headers'></div>
        <div className='Header-Name'>
          <h3>
            {name}
          </h3>
        </div>
      </div>
      <div className='Description'>
        <p>
          {data}
        </p>
      </div>
    </div>
  )
}

export default Desc