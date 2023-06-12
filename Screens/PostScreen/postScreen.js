import React, { useState } from "react";


import { Feather } from '@expo/vector-icons';

import { Text, View, Image,TextInput, TouchableOpacity } from "react-native";
import styles from "./postScreenStyle";
export default function PostScreen(){


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Публікації</Text>
                <TouchableOpacity style={styles.logOut}>
                 
                <Feather name="log-out" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                
           </View>
           <View style={styles.containerUser}>
            <Image style={styles.avatar} />
            <View >
           
                <Text style={styles.userName}>Dima Ibragimov</Text>
                <Text style={styles.userEmail}>dima.ibragimov@ukr.net</Text>
            </View>
           </View>
        </View>
    )
}