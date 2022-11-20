import React from "react";
import {SafeAreaView, View, Text, StyleSheet, ImageBackground } from "react-native";
import {Choice} from "../components/Choice"
import { useEffect } from "react";
import { HOME_VIEW, INSTRUCTIONS_VIEW, LOGIN_VIEW, MULTI_CHOICE_VIEW ,PHOTO_VIEW, SCANNING_VIEW} from '../config/paths'
import { RouterProps } from '../config/navigation'

import {Button} from "../components/Button"
import logo from "../../assets/miasto.png"


import { firebaseConfig, db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore"; 
import { MultiChoiceView } from "./MultiChoiceView";



export const GminaView = ({ navigation } : { navigation: RouterProps}) => {


    const [selectedG, setSelectedG] = React.useState<any>("");
    const [selectedR, setSelectedR] = React.useState<any>("");
    const [regions,setRegions] = React.useState<Array<any>>([]);

    const [gminy,setGminy] =  React.useState<Array<any>>([]);

    useEffect(() => {
        loadGminy();
        loadRegion();
      }, []);
    
    async function loadGminy() {
      const querySnapshot = await getDocs(collection(db, "gmina"));
      let gminy: any  = []
      querySnapshot.forEach((doc) => {
        gminy.push(doc.data())
      })
      setGminy(gminy);
    }

    async function loadRegion() {
        const querySnapshot = await getDocs(collection(db, "region"));
        let gminy: any  = []
        querySnapshot.forEach((doc) => {
          gminy.push(doc.data())
        })
        setRegions(gminy);
      }
  







  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={logo} resizeMode="cover" style={styles.background}/>
    <View style={styles.containerIn}>
        <Text style={styles.title}>Gdzie znajduje się Twój kompostownik?</Text>
        <Text style ={styles.text}>Przekazanie tej informacji umożliwi Twojej gminie trafne oszacowanie ilości wyprodukowanego kompostu. Ratujesz swoją społeczność od kar!</Text>
        <View style={{position:"absolute",top:"25%",left:"10%",zIndex:999}}>
        <Text style={styles.label}> Powiat</Text>
        <Choice style={{marginHorizontal:"auto"}} getActive={(data:any)=>{setSelectedR(data)}} active={selectedR.value} data={regions}/>
        </View>
        <View style={{position:"absolute",top:"40%",left:"10%",zIndex:999}}>
        <Text style={styles.label}>Gmina</Text>
        <Choice style={{marginHorizontal:"auto"}} getActive={(data:any)=>{setSelectedG(data)}} active={selectedG.value} data={gminy}/>
        </View>
 

        <Button style={styles.button}   title="Zapisz lokalizację" onPress={() =>  navigation.navigate(HOME_VIEW)}></Button>
      
    </View>
    </SafeAreaView>
  );

};
const styles = StyleSheet.create({
    label:{
        fontSize:14,
        marginTop:15,
    },
    title:{
        fontSize:24,
    },
    text:{fontSize:14,marginTop:30,marginBottom:"auto"},

    container: {
        flex:1 ,
        alignItems:"center"
      },
    background:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: -120,

    },
    containerIn: {
      flex: 1,
      minWidth:"50%",
      maxWidth:"90%"
    },
    button:{
        marginTop:20,
        marginBottom:280
    }
  });