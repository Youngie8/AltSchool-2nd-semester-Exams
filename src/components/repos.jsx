import React from 'react'
import useFetch from './useFetch'
import Navbar from './navbar'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

const Repos = () => {
    const {data:repos, isPending, error} = useFetch("https://api.github.com/users/Youngie8/repos");
    const [inputValue, setInputValue] = useState('')
  return (
    <div className='repos'>
        <Navbar />
        <div className="details">
            <Outlet />
        </div>
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
        <div className="repos-content">
            {error && <div>{ error }</div>}
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