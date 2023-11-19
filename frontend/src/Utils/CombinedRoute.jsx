import React from 'react';
import CreatePost from './CreatePost';
import Home from '../Routes/Home'; // Ajusta la importación según la ubicación real de Home.jsx

function CombinedRoute({ onAddPost, isLoggedIn, initialPosts }) {
  return (
    <>
        <Home />
        <CreatePost onAddPost={onAddPost} isLoggedIn={isLoggedIn} initialPosts={initialPosts} />
    </>
  );
}

export default CombinedRoute;