import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useRoute from "./Screens/route";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Text,
} from "react-native";

const MainStack = createStackNavigator();
export default function App() {
  const route = useRoute(true)
  return (
    <NavigationContainer>
             {route}  
    </NavigationContainer>
  );
}

