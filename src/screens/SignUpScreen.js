import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const SignUpScreen = (props) => {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const image = {
    uri: "https://abossmart.com/images/login1.png",
  };
  const handleSignUp = () => {
    const auth = getAuth();
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCreds) => {
          //This is for RealTime Database Implementation on Firebase
          const db = getDatabase();
          set(ref(db, "users/" + userCreds.user.uid), {
            username: name,
            email: userCreds.user.email,
          
          });
          props.navigation.navigate("Third");
          alert(" Logged In");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("FIELDS ARE EMPTY!");
    }
  };

  return (
   

    <View style={styles.container}>
        <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      >

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="black"
          onChangeText={(currentInput) => {
            setName(currentInput);
          }}
        />
      </View>
   
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="black"
          onChangeText={(currentInput) => {
            setEmail(currentInput);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(currentInput) => {
            setPassword(currentInput);
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          handleSignUp();
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4bacb8",
  },
  inputView: {
    backgroundColor: "#CCE5FF",
   // borderRadius: 30,
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
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 200,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft:150,
    color:"black"
  },
  loginBtn: {
    width: "50%",
  // borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#CCE5FF",
  },
});

export default SignUpScreen;