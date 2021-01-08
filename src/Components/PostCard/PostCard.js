import React from 'react';
import { FaReddit } from 'react-icons/fa';
import './PostCard.css';

const PostCard = () => {
 return (
  <div className='post-container'>
   <div className='header-wrapper'>
    <h1 className='post-title'>Post Title</h1>
   </div>
   <div className='main-wrapper'>
    <img />
    <p>posted by:</p>
    <p>Time Posted:</p>
   </div>
   <div className='footer-wrapper'>
    <FaReddit className='reddit-icon' />
   </div>
  </div>
 );
};

export default PostCard;
