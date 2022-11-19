import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { RouterProps } from '../config/navigation'

export function MultiChoiceView({ navigation } : { navigation: RouterProps}) {
  return (
    <View style={styles.container}>
      <Button 
        title="Skanuj przedmiot"
      />
      <Button 
        title="Dodaj kompost"
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