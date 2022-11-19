import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeView({ navigation } : { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to stop working on your app!</Text>
      <Button 
        title="Go to the next page"
        onPress={() => navigation.navigate('INSTRUCTIONS_SCREEN')} />
      <Button 
        title="Go to scanning screen"
        onPress={() => navigation.navigate('SCANNING_SCREEN')} />
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