import React from 'react';
import { Link } from 'react-router-dom'
const HeaderPart=()=>{
   return( <header>
    <div className="progress"></div>
    <nav>
      <ul>
      <Link to="/" style={{ textDecoration: 'none' }} >
      <li>Home</li>
      </Link>
      <Link to="/district"  style={{ textDecoration: 'none' }}>
      <li>District data</li>
      </Link>
      
      <Link to="/about" style={{ textDecoration: 'none' }} >
      <li>About</li>
      </Link>

      </ul>
    </nav>
  </header>
   ) 
}

export default HeaderPart;