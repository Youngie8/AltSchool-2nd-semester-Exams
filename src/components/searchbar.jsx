import React from 'react'

const Searchbar = ({ repos }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const results = repos.filter(repo => repo.name.includes(e.target.value))
  }

  return (
    <div className=""> 
    <form onSubmit={handleSubmit} className="repos-search-header">
        <input 
        type="search"
        className='repos-search'
        placeholder='Search for a repo...'
        onChange={handleSearchChange}
        />
        <button className='btn color-2-black-btn'>search</button>
    </form>
    
    </div>
  )
}

export default Searchbar