import React from 'react';
import './home.css';
import Card_Ad from './Card';

export default function Home() {
  return (
    <div className="main_container">
      <div className='section'>
        <p className='head_name'>LatteLand</p>
      </div>
      <div className='section connect'>
        <button className='btn-home' type='button'>Connect</button>
      </div>
      <div className='section'>
      <br />
      <br />
        <h2>Discover our unique coffee blends</h2>
        <br />
        <p className='instock'>Over 100 types of coffee available</p>
        <br />
        <div className='button-group'>
          <button className='btn-home' type='button'>Start explore</button>
          <button className='btn-home' type='button'>Create blend</button>
        </div>
        <br />
        <br />
        <br />
        <div className='count_group'>
          <div className='coffee'>
            <p>100+</p>
            <p>Coffee</p>
          </div>
          <br />
          <span className="bar"></span>
          <div className='ingredie'>
            <p>50+</p>
            <p>Ingredie</p>
          </div>
          <br />
          <span className="bar"></span>
          <div className='customer'>
            <p>10K+</p>
            <p>Active customers</p>
          </div>
        </div>
      </div>
      <div className='section'>
      <br />
      <br />
      <div className='card_img'>
        <Card_Ad img='/assets/coffee_bea.webp' />
      </div>
      </div>
    </div>
  )
}
