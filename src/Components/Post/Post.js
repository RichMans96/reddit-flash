import React from 'react';
import './Post.css';
import { FaReddit } from 'react-icons/fa';

const Post = ({ posts, loading }) => {
  console.log(posts);
  console.log(loading);
  if (loading) return <h1>Loading</h1>;
  return (
    <div className='post-wrapper'>
      <div className='header-wrapper'>
        <h1 className='post-title'>Title</h1>
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

export default Post;
