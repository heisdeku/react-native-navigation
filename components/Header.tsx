import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation, title }: { navigation: any; title: string }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icons} onPress={() => openMenu()}>
        <Ionicons name="md-menu" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 26,
    width: "100%",
    height: 60,
    alignContent: "center",
    justifyContent: "center",
  },
  headerTitle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
  },
  icons: {
    position: "absolute",
    left: 16,
    top: 15,
  },
});

export default Header;
