import React from "react";
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { DEFAULT_APP_FONT } from "../../constants/GobalValues";
import { MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

const bgs = ["#645C75", "#8AA769", "#E4D366", "#B98EFF"];
const DATA = [
  {
    key: "3571573",
    title: "CoopDGII",
    rol: "Oficial de Servicio",
    phone: "809-287-2875",
    email: "info@luismendezdev.com",
    description:
      "Nuestra área de servicio siempre innovando para mantener informado a todos socios.",
    image: "https://coopdgii.com/wp-content/uploads/2019/10/Logo-Coop2-01.png",
  },
  {
    key: "3571572",
    title: "Valentina García",
    rol: "Oficial de Servicio",
    phone: "809-287-2875",
    email: "info@luismendezdev.com",
    description:
      "Nuestra área de servicio siempre innovando para mantener informado a todos socios.",
    image:
      "https://thumbs.dreamstime.com/z/young-business-woman-computer-office-business-woman-office-123519245.jpg",
  },
  {
    key: "3571747",
    title: "Isabella castillo",
    rol: "Oficial de Servicio",
    phone: "809-287-2965",
    email: "info@luismendezdev.com",
    description:
      "Nuestra área de servicio siempre innovando para mantener informado a todos socios.",
    image:
      "https://previews.123rf.com/images/michaeljung/michaeljung1408/michaeljung140800027/30664544-smart-femme-d-affaires-dans-le-bureau-africain.jpg",
  },
  {
    key: "3571680",
    title: "Mario José",
    rol: "Oficial de Servicio",
    phone: "809-297-3875",
    email: "info@luismendezdev.com",
    description:
      "Nuestra área de servicio siempre innovando para mantener informado a todos socios.",
    image:
      "https://thumbs.dreamstime.com/b/african-man-using-voice-assistant-cellphone-ai-technology-concept-joyful-black-businessman-smartphone-managing-his-business-154532065.jpg",
  },
  {
    key: "3571603",
    title: "Sara Méndez",
    rol: "Cajera Oficial de Servicios",
    phone: "809-287-6975",
    email: "info@luismendezdev.com",
    description:
      "Nuestra área de servicio siempre innovando para mantener informado a todos socios.",
    image:
      "https://womenyoushouldknow.net/wp-content/uploads/2014/08/woman-in-office-e1407953002901.jpg",
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 100, flexDirection: "row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
              opacity,
              margin: 10,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "#fff",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{ rotate }],
      }}
    />
  );
};

export default function Contact({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyStractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <StatusBar
                barStyle="dark-content"
                hidden={false}
                translucent={true}
              />
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width / 2,
                    height: height / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "800",
                      fontSize: 28,
                      marginBottom: 4,
                      fontFamily: DEFAULT_APP_FONT,
                    }}
                  >
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      item.title === "CoopDGII"
                        ? navigation.navigate("MapScreen")
                        : Alert.alert(
                            "Contacto",
                            `¿Quieres contactar a ${item.title} al numero ${item.phone}?`,
                            [
                              { text: "Cancelar", style: "cancel" },
                              { text: "Llamar" },
                              { text: "Copiar Email" },
                            ]
                          )
                    }
                  >
                    <MaterialIcons
                      name="navigate-next"
                      color="#000000"
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#000000",
                    marginBottom: 10,
                    fontFamily: DEFAULT_APP_FONT,
                  }}
                >
                  {item.rol}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "300",
                    fontFamily: DEFAULT_APP_FONT,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
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
});
