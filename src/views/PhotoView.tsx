import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button } from '../components/Button';
import { HOME_VIEW } from '../config/paths';

export function PhotoView ({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);


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
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
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
