import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/NotFound';
import { SearchFeed } from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="video/:id" element={<VideoDetail/>}/>
        <Route path="search/:searchInput" element={<SearchFeed/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
