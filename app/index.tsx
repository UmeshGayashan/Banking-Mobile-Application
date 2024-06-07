import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Umesh Gayashan</Text>
      <Link href='/user/'>user</Link>
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
