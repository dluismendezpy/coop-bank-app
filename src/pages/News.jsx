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

const SPACING = 20;

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch("http://10.0.0.12:8000/news/article-list/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          });
        });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => Alert.alert(item.name, item.content)}>
        <View style={styles.container}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.createdAt}>{item.created_at}</Text>
          <Text style={styles.content}>{item.content}</Text>
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
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={StyleSheet.absoluteFillObject}
            blurRadius={80}
          />
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
