import React from 'react'
import LoaderLine from './LoaderLine'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader-container'>
	<LoaderLine />
      </div>
    </div>      	
  )
}

export default Loader
