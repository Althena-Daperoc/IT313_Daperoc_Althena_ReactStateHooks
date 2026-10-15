import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Practice Tracker</Text>
      <Text style={styles.text}>Solved: {solved}</Text>

      {solved >= 5 && <Text style={styles.successText}>Great job!</Text>}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={onSolve}>
          <Text style={styles.buttonText}>Solve +1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={onReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8, marginVertical: 8, width: '100%' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 8 },
  successText: { color: 'green', fontWeight: 'bold', marginBottom: 8 },
  buttonRow: { flexDirection: 'row', gap: 10 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, flex: 1, alignItems: 'center' },
  resetButton: { backgroundColor: '#FF3B30' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});