import React from 'react';
import {Link} from 'react-router-dom';
import { RiHomeSmileLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
export default function Nav() {
  return (
    <div>
        <button className='reBtn'><Link className='navList' to="/">
        <RiHomeSmileLine  className='iconNav'/>
          </Link></button>
          <button className='reBtn'><Link to="/fav">
          <MdOutlineFavoriteBorder className='iconNav' />
          </Link></button>
    </div>
  )
}
