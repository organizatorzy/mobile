import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useRef } from 'react';
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
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
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
        <Text>Podziel się zdjęciem swojego kompostu!</Text>
        <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
      </Camera>
      <Button
        title='Wyślij swój kompost do urzednika'
        onPress={takePicture}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
