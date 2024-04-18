import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className="navbar-logo">
                Oluwole<span className="color-1">-young</span> <span className='color-3'>Repos</span>
        </h2>
        <div className="navbar-btn">
            {/* <Link to='/search' className="btn color-3-white-btn">Search for Repo</Link> */}
            <Link to='/' className="btn black-white-btn">All Repos</Link>
            <Link to='https://github.com/new' className="btn color-2-black-btn">New Repo</Link>
        </div>
    </div>
  )
}

export default Navbar