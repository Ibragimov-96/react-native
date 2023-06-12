import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator()

import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./PostScreen/postScreenStyle";
import Registration from "../Screens/RegistrationScreen";
import Login from "../Screens/LoginScreen";
import PostScreen from "../Screens/PostScreen/postScreen";
import CreatePostScreen from "../Screens/CreatePostScreen/CreatePostScreen";
import Coments from "../Screens/Coments/Cometnts";
import Profile from "../Screens/Profile/Profile";
const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={Registration} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen options={{tabBarIcon:({focused,size, color})=>(<AntDesign name="appstore-o" size={size} color={color} />), title :""}}  name="Profile" component={PostScreen} />
      <MainTab.Screen options={{tabBarIcon:({focused,size, color})=>(<Fontisto name="plus-a" style={styles.btnAdd} size={13} color="#FFFFFF" />), title :""}}name="PostScreen" component={CreatePostScreen} />
      <MainTab.Screen options={{tabBarIcon:({focused,size, color})=>(<Ionicons name="md-man-outline" size={24} color="black" />), title :""}}name="CreatePostScreen" component={Profile} />
    </MainTab.Navigator>
  );
};
export default useRoute