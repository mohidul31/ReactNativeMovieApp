import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,Card, CardItem
} from "native-base";
export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: null
        };
      }
      static navigationOptions = {
        title: "Home",
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
              </Body>
            </CardItem>
          </Card>
        );
      };
  render() {
    const { isLoading, dataSource } = this.state;

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="red"></ActivityIndicator>
        </View>
      );
    }
    return (
      <Container>
        <Header>
         
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
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Shovon Movie App</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
