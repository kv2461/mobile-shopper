import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//View is div - test
export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={{color:'red'}}>{counter !== 10 ? counter : 'I love you'}</Text>
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => setCounter(counter+1)}
        title="Press Me"
      >
        Press Me
      </Button>
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
