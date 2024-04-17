import React from 'react'
import Navbar from './navbar'

const Searchbar = () => {
  return (
    <div className=""> 
    <div className="repos-search-header">
        <input 
        type="search"
        className='repos-search'
        placeholder='Search for a repo...'
        />
    </div>
    </div>
  )
}

export default Searchbar