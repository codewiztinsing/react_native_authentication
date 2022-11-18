import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function CustomInput({ placeholder, value, setValue, secureTextEntry, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Entypo name={icon} size={20} />
      </View>

      <View style = {styles.input}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
   
  },

  input: {
    flex:1,
    height: 50,
    marginLeft:5

  },
  icon: {
  
    height: 50,
    justifyContent:"center",
    alignItems:"center"
  },
});
export default CustomInput;
