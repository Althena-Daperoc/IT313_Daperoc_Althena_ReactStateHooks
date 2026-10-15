import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';
import { useStopwatch } from './useStopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lab Session Tracker</Text>

      <PracticeTracker 
        solved={solved} 
        onSolve={handleSolve} 
        onReset={handleReset} 
      />

      <Stopwatch 
        seconds={seconds} 
        isRunning={isRunning} 
      />

      <View style={styles.controlRow}>
        <TouchableOpacity style={[styles.controlButton, styles.startButton]} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.controlButton, styles.stopButton]} onPress={handleStop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  controlRow: { flexDirection: 'row', gap: 10, marginTop: 12, width: '100%' },
  controlButton: { padding: 12, borderRadius: 5, flex: 1, alignItems: 'center' },
  startButton: { backgroundColor: '#34C759' },
  stopButton: { backgroundColor: '#FF9500' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});