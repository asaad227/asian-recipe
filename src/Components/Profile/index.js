import React from "react";
import "./Profile.css"
import HomePic from "../../assets/Recipe-asian-app.gif"
import { MdOutlineFavoriteBorder, MdOutlineFoodBank  } from "react-icons/md";
import { Link } from "react-router-dom";
const Profile = () => {



  return (
     (
      <div className="profile">
       {/* <h1 className="profileName">Welcome To My Recipe Book</h1> */}
        {/* <img className="profilePic" src={HomePic} alt="Recipe Home" /> */}
        <div className="homeIcon">
        <button className="mainIcon"><Link to="/fav">
          <MdOutlineFavoriteBorder className='profileIcon' />
         
          <p className="txtIcon">Fav Recipes</p> </Link>
          </button> 
          <button className="mainIcon" ><Link to="/recipe">
          <MdOutlineFoodBank className='profileIcon' />
          
          <p className="txtIcon">Recipes</p></Link>
          </button>
        </div>
       
      </div>
    )
  );
};

export default Profile;