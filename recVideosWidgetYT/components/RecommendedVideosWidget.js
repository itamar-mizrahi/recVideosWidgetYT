import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YouTubePlayer from 'react-native-youtube';

const RecommendedVideosWidget = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch recommended videos from your API or YouTube Data API
    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDrfN2gc4k5JQTQqQt9PXVV180cMh1vlTE')
      .then(response => response.json())
      .then(data => setVideos(data.items))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <YouTubePlayer
        apiKey="AIzaSyDrfN2gc4k5JQTQqQt9PXVV180cMh1vlTE"
        videoId={item.id.videoId}
        style={styles.videoPlayer}
      />
      <Text style={styles.videoTitle}>{item.snippet.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recommended Videos</Text>
        <Ionicons name="ios-arrow-forward" size={24} color="black" />
      </View>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id.videoId}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoContainer: {
    marginRight: 10,
  },
  videoPlayer: {
    width: 150,
    height: 100,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecommendedVideosWidget;
