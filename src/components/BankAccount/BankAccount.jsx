import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Alert,
} from "react-native";
import Header from "../Header";
import { storageTokenKey, urlEndPoint } from "../../constValues";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from "./styles";

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
              isLoading: false,
              dataSourceAccounts: resJson.data.cuentas,
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
      <View style={styles.itemWrapperStyle}>
        {/*<Image*/}
        {/*  style={styles.itemImageStyle}*/}
        {/*  source={{ uri: item.picture.large }}*/}
        {/*/>*/}
        <View style={styles.contentWrapperStyle}>
          <Text
            style={styles.txtNameStyle}
          >{`${item.tipo} / ${item.idcuenta}`}</Text>
          <View style={styles.containerBalance}>
            <Text>Balance: </Text>
            <Text style={{ textAlign: "right" }}>
              {item.balance_disponible}
            </Text>
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
        <Header />
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
