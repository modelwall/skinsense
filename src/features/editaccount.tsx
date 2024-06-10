import { View, Text, Image, TouchableOpacity, TextInput, Alert, Modal } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../component/authcontext';
import axios from 'axios';
import { API_URL } from '../../apiconfig';
import { stylesMain } from '../../style/styleWindowWidth/393';
import { moderateScale } from 'react-native-size-matters';

const EditAccount = ({ navigation }) => {
    const URL = API_URL;
    const { userEmail } = useContext(AuthContext);
    const [accountDetail, setAccountDetail] = useState(null);
    const [email, onChangeEmail] = React.useState('');
    const [firstname, onChangeFirstname] = React.useState('');
    const [lastname, onChangeLastname] = React.useState('');
    const [congenital, onChangeCongenital] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const getAccountDetail = async () => {
        try {
            const response = await axios.post(URL + '/get_account_detail', {
                email: userEmail,
            });
            //console.log('Response:', response.data);
            if (response.data.result) {
                setAccountDetail(response.data.result);
                console.log('Account Detail:', response.data.result);
            } else {
                console.error('No account detail found in response:', response.data);
                // Handle the case where response doesn't contain account detail
            }
        } catch (error) {
            console.error('Error fetching account detail:', error);
            // Handle error gracefully, e.g., display an error message to the user
        }
    };

    useEffect(() => {
        getAccountDetail();
        
    }, []);

    const handleBackPress = () => {
        navigation.navigate('Menu');
    };

    const handleEditPress = () => {
        onChangeEmail(accountDetail.username);
        onChangeFirstname(accountDetail.firstname);
        onChangeLastname(accountDetail.lastname);
        onChangeCongenital(accountDetail.congenital);
        setIsEditing(!isEditing);
    };

    const handleSavePress = async () => {
        try {
            const response = await axios.post(URL + '/update_account_detail', {
                oldEmail: userEmail,
                newEmail: email,
                firstname: firstname,
                lastname: lastname,
                congenital: congenital
            });
            console.log('Account detail updated:', response.data);
            //Alert.alert('Success', 'Account detail updated successfully');
            setIsEditing(false);
            setModalVisible(true);
        } catch (error) {
            //console.error('Error updating account detail:', error);
            Alert.alert('Error', 'Failed to update account detail. Please try again.');
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
            <View style={stylesMain.container_point_8_5}>
                <TouchableOpacity style={[stylesMain.padding_left_24, stylesMain.flex_row_align_center]}
                    onPress={handleBackPress}
                >
                    <Image source={require('../assets/images/icons/ArrowBack.png')} style={{ width: moderateScale(15), height: moderateScale(15) }} />
                    <Text style={[stylesMain.text_register_header, stylesMain.padding_left_10]}>{" Edit Account"}</Text>
                </TouchableOpacity>
                <View style={[stylesMain.form_editcontainer]}>
                    <Text style={stylesMain.padding_bot_8}>{"Username"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeEmail}
                            value={!isEditing && accountDetail ? accountDetail.username : email}
                            placeholder="Enter your Username"
                            editable={isEditing}
                        />
                    </View>
                    <View style={[stylesMain.flex_row_space_between]}>
                        <View style={stylesMain.flex_direction_column}>
                            <Text style={stylesMain.padding_bot_8}>{"Firstname"}</Text>
                            <View style={[stylesMain.form_text_field_half, stylesMain.margin_bot_10]}>
                                <TextInput
                                    style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                                    onChangeText={onChangeFirstname}
                                    value={!isEditing && accountDetail ? accountDetail.firstname : firstname}
                                    placeholder="Enter your firstname"
                                    editable={isEditing}
                                />
                            </View>
                        </View>
                        <View style={stylesMain.flex_direction_column}>
                            <Text style={stylesMain.padding_bot_8}>{"Lastname"}</Text>
                            <View style={[stylesMain.form_text_field_half, stylesMain.margin_bot_10]}>
                                <TextInput
                                    style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                                    onChangeText={onChangeLastname}
                                    value={!isEditing && accountDetail ? accountDetail.lastname : lastname}
                                    placeholder="Enter your lastname"
                                    editable={isEditing}
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"Congenital Disease"}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={onChangeCongenital}
                            value={!isEditing && accountDetail ? accountDetail.congenital : congenital}
                            placeholder="-"
                            editable={isEditing}
                        />
                    </View>
                    <Text style={stylesMain.padding_bot_8}>{"Your skin type is "}</Text>
                    <View style={[stylesMain.form_text_field, stylesMain.margin_bot_10]}>
                        <TextInput
                            style={[stylesMain.padding_left_4, { width: moderateScale(250), fontSize: 12 }]}
                            onChangeText={()=>{}}
                            value={ accountDetail ? accountDetail.skintype :''}
                            placeholder="-"
                            editable={false}
                        />
                    </View>
                </View>
                <View style={[stylesMain.align_items_center, stylesMain.padding_ver_24]}>
                    {!isEditing ?
                        <TouchableOpacity
                            style={stylesMain.get_started_button}
                            onPress={handleEditPress}>
                            <View>
                                <Text style={stylesMain.text_firstpage_button}>
                                    {"Edit"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        : 
                        <View style={stylesMain.flex_direction_row}>
                            <TouchableOpacity
                                style={stylesMain.cancel_button}
                                onPress={handleEditPress}>
                                <View>
                                    <Text style={stylesMain.text_cancel_button}>
                                        {"Cancel"}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={stylesMain.container_point_3}></View>
                            <TouchableOpacity
                                style={stylesMain.save_button}
                                onPress={handleSavePress}>
                                <View>
                                    <Text style={stylesMain.text_firstpage_button}>
                                        {"Save"}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }

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
                        <Text style={[stylesMain.text_register_header, stylesMain.padding_bot_18]}>{'Edit Complete!\nPlease re-login'}</Text>
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

export default EditAccount