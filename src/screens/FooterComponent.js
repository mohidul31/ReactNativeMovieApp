import React, { Component } from "react";
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
export default class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("About");
            }}
          >
            <Icon name="info" />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
