import React, { useState } from "react";

import { Text, Keyboard, View, Image, TextInput, TouchableOpacity,TouchableWithoutFeedback,ImageBackground, KeyboardAvoidingView, } from "react-native";
import styles from "./ProfileStyle";
import containerStyle from '../../Screens/containerStyle'
export default function CreatePostScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={containerStyle.container}>
      <ImageBackground
        source={require("../../BG.png")}
        style={containerStyle.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : 250}
        >
    <View style={styles.container}>
      <Image style={styles.image} />
    <Text style={styles.name}>Dima Ibragimov</Text>

      <View
        style={{
          justifyContent: "center",
          gap: 32,
          marginTop: 33,
          alignItems: "center",
          marginLeft:'auto',
          marginRight:"auto"
        }}
      >
       <View style={{gap:8 }}>
        <Image style={{width:343, height:240, backgroundColor:"#F6F6F6", borderRadius:8, }}/>
        <Text>Ліс</Text>
       </View>
       <View>
        <Image style={{width:343, height:240, backgroundColor:"#F6F6F6", borderRadius:8}}/>
        <Text>Ліс</Text>
       </View>
      </View>
      
   
    </View>
    </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
  )
}
