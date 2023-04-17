import React from 'react'
import { Routes } from 'react-router-dom'
import Fav from '../Fav/Fav';
import App from '../App/App';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';

export default function Main() {
  return (
    <div>
    <Nav/>
      <Routes>
      <Route path="/" element={<App />}/>
      <Route path="fav" element={<Fav />} />
    </Routes>
    </div>
  )
}
