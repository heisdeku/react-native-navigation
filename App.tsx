import React from "react";
import { View } from "react-native";

//navigation components
import DrawerNavigation from "./navigation/DrawerNavigation";
import TabNavigation from "./navigation/BottomTabNavigation";
import StackNavigation from "./navigation/StackNavigation";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StackNavigation />
    </View>
  );
}
