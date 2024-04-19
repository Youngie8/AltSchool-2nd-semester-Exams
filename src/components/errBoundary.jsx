import React from 'react'

const ErrBoundary = ({ error }) => {
  return (
    <div className='errBoundary'>
        {error}
    </div>
  )
}

export default ErrBoundary