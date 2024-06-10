import { StyleSheet, Dimensions, DimensionValue } from "react-native";
import { WidthPercent } from "./width";
import { Colors } from "./color";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { moderateScale, verticalScale } from "react-native-size-matters";
export const stylesScale = StyleSheet.create({
	width_20: {
		width: moderateScale(20),
	},
	width_30: {
		width: moderateScale(30),
	},
	width_41_5: {
		width: moderateScale(41.5),
	},
	width_75: {
		width: moderateScale(75),
	},
	width_10_percent: {
		width: WidthPercent.width10 as DimensionValue,
	},
	width_14_percent: {
		width: WidthPercent.width14 as DimensionValue,
	},
	width_18_percent: {
		width: WidthPercent.width18 as DimensionValue,
	},
	width_20_percent: {
		width: WidthPercent.width20 as DimensionValue,
	},
	width_30_percent: {
		width: WidthPercent.width30 as DimensionValue,
	},
	width_33_percent: {
		width: WidthPercent.width33 as DimensionValue,
	},
	width_34_percent: {
		width: WidthPercent.width34 as DimensionValue,
	},
	width_35_percent: {
		width: WidthPercent.width35 as DimensionValue,
	},
	width_40_percent: {
		width: WidthPercent.width40 as DimensionValue,
	},
	width_45_percent: {
		width: WidthPercent.width45 as DimensionValue,
	},
	width_48_percent: {
		width: WidthPercent.width48 as DimensionValue,
	},
	width_49_percent: {
		width: WidthPercent.width49 as DimensionValue,
	},
	width_50_percent: {
		width: WidthPercent.width50 as DimensionValue,
	},
	width_60_percent: {
		width: WidthPercent.width60 as DimensionValue,
	},
	width_66_percent: {
		width: WidthPercent.width66 as DimensionValue, 
	},
	width_70_percent: {
		width: WidthPercent.width70 as DimensionValue,
	},
	width_75_percent: {
		width: WidthPercent.width75 as DimensionValue,
	},
	width_80_percent: {
		width: WidthPercent.width80 as DimensionValue,
	},
	width_90_percent: {
		width: WidthPercent.width90 as DimensionValue,
	},
	width_95_percent: {
		width: WidthPercent.width95 as DimensionValue,
	},
	width_100_percent: {
		width: WidthPercent.width100 as DimensionValue,
	},
	height_40: {
		height: moderateScale(40),
	},
	height_45: {
		height: moderateScale(45),
	},
	height_50: {
		height: moderateScale(50),
	},
	height_60: {
		height: moderateScale(60),
	},
	height_64: {
		height: moderateScale(64),
	},
	height_100: {
		height: moderateScale(100),
	},
	height_100_percent:{
		height: "100%",
	},
	height_10_percent:{
		height: "10%",
	},
	height_30_percent:{
		height: "30%",
	},
	device_height: {
		height: Dimensions.get("window").height,
	},	
	device_minheight: {
		minHeight: Dimensions.get("window").height,
	},	
	device_maxheight: {
		maxHeight: Dimensions.get("window").height,
	},	
	space_height_16: {
		height: verticalScale(16),
	},
	space_height_40: {
		height: verticalScale(40),
		backgroundColor: Colors.white,
	},
	line_height_16: {
		lineHeight: moderateScale(16),
	},
	line_height_16_5: {
		lineHeight: moderateScale(16.5),
	},
	line_height_21: {
		lineHeight: moderateScale(21),
	},
	line_height_28: {
		lineHeight: moderateScale(28),
	},
	padding_1: {
		padding: moderateScale(1),
	},
	padding_2: {
		padding: moderateScale(2),
	},
	padding_5: {
		padding: moderateScale(5),
	},
	padding_8: {
		padding: moderateScale(8),
	},
	padding_10: {
		padding: moderateScale(10)
	},
	padding_12: {
		padding: moderateScale(12)
	},
	padding_16: {
		padding: moderateScale(16),
	},
	padding_24: {
		padding: moderateScale(24),
	},
	padding_32: {
		padding: moderateScale(32),
	},
	padding_40: {
		padding: moderateScale(40),
	},
	padding_ver_1: {
		paddingVertical: moderateScale(1),
	},
	padding_ver_2: {
		paddingVertical: moderateScale(2),
	},
	padding_ver_5: {
		paddingVertical: moderateScale(5),
	},
	padding_ver_8: {
		paddingVertical: moderateScale(8),
	},
	padding_ver_10: {
		paddingVertical: moderateScale(10),
	},
	padding_ver_12: {
		paddingVertical: moderateScale(12),
	},
	padding_ver_12_5: {
		paddingVertical: moderateScale(12.5),
	},
	padding_ver_16: {
		paddingVertical: moderateScale(16),
	},
	padding_ver_18: {
		paddingVertical: moderateScale(18),
	},
	padding_ver_24: {
		paddingVertical: moderateScale(24),
	},
	padding_top_4: {
		paddingTop: moderateScale(4),
	},
	padding_top_8: {
		paddingTop: moderateScale(8),
	},
	padding_top_16: {
		paddingTop: moderateScale(16),
	},
	padding_top_24: {
		paddingTop: moderateScale(24),
	},
	padding_top_32: {
		paddingTop: moderateScale(32),
	},
	padding_bot_10_percent: {
		paddingBottom:"10%"
	},
	padding_bot_0: {
		paddingBottom: moderateScale(0),
	},
	padding_bot_4: {
		paddingBottom: moderateScale(4),
	},
	padding_bot_5: {
		paddingBottom: moderateScale(5),
	},
	padding_bot_8: {
		paddingBottom: moderateScale(8),
	},
	padding_bot_12: {
		paddingBottom: moderateScale(12),
	},
	padding_bot_16: {
		paddingBottom: moderateScale(16),
	},
	padding_bot_18: {
		paddingBottom: moderateScale(18),
	},
	padding_bot_23: {
		paddingBottom: moderateScale(23),
	},
	padding_bot_24: {
		paddingBottom: moderateScale(24),
	},
	padding_bot_25: {
		paddingBottom: moderateScale(25),
	},
	padding_bot_28: {
		paddingBottom: moderateScale(28),
	},
	padding_bot_32: {
		paddingBottom: moderateScale(32),
	},
	padding_bot_35: {
		paddingBottom: moderateScale(35),
	},
	padding_bot_48: {
		paddingBottom: moderateScale(48),
	},
	padding_bot_49: {
		paddingBottom: moderateScale(49),
	},
	padding_hori_0: {
		paddingHorizontal: 0,
	},
	padding_hori_3: {
		paddingHorizontal: moderateScale(3),
	},
	padding_hori_4: {
		paddingHorizontal: moderateScale(4),
	},
	padding_hori_8: {
		paddingHorizontal: moderateScale(8),
	},
	padding_hori_9_5: {
		paddingHorizontal: moderateScale(9.5),
	},
	padding_hori_10: {
		paddingHorizontal: moderateScale(10),
	},
	padding_hori_12: {
		paddingHorizontal: moderateScale(12),
	},
	padding_hori_16: {
		paddingHorizontal: moderateScale(16),
	},
	padding_hori_17: {
		paddingHorizontal: moderateScale(17),
	},
	padding_hori_17_5: {
		paddingHorizontal: moderateScale(17.5),
	},
	padding_hori_22_5: {
		paddingHorizontal: moderateScale(22.5),
	},  
	padding_hori_24: {
		paddingHorizontal: moderateScale(24),
	},  
	padding_hori_27: {
		paddingHorizontal: moderateScale(27),
	},  
	padding_hori_32: {
		paddingHorizontal: moderateScale(32),
	},  
	padding_left_4: {
		paddingLeft: moderateScale(4),
	},
	padding_left_10: {
		paddingLeft: moderateScale(10),
	},
	padding_left_16: {
		paddingLeft: moderateScale(16),
	},
	padding_left_22_5: {
		paddingLeft: moderateScale(22.5),
	},
	padding_left_24: {
		paddingLeft: moderateScale(24),
	},
	padding_left_32: {
		paddingLeft: moderateScale(32),
	},
	padding_left_48: {
		paddingLeft: moderateScale(48),
	},
	padding_right_4: {
		paddingRight: moderateScale(4),
	},
	padding_right_8: {
		paddingRight: moderateScale(8),
	},
	padding_right_10: {
		paddingRight: moderateScale(10),
	},
	padding_right_14: {
		paddingRight: moderateScale(14),
	},
	padding_right_16: {
		paddingRight: moderateScale(16),
	},
	padding_right_22_5: {
		paddingRight: moderateScale(22.5),
	},
	padding_right_24: {
		paddingRight: moderateScale(24),
	},
	padding_right_25_5: {
		paddingRight: moderateScale(25.5),
	},
	padding_hor_12_ver_9: {
		paddingVertical: moderateScale(9), 
		paddingHorizontal: moderateScale(12)
	},
	padding_hori_top_16: {
		paddingTop: moderateScale(16),
		paddingHorizontal: moderateScale(16),
	},
	padding_hori_bot_16: {
		paddingBottom: moderateScale(16),
		paddingHorizontal: moderateScale(16),

	},
	padding_hor_16_ver_10: {
		paddingVertical: moderateScale(10), 
		paddingHorizontal: moderateScale(16)
	},
	padding_hor_16_top_8: {
		paddingHorizontal: moderateScale(16), 
		paddingTop: moderateScale(8)
	},
	padding_hor_28_top_8: {
		paddingHorizontal: moderateScale(28), 
		paddingTop: moderateScale(8)
	},
	padding_hor_28_top_16: {
		paddingHorizontal: moderateScale(28), 
		paddingTop: moderateScale(16)
	},
	padding_bot_50_percent: {
		paddingBottom: heightPercentageToDP("50%"),
	},
	margin_0: {
		margin: 0,
	},
	margin_10: {
		margin: moderateScale(10)
	},
	margin_16:{
		margin: moderateScale(16),
	},
	margin_24:{
		margin: moderateScale(24),
	},
	margin_32:{
		margin: moderateScale(24),
	},
	margin_ver_0: {
		marginVertical: 0
	},
	margin_ver_4: {
		marginVertical: moderateScale(4),
	},
	margin_ver_6: {
		marginVertical: moderateScale(6),
	},
	margin_ver_6_5: {
		marginVertical: moderateScale(6.5),
	},
	margin_ver_8: {
		marginVertical: moderateScale(8),
	},
	margin_ver_9: {
		marginVertical: moderateScale(9),
	},
	margin_ver_10: {
		marginVertical: moderateScale(10),
	},
	margin_ver_10_5: {
		marginVertical: moderateScale(10.5),
	},
	margin_ver_11: {
		marginVertical: moderateScale(11),
	},
	margin_ver_12: {
		marginVertical: moderateScale(12),
	},
	margin_ver_12_5: {
		marginVertical: moderateScale(12.5),
	},
	margin_ver_16: {
		marginVertical: moderateScale(16),
	},
	margin_ver_18: {
		marginVertical: moderateScale(18),
	},
	margin_ver_20: {
		marginVertical: moderateScale(20),
	},
	margin_ver_24: {
		marginVertical: moderateScale(24),
	},
	margin_ver_25: {
		marginVertical: moderateScale(25),
	},
	margin_ver_38: {
		marginVertical: moderateScale(38),
	},
	margin_top_0: {
		marginTop: 0,
	},
	margin_top_3: {
		marginTop: moderateScale(3),
	},
	margin_top_4: {
		marginTop: moderateScale(4),
	},
	margin_top_5: {
		marginTop: moderateScale(5),
	},
	margin_top_6: {
		marginTop: moderateScale(6),
	},
	margin_top_7: {
		marginTop: moderateScale(7),
	},
	margin_top_8: {
		marginTop: moderateScale(8),
	},
	margin_top_9: {
		marginTop: moderateScale(9), 
	},
	margin_top_10: {
		marginTop: moderateScale(10), 
	},
	margin_top_11: {
		marginTop: moderateScale(11),
	},
	margin_top_11_5: {
		marginTop: moderateScale(11.5),
	},
	margin_top_12: {
		marginTop: moderateScale(12),
	},
	margin_top_12_5: {
		marginTop: moderateScale(12.5),
	},
	margin_top_14: {
		marginTop: moderateScale(14),
	},
	margin_top_14_5: {
		marginTop: moderateScale(14.5),
	},
	margin_top_15: {
		marginTop: moderateScale(15),
	},
	margin_top_16: {
		marginTop: moderateScale(16),
	},
	margin_top_17: {
		marginTop: moderateScale(17),
	},
	margin_top_18: {
		marginTop: moderateScale(18),
	},
	margin_top_20: {
		marginTop: moderateScale(20),
	},
	margin_top_21: {
		marginTop: moderateScale(21),
	},
	margin_top_22: {
		marginTop: moderateScale(22),
	},
	margin_top_24: {
		marginTop: moderateScale(24),
	},
	margin_top_26: {
		marginTop: moderateScale(27),
	},
	margin_top_27: {
		marginTop: moderateScale(27),
	},
	margin_top_28: {
		marginTop: moderateScale(28),
	},
	margin_top_29: {
		marginTop: moderateScale(29),
	},
	margin_top_30: {
		marginTop: moderateScale(30),
	},
	margin_top_31: {
		marginTop: moderateScale(31),
	},
	margin_top_32: {
		marginTop: moderateScale(32),
	},
	margin_top_33: {
		marginTop: moderateScale(33),
	},
	margin_top_35: {
		marginTop: moderateScale(35),
	},
	margin_top_36: {
		marginTop: moderateScale(36),
	},
	margin_top_40: {
		marginTop: moderateScale(40),
	},
	margin_top_43: {
		marginTop: moderateScale(43),
	},
	margin_top_44: {
		marginTop: moderateScale(44),
	},
	margin_top_50: {
		marginTop: moderateScale(50),
	},
	margin_top_52: {
		marginTop: moderateScale(52),
	},
	margin_top_55: {
		marginTop: moderateScale(55),
	},
	margin_top_57: {
		marginTop: moderateScale(57),
	},
	margin_top_67: {
		marginTop: moderateScale(67),
	},
	margin_top_71: {
		marginTop: moderateScale(71),
	},
	margin_top_76: {
		marginTop: moderateScale(76),
	},
	margin_top_78: {
		marginTop: moderateScale(78),
	},
	margin_top_100: {
		marginTop: moderateScale(100),
	},
	margin_top_135: {
		marginTop: moderateScale(135),
	},
	margin_top_150: {
		marginTop: moderateScale(175),
	},
	margin_top_per_10: {
		marginTop: heightPercentageToDP("20%"),
	},
	margin_top_24_right_16: {
		marginTop: moderateScale(24),
		marginRight: moderateScale(16),
	},
	margin_bot_per_3: {
		marginBottom: heightPercentageToDP("3%"),
	},
	margin_bot_per_5: {
		marginBottom: heightPercentageToDP("5%"),
	},
	margin_bot_0: {
		marginBottom: moderateScale(0),
	},
	margin_bot_2: {
		marginBottom: moderateScale(2),
	},
	margin_bot_4: {
		marginBottom: moderateScale(4),
	},
	margin_bot_5: {
		marginBottom: moderateScale(5),
	},
	margin_bot_6: {
		marginBottom: moderateScale(6),
	},
	margin_bot_8: {
		marginBottom: moderateScale(8),
	},
	margin_bot_10: {
		marginBottom: moderateScale(10),
	},
	margin_bot_12: {
		marginBottom: moderateScale(12),
	},
	margin_bot_13: {
		marginBottom: moderateScale(13),
	},
	margin_bot_13_5: {
		marginBottom: moderateScale(13.5),
	},
	margin_bot_14: {
		marginBottom: moderateScale(14),
	},
	margin_bot_15: {
		marginBottom: moderateScale(15),
	},
	margin_bot_16: {
		marginBottom: moderateScale(16),
	},
	margin_bot_17: {
		marginBottom: moderateScale(17),
	},
	margin_bot_18: {
		marginBottom: moderateScale(18),
	},
	margin_bot_18_5: {
		marginBottom: moderateScale(18.5),
	},
	margin_bot_19: {
		marginBottom: moderateScale(19),
	},
	margin_bot_20: {
		marginBottom: moderateScale(20),
	},
	margin_bot_23: {
		marginBottom: moderateScale(23),
	},
	margin_bot_24: {
		marginBottom: moderateScale(24),
	},
	margin_bot_25: {
		marginBottom: moderateScale(25),
	},
	margin_bot_26: {
		marginBottom: moderateScale(26),
	},
	margin_bot_28: {
		marginBottom: moderateScale(28),
	},
	margin_bot_29: {
		marginBottom: moderateScale(29),
	},
	margin_bot_30: {
		marginBottom: moderateScale(30),
	},
	margin_bot_32: {
		marginBottom: moderateScale(32),
	},
	margin_bot_35: {
		marginBottom: moderateScale(35),
	},
	margin_bot_37: {
		marginBottom: moderateScale(37),
	},
	margin_bot_40: {
		marginBottom: moderateScale(40),
	},
	margin_bot_48: {
		marginBottom: moderateScale(48),
	},
	margin_bot_55: {
		marginBottom: moderateScale(55),
	},
	margin_bot_65: {
		marginBottom: moderateScale(65),
	},
	margin_bot_80: {
		marginBottom: moderateScale(80),
	},
	margin_bot_90: {
		marginBottom: moderateScale(90),
	},
	margin_bot_135: {
		marginBottom: moderateScale(135),
	},
	margin_bot_144: {
		marginBottom: moderateScale(144),
	},
	margin_hori_0: {
		marginHorizontal: 0,
	},
	margin_hori_2: {
		marginHorizontal: moderateScale(2),
	},
	margin_hori_4: {
		marginHorizontal: moderateScale(4),
	},
	margin_hori_5: {
		marginHorizontal: moderateScale(5),
	},
	margin_hori_6: {
		marginHorizontal: moderateScale(6),
	},
	margin_hori_8: {
		marginHorizontal: moderateScale(8),
	},
	margin_hori_9: {
		marginHorizontal: moderateScale(9),
	},
	margin_hori_10: {
		marginHorizontal: moderateScale(10),
	},
	margin_hori_12: {
		marginHorizontal: moderateScale(12),
	},
	margin_hori_14: {
		marginHorizontal: moderateScale(14),
	},
	margin_hori_16: {
		marginHorizontal: moderateScale(16),
	},
	margin_hori_16_pad_ver_16: {
		marginHorizontal: moderateScale(16),
		paddingVertical: moderateScale(16),
	},
	margin_hori_16_5: {
		marginHorizontal: moderateScale(16.5),
	},
	margin_hori_20: {
		marginHorizontal: moderateScale(20),
	},
	margin_hori_21_5: {
		marginHorizontal: moderateScale(21.5),
	},
	margin_hori_22_5: {
		marginHorizontal: moderateScale(22.5),
	},
	margin_hori_23_5: {
		marginHorizontal: moderateScale(23.5),
	},
	margin_hori_24: {
		marginHorizontal: moderateScale(24),
	},
	margin_hori_24_5: {
		marginHorizontal: moderateScale(24.5),
	},
	margin_hori_30: {
		marginHorizontal: moderateScale(30),
	},
	margin_hori_32: {
		marginHorizontal: moderateScale(32),
	},
	margin_hori_40: {
		marginHorizontal: moderateScale(40),
	},
	margin_hori_48: {
		marginHorizontal: moderateScale(48),
	},
	margin_hori_51: {
		marginHorizontal: moderateScale(51),
	},
	margin_hori_80: {
		marginHorizontal: moderateScale(80),
	},
	margin_left_5_percent:{
		marginLeft : "5.25%"
	},
	margin_left_2: {
		marginLeft: moderateScale(2),
	},
	margin_left_4: {
		marginLeft: moderateScale(4),
	},
	margin_left_6: {
		marginLeft: moderateScale(6),
	},
	margin_left_7: {
		marginLeft: moderateScale(7),
	},
	margin_left_8: {
		marginLeft: moderateScale(8),
	},
	margin_left_9: {
		marginLeft: moderateScale(9),
	},
	margin_left_10: {
		marginLeft: moderateScale(10),
	},
	margin_left_12: {
		marginLeft: moderateScale(12),
	},
	margin_left_14: {
		marginLeft: moderateScale(14),
	},
	margin_left_16: {
		marginLeft: moderateScale(16),
	},
	margin_left_18: {
		marginLeft: moderateScale(18),
	},
	margin_left_20: {
		marginLeft: moderateScale(20),
	},
	margin_left_24: {
		marginLeft: moderateScale(24),
	},
	margin_left_25_5: {
		marginLeft: moderateScale(25.5),
	},
	margin_left_26: {
		marginLeft: moderateScale(26),
	},
	margin_left_36: {
		marginLeft: moderateScale(30),
	},
	margin_left_43: {
		marginLeft: moderateScale(43),
	},
	margin_left_50: {
		marginLeft: moderateScale(70),
	},
	margin_left_100: {
		marginLeft: moderateScale(100),
	},
	margin_left_150: {
		marginLeft: moderateScale(150),
	},
	margin_left_200: {
		marginLeft: moderateScale(200),
	},
	margin_left_210: {
		marginLeft: moderateScale(210),
	},
	margin_left_220: {
		marginLeft: moderateScale(220),
	},
	margin_left_230: {
		marginLeft: moderateScale(230),
	},
	margin_left_minus_50: {
		marginLeft: moderateScale(-110),
	},
	margin_left_minus_10: {
		marginLeft: moderateScale(-10),
	},
	margin_right_2: {
		marginRight: moderateScale(2),
	},
	margin_right_4: {
		marginRight: moderateScale(4),
	},
	margin_right_6: {
		marginRight: moderateScale(6),
	},
	margin_right_7: {
		marginRight: moderateScale(7),
	},
	margin_right_8: {
		marginRight: moderateScale(8),
	},
	margin_right_9: {
		marginRight: moderateScale(9),
	},
	margin_right_10: {
		marginRight: moderateScale(10),
	},
	margin_right_12: {
		marginRight: moderateScale(12),
	},
	margin_right_13_5: {
		marginRight: moderateScale(13.5),
	},
	margin_right_14: {
		marginRight: moderateScale(14),
	},
	margin_right_16: {
		marginRight: moderateScale(16),
	},
	margin_rigth_16_5: {
		marginRight: moderateScale(16.5),
	},
	margin_right_22_5: {
		marginRight: moderateScale(22.5),
	},
	margin_right_24: {
		marginRight: moderateScale(24),
	},
	margin_right_27: {
		marginRight: moderateScale(27),
	},
	margin_right_29: {
		marginRight: moderateScale(29),
	},
	margin_right_32: {
		marginRight: moderateScale(32),
	},
	margin_right_42: {
		marginRight: moderateScale(42),
	},
	margin_right_45_5: {
		marginRight: moderateScale(45.5),
	},
	margin_right_44: {
		marginRight: moderateScale(44),
	},
	margin_right_48: {
		marginRight: moderateScale(48),
	},
	margin_right_51: {
		marginRight: moderateScale(51),
	},
	margin_right_59: {
		marginRight: moderateScale(59),
	},
	margin_right_66: {
		marginRight: moderateScale(66),
	},
	margin_top_5_percent: {
		marginTop: "5%",
	},
	margin_top_minus_25_percent: {
		marginTop: "-25%",
	},
	margin_top_minus_30_percent: {
		marginTop: "-30%",
	},
	margin_top_minus_30: {
		marginTop: moderateScale(-30),
	},
	margin_top_minus_42: {
		marginTop: moderateScale(-42),
	},
	margin_top_minus_46: {
		marginTop: moderateScale(-46),
	},
	margin_top_minus_50: {
		marginTop: moderateScale(-50),
	},
	margin_top_minus_55: {
		marginTop: moderateScale(-55),
	},
	margin_top_minus_70: {
		marginTop: moderateScale(-70),
	},
	margin_top_minus_80: {
		marginTop: moderateScale(-80),
	},
	margin_top_minus_3_percent: {
		marginTop: heightPercentageToDP("-3%"),
	},
	margin_bot_15_percent: {
		marginBottom: heightPercentageToDP("15%"),
	},
	margin_bot_91_percent: {
		marginBottom: heightPercentageToDP("42%"),
	},
	margin_bot_minus_15: {
		marginBottom: moderateScale(-15),
	},
	margin_bot_minus_40: {
		marginBottom: moderateScale(-40),
	},
	margin_0_percent:{
		margin: heightPercentageToDP("0%")
	},
	border_radius_0: {
		borderRadius: 0
	},
	border_radius_4: {
		borderRadius: moderateScale(4)
	},
	border_radius_5: {
		borderRadius: moderateScale(5)
	},
	border_radius_10: {
		borderRadius: moderateScale(10)
	},
	border_radius_15: {
		borderRadius: moderateScale(15)
	},
	border_radius_38: {
		borderRadius: moderateScale(38)
	},
	border_top_left_radius_10: {
		borderTopLeftRadius: moderateScale(10)
	},
	border_top_right_radius_10: {
		borderTopRightRadius: moderateScale(10)
	},
	border_top_radius_15: {
		borderTopLeftRadius: moderateScale(15),
		borderTopRightRadius: moderateScale(15)
	},
	max_height_80_percent: {
		maxHeight: "80%"
	},
	max_height_90_percent: {
		maxHeight: "90%"
	},
	max_height_100_percent: {
		maxHeight: "100%"
	},
	height_32: {
		height: moderateScale(32)
	},
	bottom_5_percent: {
		bottom: "5%"
	},
	bottom_10_percent: {
		bottom: "10%"
	},
	position_bottom_35: {
		bottom: moderateScale(35)
	},
});