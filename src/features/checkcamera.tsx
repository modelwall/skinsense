import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { stylesMain } from '../../style/styleWindowWidth/393';
import CameraPreview from '../component/camerapreview';

const CheckCamera = ({ route, navigation }) => {
  const { backpage } = route.params;
  const [facing, setFacing] = useState('front');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [flash, setFlash] = useState('off');
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={stylesMain.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const __takePicture = async () => {
    // if (!camera) return;
    // const photo = await camera.takePictureAsync();
    //console.log('take photo');
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Photo taken:', photo);
        setCapturedImage(photo);
        // You can handle the photo data here, such as saving it to state or uploading it.
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
    setPreviewVisible(true);
  };

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
  }

  const __savePhoto = () => {
    if (backpage == 'ScanAndImport') {
      navigation.navigate('Scanresult', { image: capturedImage });
    }
    else if (backpage == 'ScanHyper') {
      navigation.navigate('ResultHyper', { image: capturedImage });
    }
    else (
      alert('Error, Somthing went wrong.')
    )
  }

  const handleImportPress = () => {
    navigation.navigate('ImportImage',{backpage: backpage});
  };

  if (previewVisible == true) {
    // Camera permissions are not granted yet.
    return (
      <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
    );
  }

  return (

    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.15,
          backgroundColor: "black",
          width: "100%",
        }}
      ></View>
      <CameraView
        ref={cameraRef}
        facing={facing}
        playSoundOnCapture={false}
        //animateShutter={false}
        enableTorch={false}
        // flashMode={flash}
        style={{ flex: 0.65, width: "100%" }}
      // ref={(r) => {
      //   camera = r;
      // }}
      // type={cameraType}
      ></CameraView>
      <View
        style={{
          alignSelf: "center",
          flex: 0.2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <View style={stylesMain.flex_row_space_between_align_center}>
          <TouchableOpacity onPress={handleImportPress} style={{}}>
            <Text style={{color:'white', fontWeight:'500', fontSize:16}}>
              Import Image
            </Text>
          </TouchableOpacity>
          <View style={stylesMain.padding_hori_32}>
            <TouchableOpacity onPress={__takePicture} style={{}}>
              <Image
                source={require("../assets/images/icons/Shutter.png")}
                style={{}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleCameraFacing} style={{}}>
            <Text style={{color:'white', fontWeight:'500', fontSize:16}}>
              Flip Camera
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CheckCamera