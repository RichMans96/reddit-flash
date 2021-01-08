import React from 'react';
import { FaReddit } from 'react-icons/fa';
import './Header.css';

function Header() {
 return (
  <header className='header-banner'>
   <div className='icon-container'>
    <FaReddit className='reddit-icon' />
   </div>
   <h1 className='heading'>
    Reddit <span className='heading-flash'>Flash</span>
   </h1>
  </header>
 );
}

export default Header;
