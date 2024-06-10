import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { stylesMain } from '../../style/styleWindowWidth/393';
import { moderateScale } from 'react-native-size-matters';

const DoubleLayerButton = ({ onPress1, onPress2}) => (
  <TouchableOpacity onPress={onPress1}>
    <View style={styles.button}>
      <Image 
        source = {require("../assets/images/icons/ImportImage.png")}
        style = {stylesMain.margin_right_4}
      />
    </View>
    <TouchableOpacity onPress={onPress2} style={[styles.overlayButton, stylesMain.align_items_center, stylesMain.flex_row_space_between]}>
      <View style={stylesMain.flex_direction_column}>
        <Text style={styles.overlayText1}>Take a photo</Text>
        <Text style={styles.overlayText2}>For scan</Text>
      </View>
      <Image 
        source = {require("../assets/images/icons/PhotoCamera.png")}
        style = {[stylesMain.margin_right_4]}
      />
    </TouchableOpacity>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#685454',
    padding: 10,
    borderRadius: 10,
    width: moderateScale(250),
    height: moderateScale(55),
    alignItems:'flex-end',
    justifyContent: 'center',
    elevation: 4
  },
  overlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#F2F2F2',
    padding: 5,
    borderRadius: 10,
    width: moderateScale(200),
    height: moderateScale(55),
    justifyContent: 'center',
    elevation: 2
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  overlayText1: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 10,
    fontWeight:'bold',
    fontSize: 16,
  },
  overlayText2: {
    color: 'grey',
    textAlign: 'left',
    marginLeft: 10,
    fontWeight:'bold',
    fontSize: 14,
  },
});

export default DoubleLayerButton;
