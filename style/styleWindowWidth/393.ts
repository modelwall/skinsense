import { stylesCommon } from "../styleCommon";
import { stylesScale } from "../styleScale";
import { stylesTextCommon } from "../styleTextCommon";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "../color";
import { moderateScale } from "react-native-size-matters";
import { FontIBM } from "../fontfamily";
import { FontSize } from "../fontsize";

export const stylesMain = StyleSheet.create({
    ...stylesCommon,
	...stylesTextCommon,
	...stylesScale,
    ...StyleSheet.create({
        get_started_button: {
            width: moderateScale(300),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(48),
			backgroundColor: Colors.dark_brown,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        save_button: {
            width: moderateScale(150),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(48),
			backgroundColor: Colors.dark_brown,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        cancel_button: {
            width: moderateScale(150),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(48),
			backgroundColor: 'white',
			borderRadius: moderateScale(18),
            borderWidth: moderateScale(1),
            borderColor: Colors.dark_brown,
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        modal_button: {
            width: moderateScale(200),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(48),
			backgroundColor: Colors.dark_brown,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        form_container: {
            width: moderateScale(330),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            marginTop: moderateScale(20),
            alignSelf: "center",
			height: moderateScale(520),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                    elevation: 3,
                },
            }),
		},
        form_forgotpwcontainer: {
            width: moderateScale(330),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            marginTop: moderateScale(20),
            alignSelf: "center",
			height: moderateScale(250),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                    elevation: 3,
                },
            }),
		},
        form_editcontainer: {
            width: moderateScale(330),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            marginTop: moderateScale(20),
            alignSelf: "center",
			height: moderateScale(480),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                    elevation: 3,
                },
            }),
		},
        modal_inner: {
            width: moderateScale(250),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            alignSelf: "center",
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
		},
        signup_button: {
            width: moderateScale(300),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(48),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        login_text_field : {
            width: moderateScale(300),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "flex-start",
			height: moderateScale(40),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                },
                android: {
                elevation: 2,
                },
            }),
		},
        form_text_field : {
            width: moderateScale(290),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "flex-start",
			height: moderateScale(35),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(10),
            borderColor: 'grey', // Add outline color
            borderWidth: 1, // Add border width
		},
        form_text_field_half : {
            width: moderateScale(140),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "flex-start",
			height: moderateScale(35),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(10),
            borderColor: 'grey', // Add outline color
            borderWidth: 1, // Add border width
		},
        scan_button : {
            width: moderateScale(200),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "flex-start",
			height: moderateScale(60),
			backgroundColor: Colors.dark_brown,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        menu_button: {
            width: moderateScale(290),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(60),
			backgroundColor: Colors.dark_brown,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        logout_button: {
            width: moderateScale(290),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(60),
			backgroundColor: Colors.white,
            borderColor: Colors.dark_brown,
            borderWidth: moderateScale(1),
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        Selection_button: {
            width: moderateScale(280),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(55),
			backgroundColor: Colors.pink_menu,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        Selection_button_2: {
            width: moderateScale(130),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(50),
			backgroundColor: Colors.pink_menu,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        history_banner: {
            width: moderateScale(345),
			height: moderateScale(110),
			backgroundColor: Colors.dark_brown,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            marginBottom: moderateScale(14),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        round_border_container: {
            borderRadius: 20, // Adjust this value as needed to control the roundness of the border
            overflow: 'hidden', // This is important to ensure the image gets clipped to the rounded border
        },
        form_containerresult: {
            width: moderateScale(330),
            height: moderateScale(380),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            marginTop: moderateScale(20),
            alignSelf: "center",
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                    elevation: 3,
                },
            }),
		},
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        form_containerresult2: {
            width: moderateScale(330),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            marginTop: moderateScale(20),
            alignSelf: "center",
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                    elevation: 3,
                },
            }),
		},
        form_consubresult: {
            width: moderateScale(330),
			// flexDirection:"row",
			// alignItems: "center",
			// justifyContent: "center",
            marginTop: moderateScale(20),
            alignSelf: "center",
			height: moderateScale(110),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			padding:moderateScale(20),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                    elevation: 3,
                },
            }),
		},
        menu_buttonresult_acne: {
            width: moderateScale(175),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(30),
			backgroundColor: Colors.pink_vanilla,
			borderRadius: moderateScale(18),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        menu_recommend_acne: {
            width: moderateScale(240),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(40),
			backgroundColor: Colors.pink_vanilla,
			borderRadius: moderateScale(18),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
		},
        menu_recommend_acne2: {
            width: moderateScale(240),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(40),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
            borderWidth: 1, // Adjust the thickness of the border as needed
            borderColor: 'black', // Change the color of the border to black
		},
        modalbg: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)', // 50% opacity black background
        },
        modalbutton: {
            width: moderateScale(300),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "center",
			height: moderateScale(40),
			backgroundColor: Colors.pink_vanilla,
            borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(16),
            // Shadow styles for iOS
            ...Platform.select({
                ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                },
                android: {
                elevation: 6,
                },
            }),
        },
        centeredView: {
            flex: 1,
            
        },
        camera_shutter: {
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: "#fff",
        },
        form_Exit : {
            width: moderateScale(70),
			flexDirection:"row",
			alignItems: "center",
			justifyContent: "flex-start",
			height: moderateScale(35),
			backgroundColor: Colors.white,
			borderRadius: moderateScale(18),
			paddingHorizontal:moderateScale(10),
            borderColor: 'grey', // Add outline color
            borderWidth: 1, // Add border width
		},
    })
});