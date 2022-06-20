import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <button className='cuisineInput'><Link className='navList' to="/">
           Home
          </Link></button>
          <button className='cuisineInput'><Link to="/fav">
          Fav
          </Link></button>
    </div>
  )
}
