import React, { Component } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Right,
  Body,
  Text,
  Card,
  CardItem,
  Button,
  Icon,
  Drawer,
  Left,
  Input
} from "native-base";
import SideMenuComponent from "../SideMenuComponent";
import FooterComponent from "../FooterComponent";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }
  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
        this.arrayHolder = responseJson.movies;
      });
  }
  searchFilter(text) {
    const filteredData = this.arrayHolder.filter(item => {
      return item.title.toUpperCase().indexOf(text.toUpperCase()) > -1;
    });
    this.setState({
      dataSource: {
        movies: filteredData
      }
    });
  };

  RenderEachItem = ({ item }) => {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>
              {item.title} ({item.releaseYear})
            </Text>
            <Button
              iconLeft
              dark
              small
              onPress={() => {
                this.props.navigation.navigate("Details", { item });
              }}
            >
              <Icon name="cog" />
              <Text>Details</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    );
  };
  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }
  render() {
    const { isLoading, dataSource } = this.state;

    if (isLoading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue"></ActivityIndicator>
        </View>
      );
    }

    const { navigation } = this.props;

    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideMenuComponent navigation={navigation} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Movie List</Title>
            </Body>
            <Right></Right>
          </Header>
          <Content>
            <Input
              placeholder="Type Here To Search By Movie Name"
              onChangeText={text => {
                this.searchFilter(text);
              }}
            />
            <FlatList
              data={dataSource ? dataSource.movies : []}
              renderItem={this.RenderEachItem}
              keyExtractor={item => item.id}
            />
          </Content>
          <FooterComponent navigation={navigation} />
        </Container>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
