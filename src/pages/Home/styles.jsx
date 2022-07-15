import { Dimensions, StyleSheet } from "react-native";
import { BACK_COLOR_PRINCIPAL } from "../../constants/Colors";
import { DEFAULT_APP_FONT } from "../../constants/GobalValues";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.4;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACK_COLOR_PRINCIPAL,
	},
	header: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	footer: {
		flex: 1,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 60,
		paddingHorizontal: 30,
	},
	logo: {
		width: height_logo,
		height: height_logo,
	},
	title: {
		color: "#05375a",
		fontSize: 40,
		textAlign: "center",
		fontWeight: "bold",
		fontStyle: "italic",
		zIndex: 1,
		fontFamily: DEFAULT_APP_FONT,
	},
	text: {
		color: "grey",
		marginTop: 5,
		textAlign: "center",
		fontFamily: DEFAULT_APP_FONT,
	},
	button: {
		alignItems: "flex-end",
		marginTop: 30,
	},
	signIn: {
		width: 155,
		height: 45,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		flexDirection: "row",
	},
	textSign: {
		color: "white",
		fontWeight: "bold",
		fontFamily: DEFAULT_APP_FONT,
	},
	imageBackground: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
});
