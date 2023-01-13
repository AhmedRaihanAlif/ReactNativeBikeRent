import React, { useState } from "react";
import { db } from "../Firebase/config";

import { collection, getDocs } from "firebase/firestore";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// const image1 = { uri: "https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375" };

const AddCart = ({ route }) => {
  // const [isSelected, setSelection] = useState(false);
  // const [bike, setBike] = useState([
  //   {
  //     bikename: "Md Giyas ",
  //     contactnumber: "01533581070",
  //     address: "Basaboo,Dhaka",
  //     id: "1",
  //   },
  //   // { bikename: "Md Amir", bikecost: "250", bikemilage: "40", id: "1" },
  //   // { bikename: "Md.Alamin", bikecost: "300", bikemilage: "28", id: "1" },
  //   // { bikename: "Yeasir Arafat", bikecost: "400", bikemilage: "50", id: "1" },
  //   // { bikename: "Omar Khayyam ", bikecost: "200", bikemilage: "3", id: "1" },
  //   // { bikename: "Samia Ahmed", bikecost: "250", bikemilage: "40", id: "1" },
  //   // { bikename: "Asif Raihan", bikecost: "500", bikemilage: "20", id: "1" },
  //   // { bikename: "Jinnat Ara", bikecost: "1000", bikemilage: "45", id: "1" },
  //   // { bikename: "Obaedul Kader", bikecost: "379", bikemilage: "38", id: "1" },
  //   // { bikename: "Salam Reja", bikecost: "379", bikemilage: "32", id: "1" },
  //   // { bikename: "Atif Aslam", bikecost: "379", bikemilage: "30", id: "1" },
  // ]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={route.params.image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View>
        <Text style={styles.textss}>
          {" "}
          {route.params.name}{" "}
          <Entypo
            name="home"
            size={40}
            onPress={() => props.navigation.navigate("Home")}
            color="orange"
          />
        </Text>
      </View>

      {/* <FlatList
        // keyExtractor={({item}) => {
        //   item.key;
        // }}
        data={bike}
        renderItem={({ item }) => ( */}
      <View>
        <Card style={styles.view}>
          {/* <View style={styles.cardview}>
                <MaterialIcons
                  style={styles.icon}
                  name="directions-run"
                  size={50}
                  color="blue"
                />

                <MaterialIcons
                  style={styles.icon}
                  name="directions-bike"
                  size={50}
                  color="blue"
                />
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="bike-fast"
                  size={50}
                  color="blue"
                />
              </View> */}

          <View>
            <Text
              style={styles.text}
              // onPress={() => props.navigation.navigate("Fourth")}
            >
              {/* {item.bikename} */}
              {route.params.bikername}
            </Text>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Fourth")}
            >
              {/* Contact Number : {item.contactnumber} */}
              {route.params.bikecost}
            </Text>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Fourth")}
            >
              {/* Address: {item.address} */}
              {route.params.bikemilage}
            </Text>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Fourth")}
            >
              {/* Address: {item.address} */}
              {route.params.contactnumber}
            </Text>
            <Text
              style={styles.text}
              onPress={() => props.navigation.navigate("Fourth")}
            >
              {/* Address: {item.address} */}
              {route.params.address}
            </Text>
          </View>

          <View>
            <Button
              color="#3399FF"
              title="CONTACT"
              style={{ height: 100 }}
              onPress={() => {
                alert("Request Submitted");
              }}
            />
          </View>
        </Card>
      </View>
      {/* )}
      /> */}

      {/* <Button style={styles.buton}
color='blue'
      title=" Back"
      onPress={()=>props.navigation.navigate("Home")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCFF",
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    //height: 700,
  },
  text: {
    padding: 10,
    backgroundColor: "orange",
    fontSize: 30,
  },
  textss: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#910075",
    fontSize: 30,
    borderColor: "#910075",
    color: "white",

    marginBottom: 20,
  },
  icon: {
    padding: 10,
  },

  buton: {},
  view: {
    backgroundColor: "#FFCCFF",
    flexDirection: "column",
    width: 300,
    marginLeft: 40,
    justifyContent: "center",
    marginBottom: 20,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardview: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default AddCart;
