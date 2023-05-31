import React, { useState } from "react";
import styles from "./loginStyle";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputEmail = (text) => setEmail(text);
  const inputPassword = (text) => setPassword(text);
  const infoLogin = () => {
    console.log("Email", email);
    console.log("Password", password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Увійти</Text>
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
      <TouchableOpacity>
        <Text style={styles.signIn}>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
}
