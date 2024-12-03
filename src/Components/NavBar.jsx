import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = (prop) => {
  return (
    <>
    <nav>
        <h1 className="logo">
            {prop.title}
        </h1>
        <ul>
            <li>
                <Link>Our Service</Link>
            </li>
            <li>
                <Link>About Us</Link>
            </li>
            <li>
                <Link>Influencer Hub</Link>
            </li>
        </ul>
        <button className="btn join">
            <Link>Join</Link>
        </button>
    </nav>
    </>
  )
}

export default NavBar