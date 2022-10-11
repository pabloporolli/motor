import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='contenedorHeader'>
      <Link to = '/'>
        <img src="/img/logo.png" alt="" className='logo'/>
      </Link>
    </header>
  )
}

export default Header