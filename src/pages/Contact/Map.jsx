import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";

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
    <View>
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
      <View style={{ flex: 1 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
