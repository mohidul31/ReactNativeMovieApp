import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import FooterComponent from "./FooterComponent";
import { Container, Header, Title, Content, Right, Body } from "native-base";
import { Card, CardItem, Button, Icon } from "native-base";

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Details"
    //headerLeft: null
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    return (
      <Container>
        <Header>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Movie Id: {item.id}</Text>
                <Text>Movie Title: {item.title}</Text>
                <Text>Release Year: {item.releaseYear}</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            light
            block
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Icon name="arrow-back" />
            <Text>Go Back</Text>
          </Button>
        </Content>

        <FooterComponent navigation={navigation} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
