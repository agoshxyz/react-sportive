import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'

const bgImage = require('../assets/background.jpg')

const Login = ({navigation}) => {
    return(
        <ImageBackground source={bgImage} style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>LOGIN</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                    <Text>Go to Routes Page</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>




        
    )
}

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: "center", 
    alignItems: "center"    
},
image:{
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
},
title:{
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#224fb4",


}

})

export default Login