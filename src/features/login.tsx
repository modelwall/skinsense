import { Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState, useContext, useEffect } from 'react'
import { stylesMain } from '../../style/styleWindowWidth/393'
import { moderateScale } from 'react-native-size-matters';
import axios from 'axios';
import AuthContext from '../component/authcontext';
import { API_URL } from '../../apiconfig';

const Login = ({ navigation }) => {

  // const handleLoginPress = () => {
  //   navigation.navigate('Menu'); 
  // };
  const { setUserEmail } = useContext(AuthContext);
  const URL = API_URL;

  const handleRegisterPress = () => {
    navigation.navigate('Register'); 
  };

  const handleForgotPress = () => {
    navigation.navigate('ForgotPassword'); 
  };

  const handleLoginPress = async () => {
    if (email == '' || password == '') {
      alert('Please fill username or password.');
      return;
    }
    try {
      const response = await axios.post( URL + '/login', { Email: email, Password: password });
      console.log(response.data.message); // Log the response from the server
      setUserEmail(email)
      navigation.navigate('Menu');
    } catch (error) {
      //console.error(error.response.data); // Log any error response from the server
      alert('Invalid username or password!')
    }
  };

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onChangeEmail('');
      onChangePassword('');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[stylesMain.container_white]}
    >
      <View style={stylesMain.container_point_4}></View>
      <ScrollView keyboardShouldPersistTaps="handled">
      <View style={[stylesMain.container_point_3, stylesMain.align_justify_center, stylesMain.padding_bot_10_percent]}>
        <Image source={require('../assets/images/appname.png')} style={{}} />
      </View>
      <View style={stylesMain.container_point_6}>
        <View style={[stylesMain.align_items_center]}>
          <Image source={require('../assets/images/LoginScreen.png')} style={{width:'100%',height:moderateScale(420)}}  />
          <View style={[stylesMain.login_text_field, stylesMain.margin_bot_10]}>
            <Image source={require('../assets/images/icons/Email.png')} style={{}} />
            <TextInput
              style={[stylesMain.padding_left_4, { width: moderateScale(250) }]}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Username"
            />
          </View>
          <View style={[stylesMain.login_text_field, stylesMain.margin_bot_10]}>
            <Image source={require('../assets/images/icons/Key.png')} style={{}} />
            <TextInput
              style={{ width: moderateScale(250) }}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={stylesMain.get_started_button}
            onPress={handleLoginPress}
          >
            <View>
              <Text style={stylesMain.text_firstpage_button}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[stylesMain.flex_row_align_center, stylesMain.padding_top_24]}>
            <TouchableOpacity onPress={handleRegisterPress} >
              <Text style={stylesMain.text_clickable}>{'Register'}</Text>
            </TouchableOpacity>
            <Text style={{color:'black'}}>{' | '}</Text>
            <TouchableOpacity onPress={handleForgotPress}>
              <Text style={stylesMain.text_clickable}>{'Forgot Password?'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default Login