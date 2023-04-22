import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';
import { RiHomeSmileLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdOutlineFoodBank  } from "react-icons/md";
export default function Nav() {
  return (
    <div>
        <button className='navBtn'><Link className='navList' to="/">
        <RiHomeSmileLine  className='iconNav'/>
          </Link></button>
          <button className='navBtn'><Link to="/fav">
          <MdOutlineFavoriteBorder className='iconNav' />
          </Link></button>
          <button className='navBtn'><Link to="/recipe">
          <MdOutlineFoodBank className='iconNav' />
          </Link></button>
          <button className='navBtn'><Link to="/calories">
          Calories Counter
          </Link></button>
    </div>
  )
}
