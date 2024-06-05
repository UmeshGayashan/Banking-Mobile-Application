import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Umesh Gayashan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // you can add container styles here if needed
  },
  text: {
    color: 'red',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Index;
