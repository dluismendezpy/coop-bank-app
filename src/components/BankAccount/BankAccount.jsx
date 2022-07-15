import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Alert,
} from "react-native";
import { STORAGE_TOKEN_KEY, URL_ENDPOINT } from "../../constants/GobalValues";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { strings } from "./strings";

export default class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceAccounts: [],
      isLoading: true,
      success: false,
      token: "",
    };
  }

  getURL = () => {
    return `${URL_ENDPOINT}/resumen`;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      AsyncStorage.getItem(STORAGE_TOKEN_KEY)
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
              isLoading: false,
              dataSourceAccounts: resJson.data.cuentas,
            });
            {
              console.log("DATA: " + this.state.dataSourceAccounts);
            }
          } else {
            Alert.alert(`${strings.error}!`, strings.errorMessageTryAgain, [
              {
                text: strings.tryAgain,
                onPress: () => Alert.alert("Token"),
              },
            ]);
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
          >{`${item.tipo} / ${item.idcuenta}`}</Text>
          <View style={styles.containerBalance}>
            <Text style={styles.balanceTextStyle}>Balance: </Text>
            <Text
              style={[styles.balanceTextStyle, { flex: 1, textAlign: "right" }]}
            >
              $DOP {item.balance_disponible}
            </Text>
            <MaterialIcons name="navigate-next" color="#53115B" size={30} />
          </View>
        </View>
      </View>
    );
  };

  renderLoader = () => {
    return this.state.isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#000" />
        <FlatList
          data={this.state.dataSourceAccounts}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.idcuenta}
          ListFooterComponent={this.renderLoader()}
          onEndReachedThreshold={0}
        />
      </>
    );
  }
}
