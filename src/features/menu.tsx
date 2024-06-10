import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { stylesMain } from "../../style/styleWindowWidth/393";

const Menu = ({ navigation }) => {

  const [showOtherButtons, setShowOtherButtons] = useState(false);

  const handleTogglePress = () => {
    setShowOtherButtons(!showOtherButtons);
  };

  const handleScanAcnePress = () => {
    navigation.navigate('ScanAndImport');
  };

  const handleScanHyperPress = () => {
    navigation.navigate('ScanHyper');
  };

  const handleHistoryPress = () => {
    navigation.navigate('History');
  };

  const handleEditPress = () => {
    navigation.navigate('EditAccount');
  };


  const handleLogout = () => {
    navigation.navigate('Login');
  };
  

  return (
    <View style={[stylesMain.container_white]}>
      <View style={[stylesMain.container_point_1_5, stylesMain.align_justify_center]}>
        <Image source={require("../assets/images/appname.png")} style={{}} />
      </View>
      <View
        style={[stylesMain.container_point_5_5, stylesMain.align_items_center]}
      >
        
        <TouchableOpacity
          style={[stylesMain.menu_button, stylesMain.margin_bot_16]}
          onPress={handleTogglePress}
        >
          <View>
            <Text style={stylesMain.text_menu_button}>
              Facial Scan
            </Text>
          </View>
        </TouchableOpacity>

        {showOtherButtons && (
        <>
          <TouchableOpacity
            style={[stylesMain.Selection_button, stylesMain.margin_bot_16]}
            onPress={handleScanAcnePress}
          >
            <View>
              <Text style={stylesMain.text_menu_button}>
                Acne
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[stylesMain.Selection_button, stylesMain.margin_bot_16]}
            onPress={handleScanHyperPress}
          >
            <View>
              <Text style={stylesMain.text_menu_button}>
                Hyperpigmentation
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}

        <TouchableOpacity
          style={[stylesMain.menu_button, stylesMain.margin_bot_16]}
          onPress={handleHistoryPress}
        >
          <View>
            <Text style={stylesMain.text_menu_button}>
              Scan History
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[stylesMain.menu_button, stylesMain.margin_bot_16]}
          onPress={handleEditPress}
        >
          <View>
            <Text style={stylesMain.text_menu_button}>
              Edit Account
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[stylesMain.logout_button, stylesMain.margin_bot_16]}
          onPress={handleLogout}
        >
          <View>
            <Text style={stylesMain.text_logout_button}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[stylesMain.container_point_3,stylesMain.align_items_end]}>
          <Image source={require('../assets/images/menu.png')} style={{}} />
      </View>
    </View>
  );
};

export default Menu;
