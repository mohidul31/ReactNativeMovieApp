import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Button,
  Icon
} from "native-base";
import { Image } from "react-native";
const routes = ["Login","Home", "About"];

export default class SideMenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  closeDrawer() {
    this.drawer._root.close();
  }
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require("../assets/movie_logo.jpg")}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          ></Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
