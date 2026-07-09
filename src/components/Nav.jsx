import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <ul className='nav_list'>
            <li><Link to={"/"}>홈</Link></li>
            <li><Link to={"/class"}>강의</Link></li>
            <li><Link to={"/todo"}>할일</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
