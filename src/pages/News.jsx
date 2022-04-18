import React from "react";
import {
  Image,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { urlEndPoint } from "../constValues";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const maxContentLenght = 70;

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

  render() {
    let { isLoading } = this.state;
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
        <>
          <TouchableOpacity
            style={{ alignItems: "flex-start", marginTop: 30, marginBottom: 15, marginLeft: 25 }}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <FontAwesome5 name={"bars"} size={30} color="#000000" />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            {this.state.dataSource.length === 0 ? (
              <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color="black"
              />
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                {this.state.dataSource.map((news, index) =>
                  news.imagen ? (
                    <TouchableOpacity
                      key={index}
                      onPress={() => Linking.openURL(`${news.link}`)}
                    >
                      <View style={styles.newsContainer}>
                        <Image
                          source={{ uri: `${news.imagen}` }}
                          style={styles.newsImage}
                        />
                        <View>
                          <Text style={styles.newsTitle}>{news.title}</Text>
                          <Text style={styles.newsContent}>
                            {news.content.length <= maxContentLenght
                              ? `${news.content}`
                              : `${news.content.substring(0, maxContentLenght)}...`}
                          </Text>
                          <Text style={styles.newsDate}>{`${news.date.substring(0, 10)}`}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ) : null
                )}
              </ScrollView>
            )}
          </View>
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  newsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    width: deviceWidth - 30,
    marginVertical: 7,
  },
  newsImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  newsTitle: {
    width: deviceWidth - 130,
    paddingLeft: 10,
    paddingTop: 5,
    fontWeight: "bold",
  },
  newsContent: {
    width: deviceWidth - 130,
    paddingLeft: 10,
    paddingTop: 5,
  },
  newsDate: {
    width: deviceWidth - 130,
    paddingLeft: 10,
    paddingTop: 5,
    alignItems: "flex-end",
    textAlign: "right"
  }
});
