import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import db from '../config.js'
import firebase from 'firebase';
import { render } from 'react-dom';

export default class SignupLoginScreen extends React.Component{
    
    constructor(){
        super();
        this.state={
            email    :'',
            password :''
        }
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("Successfully logged in")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("User added successsfully")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Barter System App</Text>
                <Image
                    style={{
                        width:200,
                        height:200,
                        marginLeft:70,
                        marginTop:-500
                    }}
                    source={require('../assets/Barter-Systems.png')}
                />

                <View style={styles.container2}>

                    <TextInput
                        style={styles.loginbox}
                        placeholder="abc@xyz.com"
                        placeholderTextColor="grey"
                        keyboardType='email-address'
                        onChangeText={(text)=>{
                            this.setState({
                                emailId:text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.loginbox}
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor="grey"
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                    />

                    <TouchableOpacity
                        style={[styles.button,{marginBottom:20, marginTop:20}]}
                        onPress={()=>{
                            this.userLogin(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                            this.userSignUp(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>             

                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#68C6B8',
    },
    text:{
      marginTop:10,
      marginBottom:500,
      alignSelf:'center',
      fontWeight:'bold',
      borderColor:"red",
      fontSize:25,
      textDecorationLine: 'underline',
    },
    text2:{
      marginTop:10,
      alignSelf:'center',
      fontSize:15,
    },
    loginbox:{
      borderColor:'black',
      justifyContent:'center',
      backgroundColor:'white',
      marginBottom:5,
      borderRadius:10
    },
    container2:{
      flex:1,
      alignItems:'center',
      marginTop:1,
    },
    button:{
      borderColor:'white',
      justifyContent:'center',
      backgroundColor:'#E35E28',
      fontWeight:'bold',
      marginBottom:5,
      borderRadius:8,
      width:100 ,
      alignItems:'center'   
    }
  });
  