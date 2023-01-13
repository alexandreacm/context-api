import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthProvider } from './src/contexts/AuthProvider';
import { Home }  from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <AuthProvider>
          <Home />
        </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
});
