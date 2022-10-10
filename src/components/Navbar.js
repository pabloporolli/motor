import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='contenedorNav'>
        <div className='logo'>
            <Link to = "/" className='contenedorLogo'>Sally sold 7 suites</Link>
        </div>
        <ul>
            <div className='contenedorLista'>
                <Link to = "/">Home</Link>
                <Link to = "/">Home</Link>
                <Link to = "/">Home</Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar