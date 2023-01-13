import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>

      <Button
        title="Go to Back page"
        //onPress={()=>props.navigation.navigate("SignUp")}
        onPress={() => props.navigation.navigate("Third")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SecondScreen;
