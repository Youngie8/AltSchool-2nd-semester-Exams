import React from 'react'

const SearchBar = ({ setInputValue, inputValue}) => {
  return (
    <div>
        <form className="repos-search-header">
            <input 
            type="text"
            className='repos-search'
            id='search'
            placeholder='Search for a repo...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
        </form> 
    </div>
  )
}

export default SearchBar