import React from "react";
import DrawerNavigation from "./navigation/DrawerNavigation";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigation />
    </View>
  );
}
