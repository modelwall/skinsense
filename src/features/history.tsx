import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AuthContext from '../component/authcontext';
import { API_URL } from '../../apiconfig';
import { stylesMain } from '../../style/styleWindowWidth/393';
import { moderateScale } from 'react-native-size-matters';

const History = ({ navigation }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageUri, setSelectedImageUri] = useState('');

    const { userEmail } = useContext(AuthContext);
    const URL = API_URL;

    const handleImagePress = (imageUri) => {
        setSelectedImageUri(imageUri);
        setModalVisible(true);
    };

    const handleBackPress = () => {
        navigation.navigate('Menu');
    };

    const getEmailResults = async () => {
        try {
            const response = await axios.post(URL + '/get_results_by_email', {
                email: userEmail,
            });
            const sortedResults = response.data.results.sort((a, b) => {
                const dateA = new Date(a.timestamp.$date);
                const dateB = new Date(b.timestamp.$date);
                if (dateA > dateB) return -1;
                if (dateA < dateB) return 1;
                const timeA = dateA.getHours() * 60 + dateA.getMinutes();
                const timeB = dateB.getHours() * 60 + dateB.getMinutes();
                return timeB - timeA;
            });
            setResults(sortedResults);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching results:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getEmailResults();
    }, []);

    const formatDatestamp = (timestamp) => {
        const date = new Date(timestamp.$date);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp.$date);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}.${minutes}`;
    };

    const getMessageFromPredicted = (predicted) => {
        let message = '';
        switch (predicted) {
            case 0:
                message = "No Acne";
                break;
            case 1:
                message = "Mild Acne";
                break;
            case 2:
                message = "Moderate Acne";
                break;
            case 3:
                message = "Severe Acne";
                break;
            case 4:
                message = "Very Severe Acne";
                break;
            case 7:
                message = "Minimal Hyperpigment";
                break;
            case 8:
                message = "Noticeable Hyperpigment";
                break;
            case 9:
                message = "High Hyperpigment";
                break;
            default:
                message = "Unknown";
        }
        return message;
    };

    const renderItem = ({ item }) => (
        <View style={[stylesMain.history_banner]}>
            <View style={[stylesMain.align_justify_center, stylesMain.padding_ver_10]}>
                <View style={[stylesMain.flex_direction_row, stylesMain.align_justify_center]}>
                    <View style={[stylesMain.flex_direction_column, { width: moderateScale(220) }]}>
                        <Text style={stylesMain.text_history_list}>Date: {formatDatestamp(item.timestamp)}</Text>
                        <Text style={stylesMain.text_history_list}>Time: {formatTimestamp(item.timestamp)}</Text>
                        <Text style={stylesMain.text_history_list}>Scan Result: {getMessageFromPredicted(item.predicted)}</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleImagePress(`data:image/jpeg;base64,${item.input_image.$binary.base64}`)}>
                        <View style={[stylesMain.round_border_container]}>
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${item.input_image.$binary.base64}` }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={[stylesMain.container, stylesMain.padding_12]}>
            <View style={[stylesMain.container_point_1, stylesMain.justify_center]}>
                <Image source={require('../assets/images/appname.png')} style={stylesMain.align_items_self_center} resizeMode="contain" />
            </View>
            <View style={[stylesMain.container_point_8_5]}>
                <TouchableOpacity style={[stylesMain.flex_row_align_center, stylesMain.margin_bot_12]}
                    onPress={handleBackPress}
                >
                    <Image source={require('../assets/images/icons/ArrowBack.png')} style={{ width: moderateScale(15), height: moderateScale(15) }} />
                    <Text style={stylesMain.text_register_header}>{' Scan History'}</Text>
                </TouchableOpacity>
                <View style={[stylesMain.align_items_center]}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#685454" />
                    ) : (
                        <FlatList
                            data={results.slice(0, 10)}
                            renderItem={renderItem}
                            keyExtractor={(item) => item._id}
                        />
                    )}
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
                <View style={styles.modalContainer}>
                    <Image
                        source={{ uri: selectedImageUri }}
                        style={styles.modalImage}
                    />
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{ fontSize: 16, color: 'white' }}>close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalInnerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalImage: {
        width: moderateScale(340),
        height: moderateScale(500),
        resizeMode: 'contain',
    },
});

export default History;
