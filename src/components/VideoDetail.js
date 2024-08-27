import React from 'react';
import './VideoDetail.css'; // Добавим отдельные стили

function VideoDetail({ video }) {
  if (!video) {
    return <div>Select a video</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail-container">
      <div>
        <iframe src={videoSrc} frameBorder="0" title="Video player" />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <div className="stats">
          <span className="likes">👍 {video.statistics.likeCount}</span>
          <span className="dislikes">👎 {video.statistics.dislikeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
