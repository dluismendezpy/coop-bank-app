import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Alert, Button } from "react-native";
import React from "react";

export default function ClearData({ navigation }) {
  const logout = async () => {
    const keys = AsyncStorage.getAllKeys();
    AsyncStorage.multiRemove(await keys).then((data) => console.log(data));
    navigation.navigate("HomeScreen");
  };

  return (
    <View>
      <Button
        title="Salir"
        onPress={() =>
          Alert.alert("Logout", "¿Estas seguro que quieres cerrar sesion?", [
            { text: "Si", onPress: () => logout() },
          ])
        }
      />
    </View>
  );
}
