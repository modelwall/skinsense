import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { stylesMain } from '../../style/styleWindowWidth/393'
import { moderateScale } from 'react-native-size-matters'
import axios from 'axios'
import { API_URL } from '../../apiconfig'

const ForgotPassword = ({ navigation }) => {

    const URL = API_URL;

    const [email, onChangeEmail] = React.useState('');
    const [newpw, onChangeNewPW] = React.useState('');
    const [cfpassword, onChangeCFPassword] = React.useState('');

    const handleBackPress = () => {
        navigation.navigate('Login');
    };

    const handleConfirmPress = async () => {
        if (email == '' || newpw == '') {
            alert('Please complete all information.');
            return;
        }

        if (newpw != cfpassword){
            alert('Your password and confirm password are not the same!')
            return;
        }

        try {
            const response = await axios.post(URL + '/change_password', {
                email: email,
                new_password: newpw,
            });
            console.log('Password updated:', response.data);
            Alert.alert('Change password completed.');
            navigation.navigate('Login');
        } catch (error) {
            //console.error('Error updating account detail:', error);
            Alert.alert('Change password failed. Please check username again');
        }
    };

    return (
        <View style={stylesMain.container_white}>
            <View style={[stylesMain.container_point_1_5, stylesMain.justify_center]}>
                <Image source={require('../assets/images/appname.png')} style={[stylesMain.margin_top_28, stylesMain.align_items_self_center, { width: moderateScale(180), height: moderateScale(50) }]} resizeMode="contain" />
            </View>
            <View style={stylesMain.container_point_8_5}>
                <TouchableOpacity style={[stylesMain.padding_left_24, stylesMain.flex_row_align_center]}
                    onPress={handleBackPress}
                >
                    <Image source={require('../assets/images/icons/ArrowBack.png')} style={{ width: moderateScale(15), height: moderateScale(15) }} />
                    <Text style={[stylesMain.text_register_header, stylesMain.padding_left_10]}>{"Forgot Password"}</Text>
                </TouchableOpacity>
                <View style={[stylesMain.form_forgotpwcontainer]}>
                    <Text style={stylesMain.padding_bot_8}>{"Your Username"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Enter your Username"
                        />
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"Set new password"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeNewPW}
                            value={newpw}
                            placeholder="Enter new password"
                            secureTextEntry
                        />
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"Confirm new password"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeCFPassword}
                            value={cfpassword}
                            placeholder="Enter your new password again"
                            secureTextEntry
                        />
                    </View>
                </View>
                <View style={[stylesMain.align_justify_center, stylesMain.padding_ver_18]}>
                    <TouchableOpacity
                        style={stylesMain.get_started_button}
                        onPress={handleConfirmPress}>
                        <View>
                            <Text style={stylesMain.text_firstpage_button}>
                                {"Submit"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword