import React from 'react'
import {  View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { RouterProps } from '../config/navigation'
import { INSTRUCTIONS_VIEW, LOGIN_VIEW ,PHOTO_VIEW, SCANNING_VIEW,ABOUT_VIEW} from '../config/paths'
import logo from '../../assets/kompostownik.png';
import { Button } from '../components/Button';

export const HomeView = ({ navigation }: RouterProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={logo} resizeMode="cover" style={styles.background}/>
      <View style={styles.innerConntainer}>
      <Text style={styles.title}>Kompostonosz</Text>     

            <Button
        title="Dodaj zdjęcie kompostu"
        style={styles.button}
        onPress={() => navigation.navigate(SCANNING_VIEW)}
      />
            <Button
        title="Skanuj przedmiot"
        style={styles.button}
        onPress={() => navigation.navigate(PHOTO_VIEW)}
      />

      <Button
        title="O aplikacji"
        style={styles.button}
        onPress={() => navigation.navigate(ABOUT_VIEW)}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button:{
    marginBottom:20
  },
    innerConntainer:{
      flex: 1,
    },
    container: {
      flex: 1,

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
    title:{
      marginTop:40,
      fontSize:40,
      fontWeight:"bold",
      textAlign: "center",
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'auto',
    },
  
  });