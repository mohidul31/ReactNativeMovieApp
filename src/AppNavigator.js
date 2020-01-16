import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LogInScreen from "./screens/LogInScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    Details: { screen: DetailsScreen },
    LogIn: { screen: LogInScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);