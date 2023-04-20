import React from 'react'
import App from '../App/App';
import CalorieCounter from '../CounterC';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';

export default function Main() {
  return (
    <div>
     <div className='navLink'>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        </div>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/counter" element={<CalorieCounter />} />
        </Routes>
       
     
    </div>
  )
}
