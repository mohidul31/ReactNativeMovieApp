import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen }
  },
  {
    initialRouteName: "Home",
    //headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);