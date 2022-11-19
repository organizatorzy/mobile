import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeView } from './src/views/HomeView'
import { HOME_SCREEN, INSTRUCTIONS_SCREEN } from './src/paths'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME_SCREEN} component={HomeView} />
        <Stack.Screen name={INSTRUCTIONS_SCREEN} component={InstructionView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 


