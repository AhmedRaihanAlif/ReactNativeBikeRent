import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const image = { uri: "https://reactjs.org/logo-og.png" };
const HomeScreen = (props) => {
  const image1 = {
    uri: "https://static.vecteezy.com/system/resources/previews/009/568/260/non_2x/bike-rental-mobile-app-banner-hand-hold-smartphone-with-online-application-with-bicycle-rent-station-in-modern-city-public-cycle-eco-transport-sharing-service-urban-ecological-transportation-vector.jpg",
  };
  return (
    <View style={styles.container}>
      <Image source={image1} style={{ width: 400, height: 200 }} />

      <Text style={styles.text}>Bike Rent App</Text>
      <TouchableOpacity
        style={styles.buon}
        onPress={() => props.navigation.navigate("Userhome")}
      >
        <Text>My Home</Text>
        <MaterialCommunityIcons
          name="face-man-profile"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <View style={[styles.views, { flexDirection: "row", marginTop: 0 }]}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("Third")}
        >
          <Text>Rent Bike</Text>
          <MaterialCommunityIcons name="bike" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttons, { marginLeft: 10 }]}
          onPress={() => props.navigation.navigate("PostRent")}
        >
          <Text>Post Rent</Text>
          <MaterialIcons name="post-add" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text>Login</Text>
          <FontAwesome name="sign-in" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    //backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  views: {
    flex: 1,
    width: 50,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  view: {
    flex: 1,

    flexDirection: "column",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  buon: {
    width: 100,
    height: 70,

    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 250,

    borderRadius: 50,

    // marginBottom:20
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 50,

    // marginBottom:20
  },
  buttons: {
    width: 150,
    height: 100,
    backgroundColor: "#E0E0E0",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",

    // marginBottom:20
  },
});

export default HomeScreen;
