import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { doc, getDoc, setDoc } from "firebase/firestore";
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

import { Ionicons } from "@expo/vector-icons";

const image = {
  uri: "https://miro.medium.com/max/1400/1*Ka9W-CfHRgTYQFXHm7ng6Q.png",
};

const Userhome = ({ navigation }) => {
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
  const [userDoc, setUserDoc] = useState(null);
  const Read = () => {
    // MARK: Reading Doc
    // You can read what ever document by changing the collection and document path here
    const myDoc = doc(db, "Newusers", "Ahmed Raihan");

    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setUserDoc(snapshot.data());
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  const Update = (value, merge) => {
    // MARK: Updating Doc
    const myDoc = doc(db, "Bikes", "MyBikes");

    // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
    setDoc(myDoc, value, { merge: merge })
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Updated Successfully!");
        setText("");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  const [bike, setBike] = useState([
    {
      requestname: "Siraz Mia",
      bikename: "R15",
      contactnumber: "01533581070",
      address: "Basaboo",

      image: image1,
      key: "1",
    },
    {
      requestname: "Abdul Momin",
      bikename: "R15",
      contactnumber: "01923901070",
      address: "Mirpur,Dhaka",
      image: image3,
      key: "2",
    },
    // { name: "R15    ",bikername: "Md.Alamin", bikecost: "300", bikemilage: "28",contactnumber: "01533431070",address: "Saydabad,Dhaka",image:image4, key: "3" },
    // { name: "Yamaha ",bikername: "Yeasir Arafat", bikecost: "400", bikemilage: "50", contactnumber: "01739581070",address: "FarmGate,Dhaka",image:image5,key: "4" },
    // { name: "KTM   ",bikername: "Omar Khayyam ", bikecost: "200", bikemilage: "3",contactnumber: "0170393961",address: "DOHS,Dhaka",image:image6,key: "5" },
    // { name: "Honda",bikername: "Samia Ahmed", bikecost: "250", bikemilage: "40",contactnumber: "01533582299",address: "Motijheel,Dhaka", image:image7,key: "6" },
    // { name: "CVR",bikername: "Asif Raihan", bikecost: "500", bikemilage: "20", contactnumber: "0198797070",address: "Rampura,Dhaka",image:image8,key: "7" },
    // { name: "Royal Enfield",bikername: "Jinnat Ara", bikecost: "1000", bikemilage: "45",contactnumber: "01325654070",address: "Mugda,Dhaka",image:image9, key: "8" },
    // { name: "4V",bikername: "Obaedul Kader", bikecost: "379", bikemilage: "38", contactnumber: "01765657070",address: "Link Road,Dhaka",image:image2,key: "9" },
    // { name: "FZS",bikername: "Salam Reja", bikecost: "379", bikemilage: "32", contactnumber: "01733990047",address: "Banani,Dhaka",image:image1,key: "10" },
    // {name: "MT15", bikername: "Atif Aslam", bikecost: "379", bikemilage: "30",contactnumber: "01522323434",address: "Gulshan,Dhaka",image:image3, key: "11" },
  ]);

  return (
    <View style={styles.container}>
      <View>
        <Entypo
          name="home"
          size={50}
          onPress={() => navigation.navigate("Home")}
          color="orange"
        />
      </View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View>
        <Text style={styles.textss} onPress={Read}>
          Request
        </Text>
      </View>

      <View>
        <FlatList
          keyExtractor={(item) => {
            item.id;
          }}
          data={bike}
          renderItem={({ item }) => (
            <Card style={styles.view}>
              {userDoc != null && (
                <View>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Addcart", item)}
                  >
                    Biker Name: {item.requestname}
                  </Text>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Addcart", item)}
                  >
                    Contact Number : {item.contactnumber}
                  </Text>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Addcart", item)}
                  >
                    Address: {item.address}
                  </Text>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Addcart", item)}
                  >
                    Bike Name: {item.bikename}
                  </Text>
                </View>
              )}
              {/* <View style={styles.cardview}>
                <MaterialIcons
                  style={styles.icon}
                  name="directions-run"
                  size={30}
                  color="blue"
                />

                <MaterialIcons
                  style={styles.icon}
                  name="directions-bike"
                  size={30}
                  color="blue"
                />
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="bike-fast"
                  size={30}
                  color="blue"
                />
              </View> */}

              {/* <View>
         
                <Text
                  style={styles.text}
                  onPress={() => navigation.navigate('Addcart',item)}
                >
                  Biker Name: {item.bikername}
                </Text>
                <Text
                  style={styles.text}
                  onPress={() => navigation.navigate("Addcart",item)}
                >
                  Bike Cost : {item.bikecost} tk
                </Text>
                <Text
                  style={styles.text}
                  onPress={() => navigation.navigate("Addcart",item)}
                >
                  Bike Milage: {item.bikemilage} km
                </Text>
                
              </View> */}

              <View>
               
                <TouchableOpacity
                  style={[{ marginLeft: 10, height: 50 }]}
                  onPress={() => {
                    navigation.navigate("Addcart", item);
                  }}
                >
                  <Text style={{ marginLeft: 100 }}>
                    <Ionicons
                      name="add"
                      size={50}
                      onPress={() => {
                        navigation.navigate("Addcart", item);
                      }}
                      color="blue"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
          )}
        />
      </View>

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
    //backgroundColor:'#CCCCFF'
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 700,
  },
  text: {
    padding: 10,
    backgroundColor: "white",
    fontSize: 20,
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
    height: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default Userhome;
