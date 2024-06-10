import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { stylesMain } from '../../style/styleWindowWidth/393';
import { moderateScale } from 'react-native-size-matters';

const ImportImage = ({ route, navigation }) => {
    const { backpage } = route.params;
    const [image, setImage] = useState(null);
    const [capturedImage, setCapturedImage] = useState<any>(null);

    const handleBackPress = () => {
        navigation.navigate(backpage);
    };

    const handleStartScan = () => {
        if (image === null) {
            // Show alert message
            alert('Please select an image first.');
        } else {
            // Navigate to Scanresult screen with the image parameter
            if(backpage=='ScanAndImport'){
                navigation.navigate('Scanresult', { image: capturedImage });
            }
            else if(backpage=='ScanHyper'){
                navigation.navigate('ResultHyper', { image: capturedImage });
            }
            else(
                alert('Error, Somthing went wrong.')
            )
        }
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const transformImageResult = (result) => {
        const { height, uri, width } = result.assets[0];
        return { height, uri, width };
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            console.log("123");
            setImage(result.assets[0].uri);
            setCapturedImage(transformImageResult(result))
            console.log(capturedImage)
        }
    };

    return (
        <View style={[stylesMain.container, stylesMain.padding_16]}>
            <View style={[stylesMain.container_point_1, stylesMain.justify_center]}>
                <Image source={require('../assets/images/appname.png')} style={stylesMain.align_items_self_center} resizeMode="contain" />
            </View>
            <View style={[stylesMain.container_point_1]}>
                <TouchableOpacity style={[stylesMain.flex_row_align_center, stylesMain.margin_bot_12]}
                    onPress={handleBackPress}
                >
                    <Image source={require('../assets/images/icons/ArrowBack.png')} style={{ width: moderateScale(15), height: moderateScale(15) }} />
                    <Text style={stylesMain.text_register_header}>{' Import Image'}</Text>
                </TouchableOpacity>
            </View>
            <View style={[stylesMain.container_point_8, stylesMain.align_items_center]}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
                ) : (
                    <View style={[styles.imagePlaceholder, styles.image, stylesMain.align_justify_center]}>
                        <Text>{'Please select your image'}</Text>
                    </View>
                )}
                <TouchableOpacity
                    style={[stylesMain.menu_recommend_acne2, stylesMain.margin_top_40]}
                    onPress={pickImage}
                >
                    <View>
                        <Text style={stylesMain.text_menu_result_acne2}>
                            Select an image
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: moderateScale(10) }}></View>
                <TouchableOpacity
                    style={[stylesMain.menu_recommend_acne]}
                    onPress={handleStartScan}
                >
                    <View>
                        <Text style={stylesMain.text_menu_result_acne}>
                            Start Scan
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 400,
        marginBottom: 20,
    },
    imagePlaceholder: {
        backgroundColor: '#ccc', // Gray color
    },
});

export default ImportImage;
