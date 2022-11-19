import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { RouterProps } from '../config/navigation'
import { HOME_VIEW } from '../config/paths'

export const InstructionView = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <Text>This is InstructionView</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate(HOME_VIEW)}
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
