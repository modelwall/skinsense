import { StyleSheet } from "react-native";
import { Colors } from "./color";
import { FontIBM } from "./fontfamily";
import { FontSize } from "./fontsize";
import { moderateScale } from "react-native-size-matters";

export const stylesTextCommon = StyleSheet.create({
    lineHeight_16:{
		lineHeight:moderateScale(16),
	},
	lineHeight_20:{
		lineHeight:moderateScale(20),
	},
	lineHeight_21:{
		lineHeight:moderateScale(21),
	},
	lineHeight_24:{
		lineHeight:moderateScale(24),
	},
	lineHeight_28:{
		lineHeight:moderateScale(28),
	},
	letter_spacing_0:{
		letterSpacing: moderateScale(0),
	},
	text_firstpage: {
		
		fontSize: FontSize.font20,
		lineHeight: moderateScale(20),
		paddingBottom : moderateScale(8)
	},
	text_firstpage_button: {
		color: Colors.white,
		fontSize: FontSize.font16,
		lineHeight: moderateScale(16),
	},
	text_cancel_button: {
		color: Colors.dark_brown,
		fontSize: FontSize.font16,
		lineHeight: moderateScale(16),
	},
	text_register_header: {
		color: Colors.black_02,
		fontSize: FontSize.font20,
		fontWeight: "bold",
	},
	text_result_header: {
		color: Colors.dark_brown,
		fontSize: FontSize.font24,
		fontWeight: "bold",
	},
	text_result_Level: {
		color: Colors.dark_brown,
		fontSize: FontSize.font20,
		fontWeight: "bold",
	},
	text_caution_product: {
		color: "red",
		fontSize: FontSize.font10,
		fontWeight: "normal",
	},
	text_result_Level2: {
		color: Colors.black_02,
		fontSize: FontSize.font14,
		fontWeight: "bold",
	},
	text_product_group: {
		color: Colors.black_02,
		fontSize: FontSize.font16,
		fontWeight: "bold",
	},
	text_product_group2: {
		color: 'grey',
		fontSize: FontSize.font14,
		//fontWeight: "bold",
	},
	text_severe: {
		color: 'red',
		fontSize: FontSize.font16,
		fontWeight: '400',
	},
	text_severe2: {
		color: Colors.black_02,
		fontSize: FontSize.font16,
		fontWeight: '400',
	},
	text_product_name: {
		color: Colors.black_02,
		fontSize: FontSize.font12,
		fontWeight: "bold",
	},
	text_product: {
		color: Colors.black_02,
		fontSize: FontSize.font12,
	},
	text_menu_result_acne: {
		color: Colors.dark_brown,
		fontSize: FontSize.font14,
		lineHeight: moderateScale(16),
		textAlign: 'center',
	},
	text_menu_result_acne2: {
		color: Colors.black_02,
		fontSize: FontSize.font14,
		lineHeight: moderateScale(16),
		textAlign: 'center',
	},
	text_clickable: {
		//fontFamily: FontIBM.IBMmedium,
		color: Colors.blue,
	},
	text_history_list: {
		//fontFamily: FontIBM.IBMmedium,
		color: Colors.white,
		fontWeight:'500'
	},
	text_menu_button: {
		color: Colors.white,
		fontSize: FontSize.font18,
		lineHeight: moderateScale(18),
		textAlign: 'left',
	},
	text_logout_button: {
		color: Colors.dark_brown,
		fontSize: FontSize.font18,
		lineHeight: moderateScale(18),
		textAlign: 'left',
	},
	modalTextheader: {
		marginBottom: moderateScale(30),
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white',
	},
	modalText: {
		fontSize: 16,
		fontWeight: 'normal',
		textAlign: 'center',
		color: 'white',
	},
	modalButtTextStyle: {
		color: '#685454',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});