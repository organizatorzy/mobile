import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HOME_SCREEN, INSTRUCTIONS_SCREEN, SCANNING_SCREEN } from './src/paths'
import HomeView from './src/views/HomeView'
import InstructionView from './src/views/InstructionView'
import ScanningView from './src/views/ScanningView'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME_SCREEN} component={HomeView} />
        <Stack.Screen name={INSTRUCTIONS_SCREEN} component={InstructionView} />
        <Stack.Screen name={SCANNING_SCREEN} component={ScanningView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 


