import React from 'react'

const ErrBoundary = ({error}) => {
  return (
    <div className='errBoundary'>
      Oops! An Error Occured: {error}
    </div>
  )
}

export default ErrBoundary