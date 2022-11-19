import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {HOME_VIEW, INSTRUCTIONS_VIEW , DISTRICT_VIEW , SCANNING_VIEW, WEIGHT_VIEW, CONGRATS_VIEW, FAIL_VIEW } from './paths'

export const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    [HOME_VIEW]: undefined;
    [INSTRUCTIONS_VIEW]: undefined;
    [DISTRICT_VIEW]: undefined;
    [SCANNING_VIEW]: undefined;
    [WEIGHT_VIEW]: undefined;
    [CONGRATS_VIEW]: undefined;
    [FAIL_VIEW]: undefined;
  };

  export type RouterProps = NativeStackScreenProps<RootStackParamList>;