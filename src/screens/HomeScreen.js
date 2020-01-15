import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";

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
  Left
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
      });
  }

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
        <View>
          <ActivityIndicator size="large" color="red"></ActivityIndicator>
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
            <Right />
          </Header>
          <Content>
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
