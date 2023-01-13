import React, { useState } from "react";

import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/config'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
 
} from "react-native";
import { Card, TextInput } from "react-native-paper";

import SearchBar from "../components/SearchBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const image = { uri: "https://img.freepik.com/premium-vector/woman-touching-smartphone-screen-with-bike-rental-mobile-app-girl-hold-smart-phone-with-online_502272-1992.jpg?w=2000" };
const PostRent = (props) => {
    const [username,setUsername]= useState('');
    const [bikename,setBikename]= useState('');
    const [bikecost,setBikecost]= useState('');
    const [bikemilage,setBikemilage]= useState('');
    const [contact,setContact]= useState('');
    const [nid,setNid]= useState('');
    const [location,setLocation]= useState('');
   
  // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")

  // MARK: CRUD Functions
  
  const Create = () => {
    if (username && bikename && bikecost && bikemilage && contact && nid && location ) {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    
    const myDoc = doc(db, "Newusers",username)

    // Your Document Goes Here
    const docData = {
      "name":username,
      "contactnumber": contact,
      "bikename": bikename,
      "bikecost": bikecost,
      "bikemilage": bikemilage,
      "nidnumber": nid,
      "location":location
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert(username+" Document Created Successfully!")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
  }
}

 

  return (
   
    
 <View>
    <View style={styles.buton}>
    <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
     
    </View>


<View  >
<ScrollView>
<Text style={styles.text}>Enter Name <Entypo name="user" size={30} color="black"  /></Text>

<TextInput 

placeholder="press & write username here"
onChangeText={(currentInput) => {
  setUsername(currentInput);
}}
/>
<Text style={styles.text}>Bike Name <Entypo name="user" size={30} color="black"  /></Text>

<TextInput 

placeholder="press & write bikename here"
onChangeText={(currentInput) => {
  setBikename(currentInput);
}}
/>
<Text style={styles.text}>Bike Cost <FontAwesome name="money" size={24} color="black" /></Text>

<TextInput 

placeholder="press & write bikecost here"
onChangeText={(currentInput) => {
  setBikecost(currentInput);
}}
/>
<Text style={styles.text}>Bike Milage <MaterialCommunityIcons name="map-marker-distance" size={24} color="black" /></Text>

<TextInput 

placeholder="press & write bikemilage here"
onChangeText={(currentInput) => {
  setBikemilage(currentInput);
}}
/>

<Text style={styles.text}>Enter Contact Number <Entypo name="phone" size={24} color="black" /></Text>

<TextInput

placeholder="press & write contact number here"
onChangeText={(currentInput) => {
  setContact(currentInput);
}}
/>
<Text style={styles.text}>Enter NID Number <Entypo name="v-card" size={24} color="black" /></Text>

<TextInput

placeholder="press & write nid number here"
onChangeText={(currentInput) => {
  setNid(currentInput);
}}
/>
<Text style={styles.text}>Location <Entypo name="location" size={24} color="black" /></Text>
<TextInput
placeholder="press & write location here"
onChangeText={(currentInput) => {
  setLocation(currentInput);
}}
>
  
</TextInput>
<TouchableOpacity
          style={[{marginLeft:0,height:200,width:500,backgroundColor:'#CCCCFF'}]}
          // onPress={() => props.navigation.navigate('Third')}
          onPress={Create}
        >
          <Text style={{marginLeft:160,color:'black',fontSize:30}}  >Pick</Text>
          
        </TouchableOpacity>
        </ScrollView>
</View>


 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
   // backgroundColor:'#CCCCFF',
    
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 79,
    marginBottom:80,
  },
  text: {
   
    padding: 10,
    textAlign: "center",
    alignItems:"center",
   borderRadius:0,
   borderWidth:0,
    backgroundColor:"#66B2FF",
    fontSize: 15,
    
  },
  textss: {
    padding: 10,
    textAlign: "center",
    alignItems:"center",
   borderRadius:30,
   borderWidth:2,
    backgroundColor:"#66B2FF",
    fontSize: 20,

   
  },
  texts: {
    padding: 10,
    textAlign: "center",
    alignItems:"center",
  
    fontSize: 40,

   
  },
  icon: {
    padding: 10,
  },
  but: {
    marginTop:75,
    height:100
  },
  buton: {
    
    backgroundColor:'#CCCCFF'
  },
  view: {
    backgroundColor: "#FFCCFF",
    flexDirection: "column",
    width: 300,
    marginLeft: 40,
    justifyContent: "center",
    marginBottom:500,
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

export default PostRent;

// import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// // Using DB Reference
// import { db } from '../screens/config'

// export default function Cruds() {

//   // Storing User Data
//   const [userDoc, setUserDoc] = useState(null)
//   // Update Text
//   const [text, setText] = useState("")

//   // MARK: CRUD Functions
//   const Create = () => {
//     // MARK: Creating New Doc in Firebase
//     // Before that enable Firebase in Firebase Console
//     const myDoc = doc(db, "Bikes", "MyBikes")

//     // Your Document Goes Here
//     const docData = {
//       "name": "iJustine",
//       "bio": "YouTuber"
//     }

//     setDoc(myDoc, docData)
//       // Handling Promises
//       .then(() => {
//         // MARK: Success
//         alert("Document Created!")
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })
//   }

//   const Read = () => {
//     // MARK: Reading Doc
//     // You can read what ever document by changing the collection and document path here
//     const myDoc = doc(db, "Bikes","MyBikes")

//     getDoc(myDoc)
//       // Handling Promises
//       .then((snapshot) => {
//         // MARK: Success
//         if (snapshot.exists) {
//           setUserDoc(snapshot.data())
//         }
//         else {
//           alert("No Doc Found")
//         }
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })

//   }

//   const Update = (value, merge) => {
//     // MARK: Updating Doc
//     const myDoc = doc(db, "Bikes", "MyBikes")

//     // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
//     setDoc(myDoc, value, { merge: merge })
//       // Handling Promises
//       .then(() => {
//         // MARK: Success
//         alert("Updated Successfully!")
//         setText("")
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })
//   }

//   const Delete = () => {
//     // MARK: Deleting Doc
//     const myDoc = doc(db, "Bikes", "MyBikes")

//     deleteDoc(myDoc)
//       // Handling Promises
//       .then(() => {
//         // MARK: Success
//         alert("Deleted Successfully!")
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })

//   }

//   return (
//     <View style={styles.container}>
//       <Button title='Create New Doc' onPress={Create}></Button>
//       <Button title='Read Doc' onPress={Read}></Button>
//       {
//         userDoc != null &&
//         <Text>Bio: {userDoc.bio}</Text>
//       }
//       <TextInput style={{
//         width: '95%',
//         fontSize: 18,
//         padding: 12,
//         borderColor: 'gray',
//         borderWidth: 0.2,
//         borderRadius: 10,
//         marginVertical: 20
//       }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

//       <Button title='Update Doc' onPress={() => {
//         Update({
//           "bio": text
//         }, true)
//       }} disabled={text == ""}></Button>
//       <Button title='Delete Doc' onPress={Delete}></Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });