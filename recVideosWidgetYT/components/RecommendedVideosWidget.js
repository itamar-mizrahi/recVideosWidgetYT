import React, { useEffect, useState, useCallback } from 'react';
import YouTubeIframe from 'react-native-youtube-iframe';

const RecommendedVideosWidget = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = 'AIzaSyD1mJMs5lo4Dytviza92X0hYkcW0qqLyJI';
      const CHANNEL_ID = 'UCdUAx5UaL1t6dc_aq5C7wWg';
      const MAX_RESULTS = 10;
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=relevance&type=video&key=${API_KEY}`
      );
      
      const data = await response.json();
      console.log(data);
      const videos = data.items.map((item) => item.id.videoId);
      setRecommendedVideos(videos);
    };

    fetchVideos();
  }, []);

  return (
    <YouTubeIframe
      videoIds={recommendedVideos}
      webViewStyle={{ height: 150 }}
      onChangeState={onStateChange}
    />
  );
};

export default RecommendedVideosWidget;
