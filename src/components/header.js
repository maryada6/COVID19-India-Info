import React from 'react';
import { Link } from 'react-router-dom'
import Switch from '../components/switch'

const HeaderPart=(props)=>{
   return( <header>
    <div className="progress"></div>
    <nav>
      <ul>
      <li><img className="rotate" src={window.location.origin + '/virus.png' } style={{width:'25px'}} alt="" /></li>  
      <Link to="/" style={{ textDecoration: 'none' }} >
      <li>Home</li>
      </Link>
      <Link to="/district"  style={{ textDecoration: 'none' }}>
      <li>Zone</li>
      </Link>
      
      <Link to="/about" style={{ textDecoration: 'none' }} >
      <li>About</li>
      </Link>

    <li>
      <Switch themeToggler={props.themetoggler} />
    </li>
      </ul>
    </nav>
  </header>
   ) 
}

export default HeaderPart;