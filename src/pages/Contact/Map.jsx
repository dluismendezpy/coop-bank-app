import * as React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { DEFAULT_APP_FONT } from "../../constants/GobalValues";
import { LinearGradient } from "expo-linear-gradient";
import { strings } from "../Home/strings";

const lat = 18.474509509541246;
const log = -69.902739253968;

export default function Map({ navigation }) {
	const [pin, setPin] = React.useState({
		latitude: lat,
		longitude: log,
	});
	const [region, setRegion] = React.useState({
		latitude: lat,
		longitude: log,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	});

	return (
		<>
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

			<View style={styles.mapContainer}>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: lat,
						longitude: log,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}}
					provider="google"
				>
					<Marker
						coordinate={{
							latitude: region.latitude,
							longitude: region.longitude,
						}}
					/>
					<Marker
						coordinate={pin}
						pinColor="red"
						draggable={true}
						onDragStart={(e) => {
							console.log("Drag start", e.nativeEvent.coordinates);
						}}
						onDragEnd={(e) => {
							setPin({
								latitude: e.nativeEvent.coordinate.latitude,
								longitude: e.nativeEvent.coordinate.longitude,
							});
						}}
					>
						<Callout>
							<Text>CoopDGII</Text>
						</Callout>
					</Marker>
					<Circle center={pin} radius={1000} />
				</MapView>
			</View>

			<View style={styles.textContainer}>
				<View>
					<Text style={styles.textTitle}>Whatsapp</Text>
					<View style={{ flexDirection: "row" }}>
						<MaterialIcons
							style={{ marginTop: 5, marginLeft: 10 }}
							name="phone"
							color="#000000"
							size={20}
						/>
						<Text style={styles.textInfo}>(849) 451-0798</Text>
					</View>
				</View>
				<View>
					<Text style={styles.textTitle}>Oficina</Text>
					<View style={{ flexDirection: "row" }}>
						<MaterialIcons
							style={{ marginTop: 5, marginLeft: 10 }}
							name="phone"
							color="#000000"
							size={20}
						/>
						<Text style={styles.textInfo}>(809) 287-2700</Text>
					</View>
				</View>
			</View>
			<View style={styles.button}>
				<TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
					<LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
						<Text style={styles.textSign}>Vorver a inicio</Text>
						<MaterialIcons name="navigate-next" color="#fff" size={20} />
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	mapContainer: {
		flex: 1,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height / 1.6,
	},
	textContainer: {
		flex: 0.5,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	textTitle: {
		fontFamily: DEFAULT_APP_FONT,
		fontWeight: "bold",
		fontStyle: "normal",
		fontSize: 18,
		marginLeft: 10,
		marginRight: 10,
	},
	textInfo: {
		fontFamily: DEFAULT_APP_FONT,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
	},
	button: {
		alignItems: "flex-end",
		marginBottom: 20,
		marginRight: 20,
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
});
