import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./CreatePostScreenStyle";
export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Створити публікацію</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Image style={styles.image} />
          <Text style={styles.textFoto}>Завантажте фото</Text>
        </View>
        <View  style={{
            marginTop:32,
          gap: 16,
         
        }}>
        <TextInput
          placeholder="Назва..."
        
        
          style={styles.input}
        />
         <TextInput
          placeholder="Місцевість"
          style={styles.input}
        />
        <TouchableOpacity
       style={styles.btn}
       
        activeOpacity={0.8}
      >
        <Text style={{
        color:"#BDBDBD"
         
        }}>Опублікувати</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
