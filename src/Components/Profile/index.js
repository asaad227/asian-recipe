import React from "react";
import "./Profile.css"
import HomePic from "../../assets/Recipe-site.png"
import { Link } from "react-router-dom";
const Profile = () => {



  return (
     (
      <div className="profile">
       <h1 className="profileName">Welcome To My Recipe Book</h1>

       <Link to="/recipe">
        <img className="profilePic" src={HomePic} alt="Recipe Home" />
        </Link>
        <div className="homeIcon">
        <button className="mainIcon" > <Link to="/recipe">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          Recipe</Link> 
          </button>
          
        <button className="mainIcon"><Link to="/fav">
          <i className="fa fa-heart" aria-hidden="true"></i>
          Favourite Recipe</Link>
          </button> 
          
          <button className="mainIcon"><Link to="/calories">
        
         <i className="fa fa-calculator" aria-hidden="true"></i> Calorie Calculator</Link>
          </button> 
          
       
        </div>
       
      </div>
    )
  );
};

export default Profile;