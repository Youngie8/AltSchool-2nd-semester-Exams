import React from 'react'
import Navbar from './navbar'

const ErrPage = () => {
  return (
    <div className='err'>
      <Navbar />
      <div className="err-page">
        <h3> Error </h3>
        <h1>404</h1>
        <p>This Repo does not exist, not yet.</p>
      </div>
    </div>
  )
}

export default ErrPage