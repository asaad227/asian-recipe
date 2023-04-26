import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <div>
        <button className='navBtn'><Link className='navList' to="/">
        <i className="fa fa-home" aria-hidden="true"></i>
          </Link></button>

          <button className='navBtn'><Link to="/recipe">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          </Link></button>

          <button className='navBtn'><Link to="/fav">
          <i className="fa fa-heart" aria-hidden="true"></i>
          </Link></button>
         
          <button className='navBtn'><Link to="/calories">
          <i className="fa fa-calculator" aria-hidden="true"></i>
          </Link></button>
      
    </div>
  )
}
