import React from "react";
import "./Profile.css"
import HomePic from "../../assets/Recipe-site.png"
import { Link } from "react-router-dom";
const Profile = () => {



  return (
     (
      <div className="profile">
       <h1 className="profileName">Welcome To My Recipe Book</h1>
        <img className="profilePic" src={HomePic} alt="Recipe Home" />
        <div className="homeIcon">
        <p className="mainIcon"><Link to="/fav">
          <i className="fa fa-heart" aria-hidden="true"></i>
          Favourite Recipe</Link>
          </p> 
          <p className="mainIcon"><Link to="/calories">
        
          Calories Counter</Link>
          </p> 
          <p className="mainIcon" > <Link to="/recipe">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          
          Recipe</Link> 
          </p>
        </div>
       
      </div>
    )
  );
};

export default Profile;