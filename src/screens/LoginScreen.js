
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React,{useState} from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

    const LoginScreen = (props) => {
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');

      const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }



     
    

  return (
    <View style={styles.container}>

    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Email."
      value='email'
      placeholderTextColor="white"
       onChangeText={(email) => setEmail(email)}
    /> 
  </View> 
  
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Password."
      placeholderTextColor="white"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
    /> 
  </View>
  <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>props.navigation.navigate("SignIn")}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={styles.loginText}>Register</Text> 
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#0096FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
   
  },
  loginBtn:
  {
    width:"50%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#5F9EA0",
  }

});

export default LoginScreen;
