import React, {useState} from "react";
import { View, Text,Image, ScrollView, StyleSheet ,useWindowDimensions} from "react-native";
import  Logo from "../../../assets/images/Logo.jpg"
import styles from "./styles";
import CustomButton from "../../componets/CustomButton";
import CustomInput from "../../componets/CustomInput"




  
function RegisterUserScreen() {
    
    const {height} = useWindowDimensions()

    const {username,setUsername} = useState('')
    const {password,setPassword} = useState('')

    const loginbtnpressed = () => {
        console.warn("login btn pressed")
    }


    const forgotbtnpressed = () => {
        console.warn("forgot btn pressed")
    }
 


    const facebookbtnpressed = () => {
        console.warn("facebbok btn pressed")
    }


    const googlebtnpressed = () => {
        console.warn("google btn pressed")
    }
  return (
    <ScrollView>
    <View style = {styles.root}>

    <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Create an account</Text>
    </View>
      <CustomInput icon = {"user"}placeholder={ "username"} value = {username} setValue = {setUsername}/>
      <CustomInput icon = {"email"} placeholder={ "Email"} value = {username} setValue = {setUsername}/>
      <CustomInput icon = {"lock"} placeholder={ "password"} value = {password} setValue = {setPassword} secureTextEntry = {true}/>
      <CustomInput icon = {"lock"} placeholder={ "Repeat password"} value = {password} setValue = {setPassword} secureTextEntry = {true}/>


    <CustomButton text = "Register" onpress={loginbtnpressed} type = "PRIMARY" color = "PRIMARY" />
    <View>
        <Text>By clicking you agree that you have read the licence agreement</Text>
    </View>



    <CustomButton text = "Sign with Facebook" onpress={facebookbtnpressed} type = "PRIMARY" color = "PRIMARY" icon = "facebook-with-circle"/>
    <CustomButton text = "Sign with Google" onpress={googlebtnpressed} type = "SECONDARY" color = "SECONDARY" icon = "twitter"/>

    <CustomButton text = "Already have an account? login" onpress={googlebtnpressed} type = "SECONDARY" color = "SECONDARY"/>
    </View>
    </ScrollView>
  );
}



export default RegisterUserScreen;
