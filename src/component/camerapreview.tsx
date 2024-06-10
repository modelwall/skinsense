import { ImageBackground, TouchableOpacity, View, Text, Image } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { stylesMain } from "../../style/styleWindowWidth/393"

const CameraPreview = ({photo, savePhoto, retakePicture}: any) => {
    console.log('sdsfds', photo)
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <View style={[stylesMain.container_point_4, stylesMain.align_justify_center]}>
          <Image source={require('../assets/images/appname.png')} style={{}} resizeMode="contain" />
        </View>
        <Text style={[stylesMain.text_register_header, stylesMain.padding_left_16]}>{"Photo Preview"}</Text>
        <View style={[stylesMain.align_items_center, stylesMain.padding_top_16]}>
          <Image
            source={{uri: photo && photo.uri}}
            style={{
              //flex: 0.7
              width: moderateScale(300), height: moderateScale(500),
            }}
          />
        </View>
        <View style={[stylesMain.container_point_2, stylesMain.flex_row_align_justify_center, stylesMain.padding_top_24]}>
          <TouchableOpacity onPress={retakePicture} style={[stylesMain.Selection_button_2]}>
            <Text style={{ fontWeight:'bold', color: 'black' }}>Retake</Text>
          </TouchableOpacity>
          <View style={{width:'10%'}}></View>
          <TouchableOpacity onPress={savePhoto} style={[stylesMain.Selection_button_2]}>
            <Text style={{ fontWeight:'bold', color: 'black' }}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  export default CameraPreview