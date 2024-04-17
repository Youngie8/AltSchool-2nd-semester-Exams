import React from 'react'
import useFetch from './useFetch'
import Navbar from './navbar'
import { Outlet, Link } from 'react-router-dom'

const Repos = () => {
    const {data:repos, isPending, error} = useFetch("https://api.github.com/users/Youngie8/repos")
  return (
    <div className='repos'>
        <Navbar />
        <div className="details">
            <Outlet />
        </div>
        {/* <div className="repos-search-header">
            <input 
            type="search"
            className='repos-search'
            placeholder='Search for a repo...'
            />
        </div> */}
        <div className="repos-content">
            {error && <div>{ error }</div>}
            {isPending && <div className='loading'>
                    <h3> Loading ...</h3>
                </div>}
            {repos && repos.map((repo) => (
                <div key={repo.id} className={"border-" + String(repo.id).charAt(2) % 4 + " repos-repo"}>
                    <Link to={"/repo/" + repo.name}>
                        <h3 className={"color-" + String(repo.id).charAt(4)}>{ repo.name }</h3>
                        {repo.description ? repo.description : "No description  for this repo." }
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Repos