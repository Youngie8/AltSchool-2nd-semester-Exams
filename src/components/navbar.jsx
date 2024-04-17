import React from 'react'



const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className="navbar-logo">
                Oluwole<span className="color-1">-young</span> <span className='color-3'>Repos</span>
        </h2>
        <div className="navbar-btn">
            <a href='/' className="btn black-white-btn">All Repos</a>
            <a href='/search' className="btn color-3-white-btn">Search for Repo</a>
            <a href='https://github.com/new' className="btn color-2-black-btn">New Repo</a>
        </div>
    </div>
  )
}

export default Navbar