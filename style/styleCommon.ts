import { Colors } from "./color";
import { WidthPercent } from "./width";
import { DimensionValue, Platform, StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { moderateScale } from "react-native-size-matters";

export const stylesCommon = StyleSheet.create({
	// Container: flex + color
	container: {
		flex: 1,
	},
	container_white: {
		flex: 1,
		backgroundColor: Colors.white,
		padding: 0,
	},
	container_black: {
		backgroundColor: Colors.black_01,
		padding: 0,
	},
	container_bg: {
		flex: 1,
		backgroundColor: Colors.grey_bg,
	},
	container_point_9: {
		flex: 0.9,
	},
	container_point_8_5: {
		flex: 0.85,
	},
	container_point_8: {
		flex: 0.8,
	},
	container_point_7_5: {
		flex: 0.75,
	},
	container_point_7: {
		flex: 0.7,
	},
	container_point_6_5: {
		flex: 0.65,
	},
	container_point_6: {
		flex: 0.6,
	},
	container_point_5_5: {
		flex: 0.55,
	},
	container_point_5: {
		flex: 0.5,
	},
	container_point_4: {
		flex: 0.4,
	},
	container_point_4_5: {
		flex: 0.45,
	},
	container_point_3_5: {
		flex: 0.35,
	},
	container_point_3: {
		flex: 0.3,
	},
	container_point_2_5: {
		flex: 0.25,
	},
	container_point_2: {
		flex: 0.2,
	},
	container_point_1_5: {
		flex: 0.15,
	},
	container_point_1_3: {
		flex: 0.13,
	},
	container_point_1: {
		flex: 0.1,
	},
	container_popup:{
		backgroundColor: "#FFFFFF", // White container
		margin:5,
    	borderRadius: 4,
	},
	container_header: {
		flex: 0.15,
	},
	media_container: {
		flex: 1,
		justifyContent: "flex-start",
		marginTop: 25,
	},
	container_popup_bg: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	// flex grow
	flex_grow_1: {
		flexGrow: 1
	},
	//Wrap
	flex_wrap:{
		flexWrap: "wrap"
	},
	// flex direction
	flex_direction_column: {
		flexDirection: "column" 
	},
	flex_direction_row: {
		flexDirection: "row" 
	},
	flex_row_background_white: {
		flexDirection: "row",
		backgroundColor: Colors.white,
	},
	flex_row_margin_top_6_percent: {
		flexDirection: "row",
		marginTop: heightPercentageToDP("6%")
	},
	flex_direction_row_reverse: {
		flexDirection: "row-reverse" 
	},
	// justify content
	justify_center: {
		justifyContent: "center",
	},
	justify_end: {
		justifyContent: "flex-end",
	},
	justify_space_between: {
		justifyContent: "space-between",
	},
	// align items
	align_items_stretch: {
		alignItems: "stretch"
	},
	align_items_start: {
		alignItems: "flex-start"
	},
	align_items_center: {
		alignItems: "center"
	},
	align_items_end: {
		alignItems: "flex-end",
	},
	align_items_end_width_50: {
		alignItems: "flex-end",
		width: WidthPercent.width50 as DimensionValue,
	},
	align_items_end_width_60: {
		alignItems: "flex-end",
		width: WidthPercent.width60 as DimensionValue,
	},
	// align self
	align_self_stretch: {
		alignSelf: "stretch",
	},
	align_self_start: {
		alignSelf: "flex-start",
	},
	align_self_center: {
		alignSelf: "center",
	},
	align_self_end: {
		alignSelf: "flex-end",
	},
	align_self_center_margin_top_25_per: {
		alignSelf: "center",
		marginTop: heightPercentageToDP("25%"),
	},
	align_self_center_margin_top: {
		alignSelf: "center",
		paddingHorizontal:moderateScale(24)
	},
	align_self_center_margin_top_10: {
		alignSelf: "center",
		marginTop: moderateScale(10),
		paddingHorizontal:moderateScale(24)
	},
	align_self_center_margin_top_8: {
		alignSelf: "center",
		marginTop: moderateScale(8),
		paddingHorizontal:moderateScale(24)
	},
	align_self_center_margin_top_20: {
		alignSelf: "center",
		marginTop: moderateScale(20),
	},
	align_self_center_margin_top_105: {
		alignSelf: "center",
		marginTop: moderateScale(105),
	},
	align_flex_grow_shrink_basis_500: {
		alignSelf: "center",
		flexGrow: 0,
		flexShrink: 1,
		flexBasis: 500,
	},
	align_flex_grow_shrink_basis_70: {
		alignSelf: "center",
		flexGrow: 0,
		flexShrink: 1,
		flexBasis: 70,
	},
	align_flex_grow_shrink_basis_65: {
		alignSelf: "center",
		flexGrow: 0,
		flexShrink: 1,
		flexBasis: 65,
	},
	align_flex_grow_shrink_basis_150: {
		alignSelf: "center",
		flexGrow: 0,
		flexShrink: 1,
		flexBasis: 150,
	},
	// flex + justify + align
	flex_row_align_start: {
		flexDirection: "row", 
		alignItems: "flex-start", 
	},
	flex_row_align_center: {
		flexDirection: "row", 
		alignItems: "center", 
	},
	flex_row_align_end: {
		flexDirection: "row", 
		alignItems: "flex-end", 
	},
	flex_row_space_between: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	align_justify_center: {
		justifyContent: "center",
		alignItems: "center",
	},
	align_center_justify_start: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	align_end_justify_center: {
		justifyContent: "center",
		alignItems: "flex-end",
	},
	align_items_self_center: {
		alignItems: "center",
		alignSelf: "center"
	},
	flex_row_align_justify_center: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		// alignSelf: "center",
	},
	flex_row_space_between_align_center: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	align_items_self_justify_center: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	// Background Color
	background_transparent: {
		backgroundColor: "transparent",
	},
	background_grey: {
		backgroundColor: Colors.grey_bg,
	},
	background_grey_08: {
		backgroundColor: Colors.grey_08,
	},
	background_white: {
		backgroundColor: Colors.white,
	},
	background_white_03: {
		backgroundColor: Colors.white_03,
	},
	text_white: {
		color: Colors.white,
	},
	
	// Text styles
	text_underline: {
		textDecorationLine: "underline",
	},
	text_center: {
		textAlign: "center",
	},
	text_right: {
		textAlign: "right",
	},
	text_left: {
		textAlign: "left",
	},
	letter_space_0: {
		letterSpacing: moderateScale(0),
	},
});