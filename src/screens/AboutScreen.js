import React, { Component } from "react";
import { StyleSheet } from "react-native";
import FooterComponent from "../FooterComponent";
import {
  Container,
  Header,
  Title,
  Content,
  Right,
  Body,
  Text,
  Left,
  Icon,
  Button
} from "native-base";

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "About",
    headerLeft: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.container}>
          <Text>This App is Developed By::</Text>
          <Text>H. M. MOHIDUL ISLAM(SHOVON)</Text>
        </Content>
        <FooterComponent navigation={navigation} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
