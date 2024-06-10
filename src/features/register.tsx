import { View, Text, Image, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { stylesMain } from "../../style/styleWindowWidth/393";
import { moderateScale } from 'react-native-size-matters';
import axios from 'axios';
import { API_URL } from '../../apiconfig';

const Register = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [cfpassword, onChangeCFPassword] = React.useState('');
    const [firstname, onChangeFirstname] = React.useState('');
    const [lastname, onChangeLastname] = React.useState('');
    const [congenital, onChangeCongenital] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSkinType, setSelectedSkinType] = useState(null);

    const handleSkinTypeSelect = (skinType) => {
        setSelectedSkinType(skinType);
        //console.log(selectedSkinType);
    };


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onChangeEmail('');
            onChangePassword('');
            onChangeFirstname('');
            onChangeLastname('');
            onChangeCongenital('');
            setSelectedSkinType('');
        });

        return unsubscribe;
    }, [navigation]);

    const handleBackPress = () => {
        navigation.navigate('Login');
    };

    // const handleSubmitPress = () => {
    //     navigation.navigate('Login'); 
    // };

    const URL = API_URL;

    const handleSubmitPress = async () => {
        if (email == '' || password == '' || firstname == '' || lastname == ''|| selectedSkinType == '') {
            alert('Please complete all information.');
            return;
        }

        if (email.length < 6) {
            alert('Username must be atleast 6 characters.');
            return;
        }
    
        if (password.length < 6) {
            alert('Password must be atleast 6 characters.');
            return;
        }

        if (password != cfpassword){
            alert('Your password and confirm password are not the same!')
            return;
        }

        try {
            const response = await axios.post(URL + '/register', {
                Email: email,
                Password: password,
                Firstname: firstname,
                Lastname: lastname,
                Congenital: congenital,
                Skintype: selectedSkinType
            });
            console.log(response.data); // Log the response from the server
            setModalVisible(true);
        } catch (error) {
            console.error(error.response.data.error); // Log any error response from the server
            alert('Username already exist!');
        }
    };

    const handleModalClose = () => {
        setModalVisible(false);
        navigation.navigate('Login');
    };

    return (
        <View style={stylesMain.container_white}>
            <View style={[stylesMain.container_point_1_5, stylesMain.justify_center]}>
                <Image source={require('../assets/images/appname.png')} style={[stylesMain.margin_top_28, stylesMain.align_items_self_center, { width: moderateScale(180), height: moderateScale(50) }]} resizeMode="contain" />
            </View>
            <View style={[stylesMain.container_point_8_5]}>
                <TouchableOpacity style={[stylesMain.padding_left_24, stylesMain.flex_row_align_center]}
                    onPress={handleBackPress}
                >
                    <Image source={require('../assets/images/icons/ArrowBack.png')} style={{ width: moderateScale(15), height: moderateScale(15) }} />
                    <Text style={[stylesMain.text_register_header, stylesMain.padding_left_10]}>{" Registration"}</Text>
                </TouchableOpacity>
                <View style={[stylesMain.form_container]}>
                    <Text style={stylesMain.padding_bot_8}>{"Username"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Enter your Username"
                        />
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"Password"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Enter your password"
                            secureTextEntry
                        />
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"Confirm Password"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeCFPassword}
                            value={cfpassword}
                            placeholder="Enter your password again"
                            secureTextEntry
                        />
                    </View>
                    <View style={[stylesMain.flex_row_space_between]}>
                        <View style={stylesMain.flex_direction_column}>
                            <Text style={stylesMain.padding_bot_8}>{"Firstname"}</Text>
                            <View style={[stylesMain.form_text_field_half, stylesMain.margin_bot_10]}>
                                <TextInput
                                    style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                                    onChangeText={onChangeFirstname}
                                    value={firstname}
                                    placeholder="Enter your firstname"
                                />
                            </View>
                        </View>
                        <View style={stylesMain.flex_direction_column}>
                            <Text style={stylesMain.padding_bot_8}>{"Lastname"}</Text>
                            <View style={[stylesMain.form_text_field_half, stylesMain.margin_bot_10]}>
                                <TextInput
                                    style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                                    onChangeText={onChangeLastname}
                                    value={lastname}
                                    placeholder="Enter your lastname"
                                />
                            </View>
                        </View>
                    </View>

                    <Text style={stylesMain.padding_bot_8}>{"Congenital Disease"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeCongenital}
                            value={congenital}
                            placeholder="Enter here"
                        />
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"What's your skin type?"}</Text>
                    {selectedSkinType !== '' && <Text style={[stylesMain.padding_bot_12, stylesMain.align_self_center]}>{selectedSkinType}</Text>}
                    <View style={[stylesMain.flex_row_space_between, stylesMain.align_justify_center, stylesMain.margin_bot_12]}>
                        <TouchableOpacity onPress={() => handleSkinTypeSelect('Dry Skin')}>
                            <Image source={require('../assets/images/dry.png')} style={{ width: moderateScale(70), height: moderateScale(70) }} />
                        </TouchableOpacity >
                        <TouchableOpacity style={stylesMain.margin_hori_24} onPress={() => handleSkinTypeSelect('Normal Skin')}>
                            <Image source={require('../assets/images/normal.png')} style={[{ width: moderateScale(70), height: moderateScale(70) }]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSkinTypeSelect('Oily Skin')}>
                            <Image source={require('../assets/images/oily.png')} style={{ width: moderateScale(70), height: moderateScale(70) }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={[stylesMain.align_justify_center, stylesMain.padding_ver_18]}>
                    <TouchableOpacity
                        style={stylesMain.get_started_button}
                        onPress={handleSubmitPress}>
                        <View>
                            <Text style={stylesMain.text_firstpage_button}>
                                {"Submit"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={stylesMain.modalContainer}>
                    <View style={[stylesMain.modal_inner, stylesMain.align_items_center]}>
                        <Text style={[stylesMain.text_register_header, stylesMain.padding_bot_18]}>Register Complete!</Text>
                        <TouchableOpacity
                            style={stylesMain.modal_button}
                            onPress={handleModalClose}>
                            <View>
                                <Text style={stylesMain.text_firstpage_button}>
                                    {"OK"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Register