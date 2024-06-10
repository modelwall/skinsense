import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as FileSystem from 'expo-file-system';
import AuthContext from '../component/authcontext';
import { API_URL } from '../../apiconfig';
import { stylesMain } from '../../style/styleWindowWidth/393';
import { moderateScale } from 'react-native-size-matters';

const Scanresult = ({ route, navigation }) => {

    const { image } = route.params;
    const { userEmail } = useContext(AuthContext);
    const [message, setMessage] = useState(null);
    const [submessage, setSubMessage] = useState(null);
    const URL = API_URL;

    const handleBackPress = () => {
        navigation.navigate('Menu');
    };

    const handleRecommendPress = () => {
        navigation.navigate('RecommendAcne', {
            message: message,
            submessage: submessage
        });
    };

    useEffect(() => {
        const sendImageToApi = async () => {
            if (image) {
                const base64 = await FileSystem.readAsStringAsync(image.uri, { encoding: FileSystem.EncodingType.Base64 });

                // Construct the request body
                const requestBody = JSON.stringify({ image: base64, email: userEmail });
                // console.log(requestBody);
                // Make the POST request using fetch
                fetch(URL + '/predict_acne', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: requestBody,
                    //uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('API response:', data);
                        // Handle the response from the API
                        const predictedAcneLevel = data.predicted_acne_level;
                        let message = '';
                        let submessage = '';
                        switch (predictedAcneLevel) {
                            case 0:
                                message = "No Acne";
                                submessage = "No acne found on your face";
                                break;
                            case 1:
                                message = "Mild Acne";
                                submessage = "Little acne spots found on your face";
                                break;
                            case 2:
                                message = "Moderate Acne";
                                submessage = "Some acne spots found on your face";
                                break;
                            case 3:
                                message = "Severe Acne";
                                submessage = "Many acne spots found on your face";
                                break;
                            case 4:
                                message = "Very Severe Acne";
                                submessage = "Lots of acne spots found on your face";
                                break;
                            default:
                                message = "Unknown";
                                submessage = "Error";
                        }
                        setMessage(message);
                        setSubMessage(submessage);
                    })
                    .catch(error => {
                        console.error('Error sending image to API:', error);
                        // Handle errors
                    });
            }
        };
        sendImageToApi();
    }, [image.uri]);

    // useEffect(() => {
    //     fetch('http://192.168.1.41:5000')
    //         .then(response => response.text())
    //         .then(text => setMessage(text))
    //         .catch(error => console.error(error));
    // }, []);

    const newWidth = image.width * 0.2;
    const newHeight = image.height * 0.2;

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Image
        //         source={{ uri: image.uri }}
        //         style={{ width: newWidth, height: newHeight }}
        //     />
        //     <Text>{message || 'Fetching data...'}</Text>
        // </View>
        <View style={stylesMain.container_white} >
            <View style={[stylesMain.container_point_3, stylesMain.justify_center]}>
                <Image source={require('../assets/images/appname.png')} style={[stylesMain.margin_top_28, stylesMain.align_items_self_center]} resizeMode="contain" />
            </View>
            <View style={[stylesMain.form_containerresult]}>

                <Text style={[stylesMain.text_result_header, stylesMain.text_center, stylesMain.padding_bot_12]}>{"Scan result"}</Text>

                <View style={[stylesMain.container_point_9, stylesMain.align_items_center]}>
                    <View style={stylesMain.round_border_container}>
                        <Image source={{ uri: image.uri }} style={{ width: moderateScale(190), height: moderateScale(290) }} />
                    </View>
                </View>
            </View>

            <View style={[stylesMain.flex_row_align_center, stylesMain.padding_top_24]}>
                <Text style={[stylesMain.text_result_Level, stylesMain.text_center, stylesMain.padding_left_24]}>{"Acne severity level"}</Text>
            </View>

            <View style={[stylesMain.form_consubresult]}>

                <View style={[stylesMain.flex_direction_row, stylesMain.margin_bot_10]}>

                    {message !== 'No Acne' ? (
                        <View style={[stylesMain.container_point_2, stylesMain.align_items_center, stylesMain.margin_hori_32]}>
                            <Image source={require('../assets/images/AcneSevere.png')} style={{width: moderateScale(75), height:moderateScale(75)}} resizeMode='contain' />
                        </View>
                    ) : <View style={[stylesMain.container_point_2, stylesMain.align_items_center, stylesMain.margin_hori_32]}>
                        <Image source={require('../assets/images/resultlev.png')} style={{width: moderateScale(75), height:moderateScale(75)}} resizeMode='contain' />
                    </View>
                    }
                    <View style={[stylesMain.flex_direction_column, stylesMain.padding_left_16, stylesMain.align_center_justify_start]}>
                        <Text style={stylesMain.text_result_Level2}>{message || 'Waiting for result...'}</Text>
                        <Text style={stylesMain.padding_bot_8}>{submessage || 'Waiting for result...'}</Text>

                    </View>

                </View>
                <TouchableOpacity
                    style={[stylesMain.menu_recommend_acne2, stylesMain.margin_top_40, stylesMain.align_items_self_center]}
                    onPress={handleBackPress}
                >
                    <View>
                        <Text style={stylesMain.text_menu_result_acne2}>
                            Return to Menu
                        </Text>
                    </View>
                </TouchableOpacity>
                {message !== 'No Acne' ? (
                    <>
                        <View style={{ height: moderateScale(10) }}></View>
                        {message ? <TouchableOpacity
                            style={[stylesMain.menu_recommend_acne,stylesMain.align_items_self_center]}
                            onPress={handleRecommendPress}
                        >
                            <View>
                                <Text style={stylesMain.text_menu_result_acne}>
                                    See Guidance
                                </Text>
                            </View>
                        </TouchableOpacity>
                        :
                        <View></View>
                        }
                        
                    </>
                ) : null}
            </View>

        </View>
    )
}

export default Scanresult