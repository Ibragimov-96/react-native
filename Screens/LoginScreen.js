import React, { useState } from "react";
import styles from "./loginStyle";
import containerStyle from '../Screens/containerStyle'
import {  
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Text, } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputEmail = (text) => setEmail(text);
  const inputPassword = (text) => setPassword(text);
  const infoLogin = () => {
    console.log("Email", email);
    console.log("Password", password);
    navigation.navigate("PostScreen")
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={containerStyle.container}>
      <ImageBackground
        source={require("../BG.png")}
        style={containerStyle.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : 250}
        >
    <View style={styles.container}>

      <Text style={styles.text} >Увійти</Text>
      <View
        style={{
          justifyContent: "center",
          gap: 16,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={inputEmail}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={inputPassword}
        />
        <Text style={styles.textShow}>Показати</Text>
      </View>
      <TouchableOpacity
        onPress={infoLogin}
        style={styles.btnRegistration}
        activeOpacity={0.8}
      >
        <Text style={styles.textRegistration}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Registration")}>
        <Text style={styles.signIn}>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
  );
}
