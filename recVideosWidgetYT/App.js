import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecommendedVideosWidget from './components/RecommendedVideosWidget';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>YouTube </Text>
      <RecommendedVideosWidget/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
