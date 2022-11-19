import * as React from 'react';

import { StyleSheet, Button,Image, Text, View,Pressable,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RouterProps } from '../config/navigation'
import { GMINA_VIEW } from '../config/paths';
import logo from '../../assets/kompostownik.png';
import google from '../../assets/google.png';

export function LoginView({ navigation } : { navigation: RouterProps}) {
  return (
    <View style={styles.container}>
            <ImageBackground source={logo} resizeMode="cover" style={styles.background}>
      </ImageBackground>
        <Pressable style={styles.button} onPress={() => navigation.navigate(GMINA_VIEW)}>
        <Image style={styles.google} source={google} />
        <Text style={styles.text}>Sign in with google</Text>

        </Pressable>
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

    },
    google:{
      borderRadius: 20,
 
      height:20,
      width:20,
    },
    button:{
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        height:50,
        paddingLeft:10,
        paddingRight:10,
        
    },
    text:{
      paddingLeft:10,
    }
  });