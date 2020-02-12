import React, { Component, useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Left,
  Icon,
  Body,
  Title,
  Right
} from "native-base";
import api from "../api";
import { Alert } from "react-native";

export default class LogInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  render() {
    //const [title, setTitle] = useState("");
    //const [body, setBody] = useState("");

    const submitFormAction = async (title, body) => {
      try {
        await api.post("/articles", { title, body });
        //console.log("ok", "OK");
        Alert.alert('Success', 'Successfully Added!');
      } catch (error) {
        Alert.alert('Error', 'Failed to add');
      }
    };
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
            <Title>Log In</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Input
                value={this.state.title}
                onChangeText={text => {
                  this.setState({title: text});
                }}
              />
            </Item>
            <Item last>
              <Input
                value={this.state.body}
                onChangeText={text => {
                  this.setState({body: text});
                }}
              />
            </Item>
          </Form>
          <Button
            block
            success
            onPress={() => submitFormAction(this.state.title, this.state.body)}
          >
            <Text> Log In </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
