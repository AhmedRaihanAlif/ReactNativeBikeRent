import React, { useState } from "react";

import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/config";
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
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";

const image = {
  uri: "https://cdn3.vectorstock.com/i/1000x1000/21/37/logo-for-bicycle-rental-vector-25512137.jpg",
};
const image1 = {
  uri: "https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375",
};
const image3 = {
  uri: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};
const image4 = {
  uri: "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?cs=srgb&dl=pexels-nishant-aneja-2393821.jpg&fm=jpg",
};
const image5 = {
  uri: "https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx",
};
const image6 = {
  uri: "https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/Pulsar-NS160.ashx",
};
const image7 = {
  uri: "https://media.istockphoto.com/id/1390818814/photo/motorcycle-ktm-duke-125.jpg?s=612x612&w=0&k=20&c=690ywpWSVJl0izwD4wPs8m6wihfuLilvX5r0KNe4_Xk=",
};
const image8 = {
  uri: "https://i.pinimg.com/originals/b2/d1/7a/b2d17ab80a2e7f2b8a2cbf12d19b70be.jpg",
};
const image9 = {
  uri: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/97549/left-front-three-quarter.jpeg?q=100",
};
const image2 = {
  uri: "https://i.pinimg.com/550x/a0/e1/30/a0e130e2ba0c03662645c346218392b5.jpg",
};
const Bikecard = (props) => {
  const [bike, setBike] = useState([
    { name: "Gixxer ", image: image1, id: "1" },
    { name: "Pulsar ", image: image2, id: "2" },
    { name: "R15    ", image: image3, id: "3" },
    { name: "Yamaha ", image: image4, id: "4" },
    { name: "KTM   ", image: image5, id: "5" },
    { name: "Honda", image: image6, id: "6" },
    { name: "CVR", image: image7, id: "7" },
    { name: "Royal Enfield", image: image8, id: "8" },
    { name: "4V", image: image9, id: "9" },
    { name: "FZS", image: image1, id: "10" },
    { name: "MT15", image: image4, id: "11" },
  ]);

  return (
    <View style={styles.container}>
   
      <View style={styles.cont}>
        <Text style={styles.textss}>Dashboard </Text>
        <SearchBar />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate("RequestAccept")}
      >
        <Text>Request</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => {
          item.id;
        }}
        data={bike}
        renderItem={({ item }) => (
          <View>
            <Card style={styles.view}>
              <View style={styles.cardview}>
              <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
               
              </View>

              <View>
                <Text
                  style={styles.text}
                  onPress={() => props.navigation.navigate("Fourth")}
                >
                  {item.name}
                </Text>
              </View>

              <View>
                <Button
                  color="#3399FF"
                  title={item.name}
                  style={{ height: 100 }}
                  onPress={() => props.navigation.navigate("Fourth")}
                />
                {/* <Button title='Read Doc' onPress={Read}></Button>
      {
        userDoc != null &&
        <Text>Bio: {userDoc.name}</Text>
      } */}
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
  cont: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
    // paddingTop:40
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 380,
    height: 200,
  },
  text: {
    padding: 10,
    backgroundColor: "white",
    fontSize: 30,
  },
  textss: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 30,
    borderColor: "#910075",
    width: 200,

    marginLeft: 0,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 220,
    marginBottom: 10,
    backgroundColor: "#990000",
  },
  icon: {
    padding: 10,
  },

  buton: {},
  view: {
    backgroundColor: "#FFCCFF",
    flexDirection: "column",
    width: 385,
    marginLeft: 0,
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

export default Bikecard;
