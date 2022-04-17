import React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { urlEndPoint } from "../constValues";

const SPACING = 20;

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  getURL = () => {
    return `${urlEndPoint}/noticias`;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch(this.getURL(), {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.data,
          });
        })
        .catch((err) => console.log(err.message));
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => Alert.alert(item.name, item.content)}>
        <View style={styles.container}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.createdAt}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let { dataSource, isLoading } = this.state;
    if (isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" animated />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: "#21337e" }}>
          <TouchableOpacity
            style={{ alignItems: "flex-start", marginTop: 30, marginLeft: 25 }}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <FontAwesome5 name={"bars"} size={30} color="#000000" />
          </TouchableOpacity>
          <StatusBar hidden />
          <FlatList
            data={dataSource}
            contentContainerStyle={{
              padding: SPACING,
              paddingTop: StatusBar.currentHeight || 42,
            }}
            renderItem={this._renderItem}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: "rgb(215,202,202)",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
  },
  createdAt: {
    fontSize: 18,
    opacity: 0.7,
  },
  content: {
    fontSize: 14,
    opacity: 0.8,
  },
});
