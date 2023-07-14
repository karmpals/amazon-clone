import React from 'react';
import './navbar.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-logo border">
          <div className="logo">
          </div>
        </div>
        <div className="nav-address border">
          <p className='add-first'>Deliver to</p>
          <div className="add-icon">
            <LocationOnIcon />
            <p className='add-second'>India</p>
          </div>
        </div>
        <div className="nav-search">
          {/* <select className='search-select'>
            <option>All</option>
          </select> */}
          <input placeholder='Search Amazon' className='search-input' />
          <div className="search-icon">
            {/* <SearchIcon /> */}
            Go
          </div>
        </div>
        <div className="nav-flag border">
          <LanguageIcon />
          <select className='flag-select'>
            <option>EN</option>
          </select>
        </div>
        <div className="nav-signIn border">
          <p><span>Hello, sign in</span></p>
          <p className='nav-second'>Account & Lists</p>
        </div>
        <div className="nav-return border">
          <p><span>Returns</span></p>
          <p className='nav-second'>& Orders</p>
        </div>
        <div className="nav-cart border">
          <ShoppingCartOutlinedIcon className='cart-icon' />
          Cart
        </div>
      </div>
  )
}
