import React, { useState } from "react";
import styles from "./styleRegistration";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
export default function Registration() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputLogin = (text) => setLogin(text);
  const inputEmail = (text) => setEmail(text);
  const inputPassword = (text) => setPassword(text);
  const infoRegistration = () => {
    console.log("Login", login);
    console.log("Email", email);
    console.log("Password", password);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} />

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#FF6C00" }}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Реєстрація</Text>
      <View
        style={{
          justifyContent: "center",
          gap: 16,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={"Логін"}
          value={login}
          onChangeText={inputLogin}
          style={styles.input}
        />
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
        onPress={infoRegistration}
        style={styles.btnRegistration}
        activeOpacity={0.8}
      >
        <Text style={styles.textRegistration}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signIn}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
}
