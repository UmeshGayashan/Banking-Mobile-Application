import { View } from 'react-native';
import { Slot } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <View style={styles.container}>  
      <Slot />
    </View>
  );
};
// In React Native, you should use the style prop instead of the className prop
const styles = {
  container: {
    marginTop: 20, // equivalent to mt-5
  },
};

export default Layout;
