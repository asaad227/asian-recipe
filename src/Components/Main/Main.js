import React from 'react'
import { Routes } from 'react-router-dom'
import Fav from '../Fav/Fav';
import App from '../App/App';
import { Route } from 'react-router-dom';
import "./index.css"
import Profile from '../Profile';
import CaloreCounter from '../Calories';
import SocialLink from '../Social-links';

export default function Main() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Profile />}/>
      <Route path="recipe" element={<App />}/>
      <Route path="fav" element={<Fav />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path='calories' element={<CaloreCounter />} />
    </Routes>
    <SocialLink/>
    </div>
  )
}
