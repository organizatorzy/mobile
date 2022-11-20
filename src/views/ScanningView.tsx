import * as React from 'react';
import { SafeAreaView, StyleSheet, Text,ActivityIndicator, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button } from '../components/Button';
import {useRef} from 'react'
import * as MediaLibrary from 'expo-media-library';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as FileSystem from 'expo-file-system';
import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs';
import {decode, encode} from 'base-64'
export default function ScanningView() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [mediaprem,requestMedia] =  MediaLibrary.usePermissions();
  const cameraRef = useRef();
  const [loading,setLoading] = useState(false);
  const [isCompostable,setCompostable]  = useState<any>(undefined)

  const evaluate = async ()=>{

 

    await tf.ready();
    let newPhoto = await cameraRef.current.takePictureAsync(null);
    const img = await FileSystem.readAsStringAsync(newPhoto.uri, { encoding: 'base64' });

    setLoading(true);
    const model = await mobilenet.load();
    const data = await Uint8Array.from(decode(img), c => c.charCodeAt(0))
    const imageTensor = decodeJpeg(data);
    const prediction = await model.classify(imageTensor);
    setLoading(false)
    setCompostable(true)

    console.log(prediction)
  
  if (!permission || !mediaprem!) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted || !mediaprem.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ups! Potrzebujemy dostępu do kamey</Text>
        <Button style={{width:"50%",borderColor:"white",borderWidth:1}} onPress={()=>{requestPermission();requestMedia()}} title="Udziel Pozwolenia" />
      </View>
    );
  }

  }
  return (
    
    <View style={[styles.container,!isCompostable==undefined?{ backgroundColor:"red" }:{ backgroundColor:"#5DB075" }]}>

      {
isCompostable == undefined?( 

       loading ? (
        <>
        <ActivityIndicator size="large" color="white"></ActivityIndicator>
        </>
      ):(
        <>
        <Camera style={styles.camera} ref={cameraRef} type={type}/>
        <Button style={{width:"50%",bottom:70, position:"absolute"}} onPress={()=>{evaluate()}} title="Skan" />
        </>
      )
):(

  isCompostable ? <Text style={styles.out}>TAK</Text> : <Text style={styles.out}>>NIE</Text>
)
      }
    </View>
  );
}


const styles = StyleSheet.create({

  no:{
    backgroundColor:"red"
  }
,
  out:{
    fontSize:72,
    color:"white"
    
  },
    container: {
      flex: 1,
      backgroundColor: '#5DB075',
      justifyContent: 'center',
      alignItems:"center"
    },
    camera: {
      flex: 1,
      width:"100%",
      height:"100%"
    },
    text: {
      fontSize: 21,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom:30
    },
  });
  



