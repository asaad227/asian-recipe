import React from "react";
import "./Profile.css"
import HomePic from "../../assets/Recipe-asian-app.gif"

const Profile = () => {



  return (
     (
      <div className="profile">
       <h1 className="profileName">Welcome To My Recipe Book</h1>
        <img className="profilePic" src={HomePic} alt="Recipe Home" />
      </div>
    )
  );
};

export default Profile;