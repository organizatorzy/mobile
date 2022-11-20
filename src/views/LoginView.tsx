import * as React from 'react';

import { StyleSheet,SafeAreaView,Image, Text, View,Pressable,ImageBackground,AsyncStorage } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RouterProps } from '../config/navigation'
import { GMINA_VIEW, HOME_VIEW } from '../config/paths';
import logo from '../../assets/kompostownik.png';
import google from '../../assets/google.png';
import { Button } from '../components/Button';

export function LoginView({ navigation } : { navigation: RouterProps}) {






  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={logo} resizeMode="cover" style={styles.background}/>
    <View style={styles.buttonContainer}>

        <Text style={styles.title}>Kompostonosz</Text>     

        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },styles.button]} onPress={() =>  navigation.navigate(GMINA_VIEW)}>
        <Image style={styles.google} source={google} />
        <Text style={styles.text}>Sign in with google</Text>
        </Pressable>
        <Button   onPress={()=>{}} title='O Aplikacji' disabled={false} />

      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1 ,
    alignItems: 'center',
  },

  title:{
    marginTop:40,
    fontSize:40,
    fontWeight:"bold",
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
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
        padding:13,
        marginBottom:10,
    },
    text:{
        paddingLeft:10,
    },
    buttonContainer:{
        flex:1,
        width:"80%",
    }

  });