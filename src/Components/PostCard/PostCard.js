import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/features/postsActions';
import Post from '../Post/Post';

import './PostCard.css';

const PostCard = ({ postData, loading, error, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  console.log(postData);
  console.log(error);

  return (
    <div className='post-container'>
      <Post posts={postData} loading={loading} />
    </div>
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
