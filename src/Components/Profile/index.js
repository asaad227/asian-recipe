import React from "react";
import "./Profile.css"
import HomePic from "../../assets/Recipe-asian-app.gif"
import { MdOutlineFavoriteBorder, MdOutlineFoodBank  } from "react-icons/md";
import { Link } from "react-router-dom";
const Profile = () => {



  return (
     (
      <div className="profile">
       <h1 className="profileName">Welcome To My Recipe Book</h1>
        <img className="profilePic" src={HomePic} alt="Recipe Home" />
        <div className="nav-home">
        <button className='reBtn'><Link to="/fav">
          <MdOutlineFavoriteBorder className='profileIcon' />
          </Link></button>
          <button className='reBtn'><Link to="/recipe">
          <MdOutlineFoodBank className='profileIcon' />
          </Link></button>
        </div>
       
      </div>
    )
  );
};

export default Profile;