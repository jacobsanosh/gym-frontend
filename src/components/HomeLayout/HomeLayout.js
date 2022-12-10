import React from 'react'
import { Link } from 'react-router-dom'
import './HomeLayout.css'
function HomeLayout() {
  return (
    <div className='home__container'>
        <div className="home__section">
          <div className="home__content">
            <h1>Sculpt Urself</h1>
            <div className="home__btn_section">
            <Link to="#details" className='home__btn'>know more</Link>
            <Link to="/login"className='home__btn'>explore</Link>
            </div>
         
          </div>
        </div>
    </div>
  )
}

export default HomeLayout