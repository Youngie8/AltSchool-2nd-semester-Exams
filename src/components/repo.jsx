import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'
import ScrollToTop from './scrollToTop'
import ErrPage from './errPage'

const Repo = () => {
  const {name} = useParams();
  const {data: repo, isPending, error} = useFetch("https://api.github.com/repos/Youngie8/" + name);
  return (
    <div>
      {error && <ErrPage />}
      {isPending && <div className='loading'> Loading... </div>}
      {repo && (
        <div className={"repo"}>
          <h2>{repo.name}</h2>
          <p>
          <span className="color-2 bold">Language:</span> {repo.language}, 
          <span className="color-3 bold"> Visibility:</span> {repo.visibility}</p>
          <p>{ repo.description ? repo.description : "No description yet"}</p>
          <Link to={repo.html_url} className='black-white-btn link btn' >GitHub link <span className="bold color-3 d-m-none"> to { repo.name }</span></Link>
        </div>
      )}
      <ScrollToTop />
    </div>
  )
}

export default Repo