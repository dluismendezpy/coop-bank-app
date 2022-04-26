import React from "react";
import { View, Text, FlatList, StatusBar, Alert } from "react-native";
import { storageTokenKey, urlEndPoint } from "../../constValues";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default class BankLoans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceAccounts: [],
      success: false,
      token: "",
    };
  }

  getURL = () => {
    return `${urlEndPoint}/resumen`;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      AsyncStorage.getItem(storageTokenKey)
        .then((token) => {
          if (token) {
            this.setState({
              token: token,
            });
          }
        })
        .catch((err) => console.log(err.message));
      fetch(this.getURL(), {
        method: "POST",
        body: `token=${this.state.token}`,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.success) {
            this.setState({
              success: resJson.success,
              dataSourceAccounts: resJson.data.prestamos,
            });
            {
              console.log("DATA: " + this.state.dataSourceAccounts);
            }
          } else {
            Alert.alert(
              "Error!",
              "Ha ocurrido un error. Vuelve a intentarlo.",
              [
                {
                  text: "Reintentar",
                  onPress: () => Alert.alert("Token"),
                },
              ]
            );
          }
        })
        .catch((err) => console.log(err.message));
    }, 2000);
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapperStyle}>
          <Text
            style={styles.accountTypeText}
          >{`PRESTAMO / ${item.idprestamo}`}</Text>
          <View style={styles.containerBalance}>
            <Text style={styles.balanceTextStyle}>Balance: </Text>
            <Text
              style={[styles.balanceTextStyle, { flex: 1, textAlign: "right" }]}
            >
              $DOP {item.balance_prestamo}
            </Text>
            <MaterialIcons name="navigate-next" color="#53115B" size={30} />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#000" />
        <FlatList
          data={this.state.dataSourceAccounts}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.idcuenta}
          onEndReachedThreshold={0}
        />
      </>
    );
  }
}
