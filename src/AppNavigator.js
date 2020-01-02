import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import DetailsScreen from "./screens/DetailsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);