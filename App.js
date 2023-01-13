import HomeScreen from "./src/screens/HomeScreen";
import SecondScreen from "./src/screens/SecondScreen";
import Bikecard from "./src/screens/Bikecard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
// import Crud from "./src/screens/Crud";
// import Card from "./src/components/Card";
import Cart from "./src/screens/cart";
import AddCart from "./src/screens/addcart";
import PostRent from "./src/screens/postrent";
import Cruds from "./src/screens/Crud";
import Userhome from "./src/screens/userhome";
import RequestAccept from "./src/screens/request";

const Stack = createNativeStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyCRTxXxP8G6pSFhyOXVrHQBOHTabmZ-k3c",
//   authDomain: "mobilerentapp.firebaseapp.com",
//   projectId: "mobilerentapp",
//   storageBucket: "mobilerentapp.appspot.com",
//   messagingSenderId: "1062825783865",
//   appId: "1:1062825783865:web:a69e1e95e66c881b2c93e8"
// };

// // Initialize Firebase
// if (!firebase.length) {
//  firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PostRent" component={PostRent} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={Bikecard} />
        <Stack.Screen name="Fourth" component={Cart} />
        <Stack.Screen name="Crud" component={Cruds} />
        <Stack.Screen name="RequestAccept" component={RequestAccept} />
        <Stack.Screen name="Userhome" component={Userhome} />
        <Stack.Screen name="Addcart" component={AddCart} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
       
        {/* <Stack.Screen
        name="Cardstyle"
        component={Card}
        
      /> */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
