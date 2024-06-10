import { Dimensions } from "react-native";
export const windowWidth = {
	windowWidth320: Dimensions.get("window").width <= 320, //iPhone SE / 5S / 5C
	windowWidth360: Dimensions.get("window").width <= 360, //iPhone 3 mini / 12 mini / //Android
	windowWidth375: Dimensions.get("window").width <= 375, //iPhone SE 3 / SE 2 / 11 Pro / X / XS / 8 / 7 / 6S / 6
	windowWidth393: Dimensions.get("window").width <= 393, //iPhone 14 / 13 Pro / 13 / 12 Pro / 12 / Android / iPhone 14 pro (390/392/393)
	windowWidth400: Dimensions.get("window").width <= 400, //Android
	windowWidth414: Dimensions.get("window").width <= 414, //iPhone 11 Pro Max / 11 / XR / XS Max / 8+ / 7+ / 6S+ / 6+ / Android (411/414)
	windowWidth430: Dimensions.get("window").width <= 430, //iPhone 14 Plus / 13 Pro Max / 12 Pro Max iPhone 14 Pro Max (428/430)
	windowWidth448: Dimensions.get("window").width <= 448, //Android
	windowWidth480: Dimensions.get("window").width <= 480, //Android
	windowWidth540: Dimensions.get("window").width <= 540, //iPad / tablet (533/540)
	windowWidth603: Dimensions.get("window").width <= 603, //iPad / tablet (600/603)
	windowWidth720: Dimensions.get("window").width <= 720, //iPad / tablet
	windowWidth744: Dimensions.get("window").width == 744, //iPad / tablet
	windowWidth768: Dimensions.get("window").width <= 768, //iPad / tablet
	windowWidth800: Dimensions.get("window").width <= 800, //iPad / tablet
	windowWidth810: Dimensions.get("window").width <= 810, //iPad / tablet
	windowWidth820: Dimensions.get("window").width <= 820, //iPad / tablet
	windowWidth834: Dimensions.get("window").width <= 834, //iPad / tablet
	windowWidth853: Dimensions.get("window").width <= 853, //iPad / tablet
	windowWidth1024: Dimensions.get("window").width <= 1024, //iPad / tablet
	windowWidth1280: Dimensions.get("window").width <= 1280, //iPad / tablet
};