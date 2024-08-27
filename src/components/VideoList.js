import React from 'react';

function VideoList({ videos, onVideoSelect }) {
  return (
    <div>
      {videos.map(video => (
        <div key={video.id.videoId} onClick={() => onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h4>{video.snippet.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
