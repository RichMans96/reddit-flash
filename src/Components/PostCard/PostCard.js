import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/features/postsActions';
import { FaReddit } from 'react-icons/fa';

import './PostCard.css';

const PostCard = ({ postData, loading, error, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  console.log(postData);
  console.log(error);

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      {postData.map((post) => {
        return (
          <div className='post-container'>
            <div className='post-wrapper'>
              <div className='header-wrapper'>
                <h1 className='post-title'>{post.data.title}</h1>
              </div>
              <div className='main-wrapper'>
                <div className='img-container'>
                  <img src={post.data.url} className='img-item' />
                </div>
                <div className='post-details'>
                  <p>posted by: {post.data.author}</p>
                  <p>Time Posted:</p>
                </div>
              </div>
              <div className='footer-wrapper'>
                <FaReddit className='reddit-icon' />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.posts,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
