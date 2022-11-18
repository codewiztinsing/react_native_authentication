import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function CustomButton({ text, onpress, type, color, icon }) {
  return icon ? (
    <View style={styles.socialMediaContainer}>
           <View style = {styles.socialIcon}>
        <Entypo name={icon} size={35} />
      </View>

      <View style = {styles.socialButton}>
     
        <TouchableOpacity
          onpress={onpress}
          style={[styles.container, styles[`container_${type}`]]}
        >
          <Text style={[styles.text, styles[`container_${color}`]]}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <TouchableOpacity
      onpress={onpress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`container_${color}`]]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_PRIMARY: {
    color: "white",
  },

  text_SECONDARY: {
    color: "#414242",
  },
  container_PRIMARY: {
    backgroundColor: "#102740",
  },
  container_SECONDARY: {
    backgroundColor: "#ced5db",
  },

  socialMediaContainer: {

    width:"100%"
  },
  socialIcon: {
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    zIndex: 3, // works on ios
    elevation: 3,

  },

  socialButton: {
    flex:1,
    width:"100%"


  },
});

export default CustomButton;
