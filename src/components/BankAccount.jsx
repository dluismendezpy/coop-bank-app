import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Alert,
} from "react-native";
import Header from "./Header";
import { storageTokenKey, urlEndPoint } from "../constValues";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  componentDidMount(props) {
    AsyncStorage.getItem(storageTokenKey)
      .then((token) => {
        if (token) {
          this.setState({
            token: token,
          });
        }
      })
      .catch((err) => console.log(err.message));
    this.interval = setInterval(() => {
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
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
          >{`${item.idcuenta} / ${item.tipo}`}</Text>
          <Text style={styles.txtEmailStyle}>{item.balance_disponible}</Text>
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

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    flex: 1,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
