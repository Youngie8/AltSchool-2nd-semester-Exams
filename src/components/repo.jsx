import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const Repo = () => {
  const {name} = useParams();
  const {data: repo, isPending, error} = useFetch("https://api.github.com/repos/Youngie8/" + name);
  return (
    <div>
      {error && <div> { error } </div>}
      {isPending && <div className='loading'> Loading... </div>}
      {repo && (
        <div>
          <h2>{repo.name}</h2>
          <p>{ repo.description ? repo.description : "No description yet"}</p>
        </div>
      )}
    </div>
  )
}

export default Repo