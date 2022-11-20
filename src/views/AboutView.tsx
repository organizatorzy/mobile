import React from "react";
import {SafeAreaView, View, Text, StyleSheet, ImageBackground } from "react-native";
import {Choice} from "../components/Choice"
import { useEffect } from "react";
import { HOME_VIEW, INSTRUCTIONS_VIEW, LOGIN_VIEW ,PHOTO_VIEW, SCANNING_VIEW} from '../config/paths'
import { RouterProps } from '../config/navigation'

import {Button} from "../components/Button"
import logo from "../../assets/kompostownik.png"


export const AboutView = ({ navigation }: RouterProps) => {
    return (<SafeAreaView style={styles.container}>
        <ImageBackground source={logo} resizeMode="cover" style={styles.background}/>
        <View style={styles.containerIn}>
        <Text style={styles.title}>O kompostonoszu</Text>
        <View style={styles.card}>
            <Text>Kompostowanie jest procesem recyklingu materiałów organicznych w bogatą w składniki odżywcze poprawkę do gleby. Jest to prosty i skuteczny sposób na zmniejszenie ilości odpadów, budowę zdrowej gleby i wspieranie zrównoważonego rolnictwa. </Text>
        </View>
        <View style={styles.card}>
            <Text>Kompostowanie ma wiele zalet, w tym zmniejszenie zapotrzebowania na nawozy chemiczne, poprawę zdrowia gleby i zmniejszenie emisji gazów cieplarnianych. Lorem ipsum dolor sit amet.</Text>
        </View>
        </View>
    </SafeAreaView>)}

const styles = StyleSheet.create({

    title:{
        marginRight:20,
        fontSize:24,
        marginBottom:20,
    },

    container: {
        flex:1 ,
      },
    background:{
      position: 'absolute',
      top: 500,
      left: 0,
      right: 0,
      bottom: 0,

    },
    containerIn: {
    marginRight:"auto",
    marginLeft:"auto",
    alignContent:"center",
    justifyContent:"center",
      width:"80%",
    },
    card:{
        width:"87%",
        alignSelf:"center",
        marginBottom:20,
        aspectRatio:3/2,
        backgroundColor:"white",    
        borderColor:"white",
        borderRadius:20,
        padding:20,
    },

    button:{
        marginTop:20,
        marginBottom:280
    }
  });