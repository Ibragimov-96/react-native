import React, { useState } from "react";
import { Image, Button, Text, View, Link,TextInput } from "react-native";
export default function Registration () {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputLogin = (text) => setLogin(text);
  const inputEmail = (text) => setEmail(text);
  const inputPassword = (text) => setPassword(text);
  return (
    
     <View >
      <Image/>
        <Button title="+"/>
      
      <Text>Реєстрація</Text>
      <View>
        <TextInput
          placeholder={"Логін"}
          value={login}
          onChangeText={inputLogin}
        />
        <TextInput
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={inputEmail}
        />
        <TextInput
          placeholder="Пароль"
          value={password}
          onChangeText={inputPassword}
        />
      </View>
      <Button title={"Зареєструватися"}/>
      <Text>Вже є акаунт? Увійти</Text>
    </View>
   
  );
}
