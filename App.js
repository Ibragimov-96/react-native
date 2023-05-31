import * as Font from "expo-font";
import Registration from "./Screens/RegistrationScreen";
// import Login from "./Screens/LoginScreen";
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

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={require("./BG.png")} style={styles.background}>
        <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : 250}>
          <Registration />
          {/* <Login/> */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  background: {
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    width: "100%",
    
 
  },
});
