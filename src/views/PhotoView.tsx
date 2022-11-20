import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button } from '../components/Button';
import { HOME_VIEW } from '../config/paths';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { imag } from '@tensorflow/tfjs';
import 'react-native-get-random-values'
import { v4 } from 'uuid'


import { setDoc, doc } from "firebase/firestore";
import {db} from '../firebase/config'


export function PhotoView ({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const IMG_NAME = v4()

  const storage = getStorage();
  const storageRef = ref(storage, IMG_NAME);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ups! Potrzebujemy dostępu do kamey</Text>
        <Button style={{width:"50%",borderColor:"white",borderWidth:1}} onPress={()=>requestPermission()} title="Udziel Pozwolenia" />
      </View>
    );
  }


  const takePicture = async () => {
    if (camera) {
      // const data = await camera.takePictureAsync()

      // console.log('data');
      // console.log(data);

      // uploadBytes(storageRef, data).then((snapshot) => {
      //   console.log('Uploaded a blob or file!');
      // });


      const userRef = doc(db, 'compostToAccept', v4())
    setDoc(userRef, {
        date: new Date(),
        photo: '2.jpg',
        ownerId: '2',
        ownerName: 'Wojtek Kremówczak',
        id: v4()
    });

      navigation.navigate(HOME_VIEW);
    }
  };



  return (
    <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
      </Camera>
      <Button style={{width:"50%",bottom:70, position:"absolute"}}
        title='Wyślij swój kompost do urzednika'
        onPress={takePicture}
      />
    </View>
  );
}



const styles = StyleSheet.create({
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
