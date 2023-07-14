import React from 'react';
import './hero.css';
import {Link} from 'react-router-dom';
import Home from '../../pages/Home/Home';

export default function Hero() {
  return (
    <div className="hero-section">
        <div className="hero-msg">
          <p>You are on amazon.com. You can also shop on amazon India for millions of products with fast local delivery. <a href={<Home />}>Click here to go to amazon.in</a> </p>
        </div>
      </div>
  )
}
