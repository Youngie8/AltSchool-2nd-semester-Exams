import React from 'react'
import Navbar from './navbar'
import { useRouteError } from 'react-router-dom'

const ErrPage = () => {
  const error = useRouteError();
  return (
    <div className='err'>
      <Navbar />
      <div className="err-page">
        <h3> {error.data || "Error: No network"}</h3>
        <h1>{error.status ? error.status : "419"}</h1>
        <p>{error.statusText ? error.statusText : "Network don do you wayo!"}</p>
      </div>
    </div>
  )
}

export default ErrPage