import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { searchVideos } from './api/youtube';
import './App.css'; // Добавим файл со стилями

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (query) => {
    const results = await searchVideos(query);
    setVideos(results);
    setSelectedVideo(results[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      <div className="content-container">
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}

export default App;
