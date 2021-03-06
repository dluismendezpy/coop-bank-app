import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StatusBar,
	Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
	STORAGE_TOKEN_KEY,
	FIRST_NAME_USER_KEY,
	LAST_NAME_USER_KEY,
} from "../../constants/GobalValues";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACK_COLOR_PRINCIPAL } from "../../constants/Colors";
import { styles } from "./styles";
import { strings } from "./strings";

const Signup = ({ navigation }) => {
	const [data, setData] = React.useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		token: "",
		mensaje: "",
		success: false,
		check_textInputChange: false,
		secureTextEntry: true,
		isValidUser: true,
		isValidPassword: true,
	});

	React.useEffect(() => {
		const interval = setInterval(async () => {
			await AsyncStorage.setItem(STORAGE_TOKEN_KEY, data.token);
			await AsyncStorage.setItem(FIRST_NAME_USER_KEY, data.firstName);
			await AsyncStorage.setItem(LAST_NAME_USER_KEY, data.lastName);
		}, 10);
		return () => clearInterval(interval);
	});

	const { colors } = useTheme();

	const textInputChange = (val) => {
		if (val.trim().length >= 3) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
				isValidUser: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		if (val.trim().length >= 3) {
			setData({
				...data,
				password: val,
				isValidPassword: true,
			});
		} else {
			setData({
				...data,
				password: val,
				isValidPassword: false,
			});
		}
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const handleValidUser = (val) => {
		if (val.trim().length >= 3) {
			setData({
				...data,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				isValidUser: false,
			});
		}
	};

	const getUser = async function (username, password) {
		if (data.username.length === 0 || data.password.length === 0) {
			Alert.alert(strings.error, strings.emptyCredentials, [
				{ text: strings.tryAgain },
			]);
			return;
		}
		Alert.alert(strings.warning, strings.messageAfterSignup, [
			{
				text: strings.ohRight,
				onPress: () => navigation.navigate("HomeScreen"),
			},
		]);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{
					alignItems: "flex-start",
					marginTop: 30,
					marginBottom: 15,
					marginLeft: 25,
				}}
				onPress={() => navigation.openDrawer()}
			>
				<FontAwesome5 name={"bars"} size={30} color="#000000" />
			</TouchableOpacity>
			<StatusBar
				backgroundColor={BACK_COLOR_PRINCIPAL}
				barStyle="light-content"
			/>
			<View style={styles.imageContainer}>
				<Animatable.Image
					animation="bounceIn"
					duraton="1500"
					source={require("../../../assets/logo.png")}
					style={styles.logo}
					resizeMode="stretch"
				/>
			</View>
			<View style={styles.header}>
				<Text style={styles.text_header}>??{strings.signUp}!</Text>
			</View>
			<Animatable.View
				animation="fadeInUpBig"
				style={[
					styles.footer,
					{
						backgroundColor: colors.background,
					},
				]}
			>
				<Text
					style={[
						styles.text_footer,
						{
							color: colors.text,
						},
					]}
				>
					{strings.identificationNumber}
				</Text>
				<View style={styles.action}>
					<FontAwesome name="credit-card" color={colors.text} size={20} />
					<TextInput
						placeholder="Tu n??mero de c??dula"
						placeholderTextColor="#666666"
						style={[
							styles.textInput,
							{
								color: colors.text,
							},
						]}
						autoCapitalize="none"
						keyboardType="numeric"
						onChangeText={(val) => textInputChange(val)}
						onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
					/>
					{data.check_textInputChange ? (
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="green" size={20} />
						</Animatable.View>
					) : null}
				</View>
				{data.isValidUser ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>
							{strings.usernameWarningMessage}
						</Text>
					</Animatable.View>
				)}

				<Text
					style={[
						styles.text_footer,
						{
							color: colors.text,
							marginTop: 35,
						},
					]}
				>
					{strings.password}
				</Text>
				<View style={styles.action}>
					<Feather name="lock" color={colors.text} size={20} />
					<TextInput
						placeholder="Tu Contrase??a"
						placeholderTextColor="#666666"
						secureTextEntry={!!data.secureTextEntry}
						style={[
							styles.textInput,
							{
								color: colors.text,
							},
						]}
						autoCapitalize="none"
						onChangeText={(val) => handlePasswordChange(val)}
					/>
					<TouchableOpacity onPress={updateSecureTextEntry}>
						{data.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="grey" size={20} />
						)}
					</TouchableOpacity>
				</View>
				{data.isValidPassword ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>
							{strings.passwordWarningMessage}
						</Text>
					</Animatable.View>
				)}

				<TouchableOpacity
					onPress={() => navigation.navigate("HelpCenterScreen")}
				>
					<Text style={{ color: BACK_COLOR_PRINCIPAL, marginTop: 15 }}>
						{strings.troubleSigningIn}
					</Text>
				</TouchableOpacity>
				<View style={styles.button}>
					<TouchableOpacity
						style={styles.signIn}
						onPress={() => getUser(data.username, data.password)}
					>
						<LinearGradient
							colors={["#08d4c4", "#01ab9d"]}
							style={styles.signIn}
						>
							<Text
								style={[
									styles.textSign,
									{
										color: "#fff",
									},
								]}
							>
								{strings.next}
							</Text>
							<MaterialIcons name="navigate-next" color="#fff" size={20} />
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("LoginScreen")}
						style={[
							styles.signIn,
							{
								borderColor: BACK_COLOR_PRINCIPAL,
								marginTop: 15,
							},
						]}
					>
						<View style={{ flexDirection: "row" }}>
							<Text style={[styles.textSign]}>{strings.haveAnAccount} </Text>
							<Text
								style={[
									styles.textSign,
									{
										color: BACK_COLOR_PRINCIPAL,
										textDecorationLine: "underline",
									},
								]}
							>
								{strings.access}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default Signup;
