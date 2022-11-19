import React from 'react'
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { RouterProps } from '../config/navigation'
import { INSTRUCTIONS_VIEW } from '../config/paths'
import logo from '../../assets/kompostownik.png';

export const HomeView = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} resizeMode="cover" style={styles.background}>
      </ImageBackground>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate(INSTRUCTIONS_VIEW)}
      />
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
    background:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

    }
  });