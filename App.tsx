import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/config/navigation'
import { HOME_VIEW, INSTRUCTIONS_VIEW } from './src/config/paths'

import { HomeView } from './src/views/HomeView';
import { InstructionView } from './src/views/InstrunctionView';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_VIEW}>
        <Stack.Screen name={HOME_VIEW} component={HomeView} options={{ headerShown: false }}/>
        <Stack.Screen name={INSTRUCTIONS_VIEW} component={InstructionView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


