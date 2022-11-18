import React, {useState} from "react";
import { View, Text,Image, ScrollView, StyleSheet ,useWindowDimensions} from "react-native";
import  Logo from "../../../assets/images/Logo.jpg"
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

   
      <Image source={Logo} style = {[styles.logo,{height : height * 0.3}]} resizeMode = "contain" />
      <CustomInput icon = {"user"}placeholder={ "username"} value = {username} setValue = {setUsername}/>
      <CustomInput icon = {"onepassword"} placeholder={ "password"} value = {password} setValue = {setPassword} secureTextEntry = {true}/>
    

    <CustomButton text = "Login" onpress={loginbtnpressed} type = "PRIMARY" color = "PRIMARY" />
    <CustomButton text = "forgot password ?" onpress={forgotbtnpressed} type = "SECONDARY" color = "SECONDARY"/>


    <CustomButton text = "Sign with Facebook" onpress={facebookbtnpressed} type = "PRIMARY" color = "PRIMARY" icon = "facebook-with-circle"/>
    <CustomButton text = "Sign with Google" onpress={googlebtnpressed} type = "SECONDARY" color = "SECONDARY" icon = "twitter"/>

    <CustomButton text = "Don't hava an account? create one" onpress={googlebtnpressed} type = "SECONDARY" color = "SECONDARY"/>
    </View>
    </ScrollView>
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
