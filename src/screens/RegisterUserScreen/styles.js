import { StyleSheet, useWindowDimensions } from "react-native";



const styles = StyleSheet.create({
    root: {
        alignItems:"center",
        padding:20

    },
    logo: {
        width:"70%",
        maxWidth:300,
        maxHeight:200
    },
    titleContainer:{
        width:"100%",
        height:300,
        maxWidth:300,
        maxHeight:200,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        fontWeight:"bold",
        fontSize:32
    }
});

export default styles;