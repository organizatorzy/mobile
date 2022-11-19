import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RouterProps } from '../config/navigation'

export function LoginView({ navigation } : { navigation: RouterProps}) {
  return (
    <View style={styles.container}>
      <Button 
        title="Zaloguj się za pomocą Google"
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
  });