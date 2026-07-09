import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
        <div className="inner header_inner">
            <h1 className='logo'>React Sample</h1>
            <Nav />
        </div>
    </header>
  )
}

export default Header