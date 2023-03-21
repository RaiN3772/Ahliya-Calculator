import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Calculator from './Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Calculator />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300, 
    height: 300, 
    opacity: 0.5, 
    position: 'absolute',
  },
});

