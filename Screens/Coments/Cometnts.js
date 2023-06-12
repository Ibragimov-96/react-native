import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./ComentsStyle";
export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Коментарі</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Image style={styles.image} />
         
        </View>
        <View  style={styles.containerComent}>
       <View style={{display:"flex", flexDirection:'row',  gap:16}}>
        <Image style={{borderRadius:100, width:28, height:28, backgroundColor:"#FF6C00"}}/>
        <View>
            <Text>Adhgpaiufjsnbksa  hsd;vb.sdjhG;KJDSV UIKdsh;fjbvsdk lksdjbfk:Jb;kjsd</Text>
            <Text>15.11.1996| 10:30</Text>
        </View>
        
       </View>
       <View style={{display:"flex", flexDirection:'row',  gap:16}}>
        <Image style={{borderRadius:100, width:28, height:28, backgroundColor:"#FF6C00"}}/>
        <View>
            <Text>Adhgpaiufjsnbksa  hsd;vb.sdjhG;KJDSV UIKdsh;fjbvsdk lksdjbfk:Jb;kjsd</Text>
            <Text>15.11.1996| 10:30</Text>
        </View>
        
       </View>
       <TextInput
          placeholder="Коментувати..."
          style={styles.input}
        />
        </View>
       
      </View>
      
    </View>
  );
}
