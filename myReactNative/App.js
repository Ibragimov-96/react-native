
import * as Font from 'expo-font';
import Registration from "../myReactNative/Screens/RegistrationScreen.js";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {

  return (
    
       <View style={styles.container}>
       
        <Registration/>
        
       </View>
   
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30
  },
});