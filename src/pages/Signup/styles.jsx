import { Dimensions, Platform, StyleSheet } from "react-native";
import { BACK_COLOR_PRINCIPAL } from "../../constants/Colors";

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.16;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACK_COLOR_PRINCIPAL,
	},
	header: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	footer: {
		flex: 3,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: "#fff",
		fontWeight: "bold",
		fontStyle: "italic",
		textAlign: "center",
		fontSize: 40,
	},
	text_footer: {
		color: "#05375a",
		fontSize: 18,
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f2f2",
		paddingBottom: 5,
	},
	actionError: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#FF0000",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -12,
		paddingLeft: 10,
		color: "#05375a",
	},
	errorMsg: {
		color: "#FF0000",
		fontSize: 14,
	},
	button: {
		alignItems: "center",
		marginTop: 50,
	},
	signIn: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		flexDirection: "row",
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
	logo: {
		height: heightLogo,
		width: heightLogo,
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
});
