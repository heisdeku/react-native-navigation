import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import Header from "../components/Header";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Home is here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: Dimensions.get("screen").height },
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
