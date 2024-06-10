import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'
import { stylesMain } from '../../style/styleWindowWidth/393'
import { moderateScale } from 'react-native-size-matters';

const Firstpage = ({navigation}) => {

  const handleGetStartedPress = () => {
    navigation.navigate('Register'); 
  };

  const handleGetLoginPress = () => {
    navigation.navigate('Login'); 
  };

  const [message, setMessage] = useState(null);

//   useEffect(() => {
//     fetch('http://192.168.1.41:5000')
//         .then(response => response.text())
//         .then(text => setMessage(text))
//         .catch(error => console.error(error));
// }, []);

  return (
      <View style={[stylesMain.container_white]}>
        <View style={[stylesMain.container_point_1_5, stylesMain.align_justify_center]}>
          <Image source={require('../assets/images/appname.png')} style={{}} />
        </View>
        <View style={[stylesMain.container_point_8,stylesMain.align_items_center, stylesMain.margin_top_minus_30]}>
          <Image source={require('../assets/images/firstpage.png')} style={{width:'100%',height:moderateScale(450)}} />
          <Text style={[stylesMain.text_firstpage]}>Resolve your facial problem</Text>
          <Text style={[stylesMain.text_firstpage, stylesMain.padding_bot_24]}>and find the best for you</Text>
          <TouchableOpacity 
          style={stylesMain.get_started_button}
           onPress={handleGetStartedPress}>
            <View>
              <Text style={stylesMain.text_firstpage_button}>
                 Get Started
              </Text>
            </View>
          </TouchableOpacity>
          <View style = {[stylesMain.flex_row_align_center,stylesMain.padding_top_24]}>
            <Text>{message ||'Already have account?'} </Text>
            <TouchableOpacity onPress={handleGetLoginPress}>
              <Text style={stylesMain.text_clickable}>{'Login'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default Firstpage;