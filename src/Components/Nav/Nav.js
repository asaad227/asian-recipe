import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';
// import { RiHomeSmileLine } from "react-icons/ri";
import {  MdOutlineFoodBank  } from "react-icons/md";
export default function Nav() {
  return (
    <div>
        {/* <button className='navBtn'><Link className='navList' to="/">
        <RiHomeSmileLine  className='iconNav'/>Recipe Home
          </Link></button> */}
          <button className='navBtn'>
          <a href="https://todo-reminder-two.vercel.app/">
          <i className='fa fa-home' aria-hidden="true"></i>
         </a>
          </button>
          <button className='navBtn'><Link to="/fav">
          <i className="fa fa-heart" aria-hidden="true"></i>
          </Link></button>
          <button className='navBtn'><Link to="/">
          <MdOutlineFoodBank className='iconNav' />
          </Link></button>
          <button className='navBtn'><Link to="/calories">
          <i className="fa fa-calculator" aria-hidden="true"></i>
          </Link></button>
      
    </div>
  )
}
