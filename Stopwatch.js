import { StyleSheet, Text, View } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Lab Timer</Text>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      
      <Text style={[styles.statusText, { color: isRunning ? 'green' : 'orange' }]}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8, marginVertical: 8, width: '100%', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  timerText: { fontSize: 32, fontWeight: 'bold', marginBottom: 4 },
  statusText: { fontSize: 16, fontWeight: '600' }
});