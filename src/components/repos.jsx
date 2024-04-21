import React from 'react'
import Navbar from './navbar'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './searchBar'
import ErrPage from './errPage'

const Repos = ({repos, isPending, error}) => {
    const [inputValue, setInputValue] = useState('');
    
  return (
    <div className='repos'>
        <Navbar />
        <div className="details">
            <Outlet />
        </div>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
        <div className="repos-content">
            {error && <ErrPage />}
            {isPending && <div className='loading'>
                    <h3> Loading...</h3>
                </div>}
            {repos && repos.map((repo) => (
                <div key={repo.name} >
                    {
                        repo.name.toLowerCase().includes(inputValue.toLowerCase()) ? 
                    <div className={"border-" + String(repo.id).charAt(2) % 4 + " repos-repo"}>
                        <Link className={"link"} to={"/repos/" + repo.name}>
                             <h3 className={"color-" + String(repo.id).charAt(4)}>{ repo.name }</h3>
                            <p>{repo.description ? repo.description : "No description  for this repo." }</p>
                         </Link>
                    </div>
                          : ""
                    }
                </div>
            ))}
        </div>
    </div>
  )
}

export default Repos