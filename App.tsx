import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/config/navigation'

import { HOME_VIEW, INSTRUCTIONS_VIEW, LOGIN_VIEW, SCANNING_VIEW,GMINA_VIEW, PHOTO_VIEW, ABOUT_VIEW } from './src/config/paths'


import { HomeView } from './src/views/HomeView';
import { InstructionView } from './src/views/InstrunctionView';
import  ScanningView  from './src/views/ScanningView'

import { GminaView } from './src/views/GminaView';
import { PhotoView } from './src/views/PhotoView';

import { LoginView } from './src/views/LoginView';
import { AboutView } from './src/views/AboutView';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOGIN_VIEW}>
        <Stack.Screen name={HOME_VIEW} component={HomeView} options={{ headerShown: false }}/>
        <Stack.Screen name={INSTRUCTIONS_VIEW} component={InstructionView} options={{ headerShown: false }} />
        <Stack.Screen name={SCANNING_VIEW} component={ScanningView} options={{ headerShown: false }} />
        <Stack.Screen name={GMINA_VIEW} component={GminaView} options={{ headerShown: false }} />
        <Stack.Screen name={LOGIN_VIEW} component={LoginView} options={{ headerShown: false }} />
        <Stack.Screen name={PHOTO_VIEW} component={PhotoView} options={{ headerShown: false }} />
        <Stack.Screen name={ABOUT_VIEW} component={AboutView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


