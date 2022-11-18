import React, {useState} from "react";
import { View, Text,Image, ScrollView, StyleSheet ,useWindowDimensions} from "react-native";
import  Logo from "../../../assets/images/Logo.jpg"
import CustomButton from "../../componets/CustomButton";
import CustomInput from "../../componets/CustomInput"




  
function RegisterUserScreen() {
    const {height} = useWindowDimensions()

    const {username,setUsername} = useState('')
    const {password,setPassword} = useState('')
 
  return (
    <View style = {styles.root}>
      <Image source={Logo} style = {[styles.logo,{height : height * 0.3}]} resizeMode = "contain" />
      <CustomInput icon = {"user"}placeholder={ "username"} value = {username} setValue = {setUsername}/>
      <CustomInput icon = {"onepassword"} placeholder={ "password"} value = {password} setValue = {setPassword} secureTextEntry = {true}/>
    

    <CustomButton />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems:"center",
        padding:20

    },
    logo: {
        width:"70%",
        maxWidth:300,
        maxHeight:200
    }
});

export default RegisterUserScreen;
