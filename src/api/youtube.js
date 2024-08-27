import axios from 'axios';

const KEY = 'AIzaSyBupH7vAlAEGpWqeE-GvUMDn4B1bB7nS1E';

export const searchVideos = async (query) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 10,
      key: KEY,
      q: query,
      type: 'video',
    }
  });

  const videoIds = response.data.items.map(item => item.id.videoId).join(',');

  const videoDetails = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'statistics',
      id: videoIds,
      key: KEY,
    }
  });

  const itemsWithStatistics = response.data.items.map(item => {
    const statistics = videoDetails.data.items.find(video => video.id === item.id.videoId).statistics;
    return { ...item, statistics };
  });

  return itemsWithStatistics;
};
