import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { stylesMain } from '../../style/styleWindowWidth/393'
import { moderateScale } from 'react-native-size-matters'
import { API_URL } from '../../apiconfig'
import axios from 'axios'
import { moveEmitHelpers } from 'typescript'
import AuthContext from '../component/authcontext'

const RecommendAcne = ({ route, navigation }) => {

  const { userEmail } = useContext(AuthContext);
  const { message } = route.params;
  const { submessage } = route.params;
  const URL = API_URL;
  const [results, setResults] = useState([]);
  const [skintype, onChangeSkintype] = React.useState('');
  const [isFlatListVisible, setIsFlatListVisible] = useState(false);
  const [isFlatListVisible2, setIsFlatListVisible2] = useState(false);
  const [isFlatListVisible3, setIsFlatListVisible3] = useState(false);
  const [isFlatListVisible4, setIsFlatListVisible4] = useState(false);
  const [isFlatListVisible5, setIsFlatListVisible5] = useState(false);

  const getSkintype = async () => {
    try {
      const response = await axios.post(URL + '/get_skintype', {
        email: userEmail,
      });
      //console.log('Response:', response.data);
      if (response.data) {
        //console.log(response.data);
        onChangeSkintype(response.data.skintype)
        console.log(skintype);
      } else {
        console.error('No account detail found');
        // Handle the case where response doesn't contain account detail
      }
    } catch (error) {
      console.error('Error fetching skintype:', error);
      // Handle error gracefully, e.g., display an error message to the user
    }
  };

  let source = null;

  if (message.includes("Acne")) {
    source = require('../assets/images/AcneSevere.png');
  } else if (message.includes("Hyperpigment")) {
    source = require('../assets/images/foundhyper.png');
  }

  const toggleFlatListVisibility = () => {
    setIsFlatListVisible(!isFlatListVisible);
  };
  const toggleFlatListVisibility2 = () => {
    setIsFlatListVisible2(!isFlatListVisible2);
  };
  const toggleFlatListVisibility3 = () => {
    setIsFlatListVisible3(!isFlatListVisible3);
  };
  const toggleFlatListVisibility4 = () => {
    setIsFlatListVisible4(!isFlatListVisible4);
  };
  const toggleFlatListVisibility5 = () => {
    setIsFlatListVisible5(!isFlatListVisible5);
  };

  const getRecommendProduct = async () => {
    try {
      const response = await axios.post(URL + '/get_recommend_product', {
        message: message,
      });
      // console.log('Response:', response.data);
      const sortedResults = response.data.results
      setResults(sortedResults);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  useEffect(() => {
    getSkintype();
    getRecommendProduct();
  }, []);

  const handleReturnMenuPress = () => {
    navigation.navigate('Menu');
  };

  const handleHistoryPress = () => {
    navigation.navigate('History');
  };

  const renderItem = ({ item }) => (
    <View style={{}}>
      <View style={[stylesMain.align_justify_center, stylesMain.padding_ver_10]}>
        <View style={[stylesMain.flex_direction_row, stylesMain.align_justify_center]}>
          <View style={[stylesMain.flex_direction_column, { width: moderateScale(200) }]}>
            <Text style={stylesMain.text_product_name}>{item.product_name}</Text>
            <Text style={stylesMain.text_product}>{item.product_info}</Text>
          </View>
          <View style={[stylesMain.round_border_container]}>
            <Image
              source={{ uri: `data:image/jpeg;base64,${item.product_img}` }}
              style={[
                {
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                }]}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (

    <View style={stylesMain.container_white}>
      <View style={[stylesMain.justify_center]}>
        <Image source={require('../assets/images/appname.png')} style={[stylesMain.margin_top_36, stylesMain.align_items_self_center, { width: moderateScale(180), height: moderateScale(50) }]} resizeMode="contain" />
      </View>
      <FlatList
        data={[{ key: 'content' }]} // Use FlatList with a single item
        renderItem={() => (
          <>
            <View style={[stylesMain.form_consubresult, stylesMain.align_center_justify_start]}>
              <View style={[stylesMain.flex_direction_row]}>
                <Image source={source} style={[{ width: moderateScale(80), height: moderateScale(80) }]} resizeMode='contain' />
                <View style={[stylesMain.flex_direction_column, stylesMain.padding_left_10, stylesMain.align_center_justify_start]}>
                  <Text style={stylesMain.text_result_Level2}>{message}</Text>
                  <Text style={stylesMain.padding_bot_8}>{submessage}</Text>
                </View>
              </View>

            </View>

            <View style={[stylesMain.padding_top_24]}>
              <Text style={[stylesMain.text_result_Level, stylesMain.text_left, stylesMain.padding_left_24]}>{"Recommendations for you"}</Text>
              {message !== 'Severe Acne' && message !== 'Very Severe Acne' && message !== 'High Hyperpigment' && (
                <Text style={[stylesMain.text_caution_product, stylesMain.text_left, stylesMain.padding_left_24]}>
                  {"*Please review the product information carefully before use."}
                </Text>
              )}
            </View>

            {message !== 'Severe Acne' && message !== 'Very Severe Acne' && message !== 'High Hyperpigment' && (
              <>
                <View style={[stylesMain.form_containerresult2]}>
                  <TouchableOpacity style={[stylesMain.flex_direction_row]} onPress={toggleFlatListVisibility}>
                    <Text style={[stylesMain.text_product_group]}>{"Cleanser"}</Text>
                    {isFlatListVisible ? (
                      <Image source={require('../assets/images/ArrowUp.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(208) }
                      ]}
                        resizeMode='contain' />
                    ) : (
                      <Image source={require('../assets/images/ArrowDown.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(208) }
                      ]}
                        resizeMode='contain' />
                    )}
                  </TouchableOpacity>
                  {isFlatListVisible && (
                    <FlatList
                      data={results.filter(item => item.product_type === "Cleanser" && item.skintype === skintype).slice(0, 3)}
                      renderItem={renderItem}
                      keyExtractor={(item) => item._id}
                    />
                  )}
                </View>
                <View style={[stylesMain.form_containerresult2]}>
                  <TouchableOpacity style={[stylesMain.flex_direction_row]} onPress={toggleFlatListVisibility2}>
                    <Text style={[stylesMain.text_product_group]}>{"Toner"}</Text>
                    {isFlatListVisible2 ? (
                      <Image source={require('../assets/images/ArrowUp.png')} style={[
                        stylesMain.margin_left_230,
                        { width: moderateScale(18), height: moderateScale(18) }
                      ]}
                        resizeMode='contain' />
                    ) : (
                      <Image source={require('../assets/images/ArrowDown.png')} style={[
                        stylesMain.margin_left_230,
                        { width: moderateScale(18), height: moderateScale(18) }
                      ]}
                        resizeMode='contain' />
                    )}
                  </TouchableOpacity>
                  {isFlatListVisible2 && (
                    <FlatList
                      data={results.filter(item => item.product_type === "Toner" && item.skintype === skintype).slice(0, 3)}
                      renderItem={renderItem}
                      keyExtractor={(item) => item._id}
                    />
                  )}
                </View>
                <View style={[stylesMain.form_containerresult2]}>
                  <TouchableOpacity style={[stylesMain.flex_direction_row]} onPress={toggleFlatListVisibility3}>
                    <Text style={[stylesMain.text_product_group]}>{"Serum"}</Text>
                    {isFlatListVisible3 ? (
                      <Image source={require('../assets/images/ArrowUp.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(225) }
                      ]}
                        resizeMode='contain' />
                    ) : (
                      <Image source={require('../assets/images/ArrowDown.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(225) }
                      ]}
                        resizeMode='contain' />
                    )}
                  </TouchableOpacity>
                  {isFlatListVisible3 && (
                    <FlatList
                      data={results.filter(item => item.product_type === "Serum" && item.skintype === skintype).slice(0, 3)}
                      renderItem={renderItem}
                      keyExtractor={(item) => item._id}
                    />
                  )}
                </View>
                <View style={[stylesMain.form_containerresult2]}>
                  <TouchableOpacity style={[stylesMain.flex_direction_row]} onPress={toggleFlatListVisibility5}>
                    <Text style={[stylesMain.text_product_group]}>{"Moisturizer"}</Text>
                    {isFlatListVisible5 ? (
                      <Image source={require('../assets/images/ArrowUp.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(190) }
                      ]}
                        resizeMode='contain' />
                    ) : (
                      <Image source={require('../assets/images/ArrowDown.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(190) }
                      ]}
                        resizeMode='contain' />
                    )}
                  </TouchableOpacity>
                  {isFlatListVisible5 && (
                    <FlatList
                      data={results.filter(item => item.product_type === "Moisturizer" && item.skintype === skintype).slice(0, 3)}
                      renderItem={renderItem}
                      keyExtractor={(item) => item._id}
                    />
                  )}
                </View>
                <View style={[stylesMain.form_containerresult2, stylesMain.margin_bot_16]}>
                  <TouchableOpacity style={[stylesMain.flex_direction_row]} onPress={toggleFlatListVisibility4}>
                    <Text style={[stylesMain.text_product_group]}>{"Sunscreen"}</Text>
                    {isFlatListVisible4 ? (
                      <Image source={require('../assets/images/ArrowUp.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(195) }
                      ]}
                        resizeMode='contain' />
                    ) : (
                      <Image source={require('../assets/images/ArrowDown.png')} style={[
                        { width: moderateScale(18), height: moderateScale(18), marginLeft: moderateScale(195) }
                      ]}
                        resizeMode='contain' />
                    )}
                  </TouchableOpacity>
                  {isFlatListVisible4 && (
                    <FlatList
                      data={results.filter(item => item.product_type === "Sunscreen" && item.skintype === skintype).slice(0, 3)}
                      renderItem={renderItem}
                      keyExtractor={(item) => item._id}
                    />
                  )}
                </View>
              </>
            )}
            {(message === 'Severe Acne' || message === 'Very Severe Acne' || message === 'High Hyperpigment') && (
              <View style={[stylesMain.form_containerresult2, stylesMain.margin_bot_16, stylesMain.align_justify_center]}>
                <Image source={require('../assets/images/doctor.png')} style={[
                  { width: moderateScale(180), height: moderateScale(180) }
                ]}
                  resizeMode='contain'
                />
                <Text style={[stylesMain.text_severe, stylesMain.text_center]}>
                  {"Your facial condition is " + message}
                </Text>
                <Text style={[stylesMain.text_severe2, stylesMain.text_center]}>
                  {"Please consult with a dermatologist \nfor personalized recommendations."}
                </Text>
              </View>
            )}
          </>
        )}
      />
      <View style={[stylesMain.padding_bot_32, stylesMain.padding_top_16, stylesMain.align_items_center]}>
        <TouchableOpacity
          style={[stylesMain.menu_recommend_acne2]}
          onPress={handleReturnMenuPress}
        >
          <View>
            <Text style={stylesMain.text_menu_result_acne2}>
              Return to Menu
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: moderateScale(10) }}></View>
        <TouchableOpacity
          style={[stylesMain.menu_recommend_acne]}
          onPress={handleHistoryPress}
        >
          <View>
            <Text style={stylesMain.text_menu_result_acne}>
              See your history
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RecommendAcne