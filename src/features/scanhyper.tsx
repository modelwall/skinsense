import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { stylesMain } from "../../style/styleWindowWidth/393";
  import { moderateScale } from "react-native-size-matters";
  import DoubleLayerButton from "../component/doublebutton";

  const ScanHyper = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
  
    const handleScanPress = () => {
      setModal2Visible(false)
      navigation.navigate('CheckCamera',{backpage:'ScanHyper'});
    };

    const handleImportPress = () => {
      navigation.navigate('ImportImage',{backpage:'ScanHyper'});
    };
  
    return (
      <View style={[stylesMain.container_white]}>
            <View style={stylesMain.container_point_1}></View>
            <View
              style={[
                stylesMain.container_point_9,
                stylesMain.align_items_center,
              ]}
            >
              <View style={stylesMain.flex_row_align_justify_center}>
                <Image
                  source={require("../assets/images/appname.png")}
                  style={{}}
                />
              </View>
              <Image
                source={require("../assets/images/ScanHyper.png")}
                style={[{ width: '100%', height: 800 }]}
              />
              <Text
                style={{
                  position: "absolute",
                  top: moderateScale(600),
                  left: moderateScale(90),
                  fontSize: 14,
                  color: "white",
                }}
              >
                {"Start analyzing your facial with AI"}
              </Text>
              <View
                style={{
                  position: "absolute",
                  top: moderateScale(630),
                  left: moderateScale(60),
                }}
              >
                <DoubleLayerButton
                  onPress1={handleImportPress}
                  onPress2={() => setModalVisible(true)}
                />
              </View>
            </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={stylesMain.centeredView}>
            <View style={stylesMain.modalbg}>
              <View style={stylesMain.margin_top_100}>
                <Text style={[stylesMain.modalTextheader]}>
                  {"Recommendation\nfor better result"}
                </Text>
              </View>
              <View
                style={[stylesMain.padding_left_48, stylesMain.margin_top_20]}
              >
                <View
                  style={[
                    stylesMain.flex_row_align_center,
                    stylesMain.margin_bot_15,
                  ]}
                >
                  <Image
                    source={require("../assets/images/Noglasses.png")}
                    style={{ width: moderateScale(100), height: moderateScale(80) }}
                    resizeMode="contain"
                  />
                  <Text style={[stylesMain.modalText]}>{"Take off your glasses."}</Text>
                </View>
                <View
                  style={[
                    stylesMain.flex_row_align_center,
                    stylesMain.margin_bot_15,
                  ]}
                >
                  <Image
                    source={require("../assets/images/Nomakeup.png")}
                    style={{ width: moderateScale(100), height: moderateScale(80) }}
                    resizeMode="contain"
                  />
                  <Text style={[stylesMain.modalText]}>
                    {"Clean off your make up."}
                  </Text>
                </View>
                <View style={[stylesMain.flex_row_align_center]}>
                  <Image
                    source={require("../assets/images/light.png")}
                    style={{ width: moderateScale(100), height: moderateScale(80) }}
                    resizeMode="contain"
                  />
                  <Text style={[stylesMain.modalText]}>
                    {"Stay in the bright place."}
                  </Text>
                </View>
              </View>
              <View
                style={[stylesMain.margin_top_150, stylesMain.align_items_center]}
              >
                <TouchableOpacity
                  style={[stylesMain.modalbutton]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setModal2Visible(!modal2Visible);
                  }}
                >
                  <Text style={stylesMain.modalButtTextStyle}>{"Next"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
  
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={stylesMain.centeredView}>
            <View style={stylesMain.modalbg}>
              <View style={stylesMain.margin_top_100}>
                <Text style={[stylesMain.modalTextheader]}>
                  {"Recommendation about \nimage style for better result"}
                </Text>
              </View>
              <View
                style={[stylesMain.align_items_center, stylesMain.margin_top_30]}
              >
                <Image
                  source={require("../assets/images/RightFace.png")}
                  style={{ width: moderateScale(150), height: moderateScale(150) }}
                  resizeMode="contain"
                />
                <Text style={[stylesMain.modalText]}>{"Right-side face"}</Text>
                <View style={stylesMain.margin_bot_30} />
                <Image
                  source={require("../assets/images/LeftFace.png")}
                  style={{ width: moderateScale(150), height: moderateScale(150) }}
                  resizeMode="contain"
                />
                <Text style={[stylesMain.modalText]}>{"Left-side face"}</Text>
              </View>
              <View
                style={[stylesMain.margin_top_78, stylesMain.align_items_center]}
              >
                <TouchableOpacity
                  style={[stylesMain.modalbutton]}
                  onPress={handleScanPress}
                >
                  <Text style={stylesMain.modalButtTextStyle}>
                    {"Start to scan"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default ScanHyper;