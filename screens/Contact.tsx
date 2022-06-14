import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import Header from "../components/Header";

export default function Contact({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Header title="Contact" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here</Text>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03cafc",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "800",
  },
});
