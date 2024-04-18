import React from 'react'
import useFetch from './useFetch'
import Navbar from './navbar'
import { Outlet, Link } from 'react-router-dom'
import Searchbar from './searchbar'

const Repos = () => {
    const {data:repos, isPending, error} = useFetch("https://api.github.com/users/Youngie8/repos")
  return (
    <div className='repos'>
        <Navbar />
        {/* <Searchbar repos={repos} /> */}
        <div className="details">
            <Outlet />
        </div>
        <div className="repos-content">
            {error && <div>{ error }</div>}
            {isPending && <div className='loading'>
                    <h3> Loading 
                    7f5b5cd162df7f57d8c69ba9afe4988d658374b6...</h3>
                </div>}
            {repos && repos.map((repo) => (
                <div key={repo.name} className={"border-" + String(repo.id).charAt(2) % 4 + " repos-repo"}>
                    <Link className={"link"} to={"/repos/" + repo.name}>
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