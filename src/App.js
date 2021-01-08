import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header/Header';
import PostCard from './Components/PostCard/PostCard';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <PostCard />
      </div>
    </Provider>
  );
}

export default App;
