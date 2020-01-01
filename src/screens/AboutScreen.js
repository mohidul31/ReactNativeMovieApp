import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import FooterComponent from "./FooterComponent";
import { Container, Header, Title, Content, Right, Body } from "native-base";

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
          <Body>
            <Title>About</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text  style={styles.about}>This App is Developed By SHOVON</Text>
        </Content>
        <FooterComponent navigation={navigation} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});